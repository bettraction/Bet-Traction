import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { verifyMessage } from 'viem';

@Injectable()
export class AuthService {
  private nonces = new Map<string, { nonce: string; expires: number }>();

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  generateNonce(walletAddress: string) {
    const nonce = `Sign this message to login to BetTraction: ${Date.now()}`;
    const expires = Date.now() + 5 * 60 * 1000;
    this.nonces.set(walletAddress.toLowerCase(), { nonce, expires });
    return { nonce, expires_at: new Date(expires) };
  }

  async login(walletAddress: string, signature: string, nonce: string) {
    const stored = this.nonces.get(walletAddress.toLowerCase());
    if (!stored || stored.nonce !== nonce || Date.now() > stored.expires) {
      throw new UnauthorizedException('Invalid or expired nonce');
    }

    const isValid = await verifyMessage({
      address: walletAddress as `0x${string}`,
      message: nonce,
      signature: signature as `0x${string}`,
    });

    if (!isValid) {
      throw new UnauthorizedException('Invalid signature');
    }

    this.nonces.delete(walletAddress.toLowerCase());

    let user = await this.usersRepository.findOne({
      where: { wallet_address: walletAddress.toLowerCase() },
    });

    if (!user) {
      user = this.usersRepository.create({
        wallet_address: walletAddress.toLowerCase(),
      });
      await this.usersRepository.save(user);
    }

    const payload = { sub: user.id, wallet_address: user.wallet_address };
    return {
      access_token: this.jwtService.sign(payload),
      refresh_token: this.jwtService.sign(payload, {
        secret: this.configService.get('jwt.refreshSecret'),
        expiresIn: this.configService.get('jwt.refreshExpiresIn'),
      }),
      user,
    };
  }

  async refreshToken(refreshToken: string) {
    try {
      const payload = this.jwtService.verify(refreshToken, {
        secret: this.configService.get('jwt.refreshSecret'),
      });
      const user = await this.usersRepository.findOne({
        where: { id: payload.sub },
      });
      if (!user) throw new UnauthorizedException();
      const accessPayload = { sub: user.id, wallet_address: user.wallet_address };
      return {
        access_token: this.jwtService.sign(accessPayload),
      };
    } catch {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }
}
