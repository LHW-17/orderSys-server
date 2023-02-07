import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { LoginController } from './login/login.controller';
import { HttpModule } from '@nestjs/axios';
import { LoginService } from './login/login.service';
@Module({
  imports: [TypeOrmModule.forFeature([User]), HttpModule],
  controllers: [UserController, LoginController],
  providers: [UserService, LoginService],
})
export class UserModule {}
