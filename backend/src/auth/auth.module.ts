import { Module } from '@nestjs/common';
import {JwtModule} from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './localStrategy/local.strategy';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt/jwt.strategy';
import { jwtConstants } from './jwt/constants';

@Module({
  imports: [UsersModule, PassportModule, JwtModule.register({secret: jwtConstants.secret, signOptions: {expiresIn: '114912s'}})],
  providers: [AuthService, LocalStrategy, JwtStrategy, ],
  controllers: [AuthController]
})
export class AuthModule {}
