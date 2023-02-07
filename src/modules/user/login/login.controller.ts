import { Post, Controller, Body, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from '../dto/login.dto';
import { LoginService } from './login.service';

@ApiTags('微信登录接口')
@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('wx')
  wxLogin(@Body() loginDto: LoginDto) {
    return this.loginService.wxLogin(loginDto);
  }
}
