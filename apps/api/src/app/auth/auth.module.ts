import { AuthController } from './auth.controller';
import { AuthService } from './services/auth.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { environment } from '../../environments/environment';
import { JwtStrategy } from './jwt.strategy';
import { UsersService } from './services/users.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: environment.jwt.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [
    AuthController,],
  providers: [AuthService, UsersService, JwtStrategy],
})
export class AuthModule { }
