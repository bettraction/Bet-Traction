import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginRequestSchema } from '@bettraction/validators';
import { LoginRequest } from '@bettraction/types';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('nonce')
  getNonce(@Body('wallet_address') wallet_address: string) {
    if (!wallet_address) throw new UnauthorizedException('Wallet address required');
    return this.authService.generateNonce(wallet_address);
  }

  @Post('login')
  login(@Body() loginRequest: LoginRequest) {
    const validated = loginRequestSchema.safeParse(loginRequest);
    if (!validated.success) throw new UnauthorizedException('Invalid input');
    return this.authService.login(
      validated.data.wallet_address,
      validated.data.signature,
      validated.data.nonce,
    );
  }

  @Post('refresh')
  refresh(@Body('refresh_token') refresh_token: string) {
    if (!refresh_token) throw new UnauthorizedException('Refresh token required');
    return this.authService.refreshToken(refresh_token);
  }

  @Post('logout')
  logout() {
    return { message: 'Logged out successfully' };
  }
}
