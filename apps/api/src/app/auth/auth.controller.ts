/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Post, UseGuards, Request, Get, Body } from '@nestjs/common';
import { userInfo } from 'os';
import { JwtAuthGuard } from './jwt.guard';
import { AuthService } from './services/auth.service';

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) { }

  @Post('login')
  async login(@Body("email") user, @Body("password") pass) {
    return this.authService.login(await this.authService.validateUser(user, pass));
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
