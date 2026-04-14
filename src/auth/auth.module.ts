import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConfigService } from '@nestjs/config/dist/config.service';
import { getJwtConfig } from './config/jwt.config';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport/dist/passport.module';
import { JwtStrategy } from './strategies/jwt.strategy';


@Module({
 imports: [
  PassportModule,
   JwtModule.registerAsync({
     imports: [ConfigModule],
     useFactory: getJwtConfig,
     inject: [ConfigService],
   }),
 ],
 controllers: [AuthController],
 providers: [AuthService, JwtStrategy],
})
export class AuthModule {}