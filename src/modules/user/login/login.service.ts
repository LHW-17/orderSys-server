import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { HttpService } from '@nestjs/axios';
import { LoginDto } from '../dto/login.dto';
import { ApiTags } from '@nestjs/swagger';
import wxApp from 'src/common/wxApp';
@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(User)
    private readonly user: Repository<User>,
    private readonly httpService: HttpService,
  ) {}
  @ApiTags('微信获取手机号登录')
  async wxLogin(loginDto: LoginDto) {
    let response = '';
    let { data } = await this.httpService
      .get(
        `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${wxApp.appid}&secret=${wxApp.secret}`,
      )
      .toPromise();

    let res = await this.httpService
      .post(
        `https://api.weixin.qq.com/wxa/business/getuserphonenumber?access_token=${data.access_token}`,
        { code: loginDto.code },
      )
      .toPromise();
    let phone = res.data?.phone_info?.phoneNumber;

    let user = await this.user.findOne({
      where: {
        userPhone: phone,
      },
    });
    //第一次登录
    if (!user) {
      const newUser = new User();
      newUser.avatarUrl = loginDto.avatarUrl;
      newUser.userName = loginDto.nickName;
      newUser.userPhone = phone;

      this.user.save(newUser);
      response = 'new user';
    } else {
      this.user.update(user.id, {
        avatarUrl: loginDto.avatarUrl,
        userName: loginDto.nickName,
      });
      response = 'update user';
    }
    return response;
  }
}
