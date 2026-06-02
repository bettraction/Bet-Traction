import { Controller, Get, Put, Body, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getMe(@Request() req): Promise<User> {
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Put('me')
  updateMe(@Request() req, @Body() updateData: Partial<User>): Promise<User> {
    return this.usersService.update(req.user.id, updateData);
  }
}
