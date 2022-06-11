import {
  Body,
  Controller,
  Get,
  Post,
  Redirect,
  Render,
  Req,
  Res,
} from '@nestjs/common';
import { UserEntity } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import * as request from 'supertest';
import * as session from 'express-session';

@Controller('/auth')
export class AuthController {
  constructor(private readonly userservice: UserService) {}

  @Get('/register')
  @Render('auth/register')
  register() {
    const viewData = [];
    viewData['title'] = 'User Register - Online Store';
    viewData['subtitle'] = 'User Register';
    return {
      viewData: viewData,
    };
  }

  @Post('/store')
  @Redirect('/')
  async store(@Body() body) {
    const user = new UserEntity();
    user.setName(body.name);
    user.setPassword(body.password);
    user.setEmail(body.email);
    user.setRole('client');
    user.setBalance(1000);

    await this.userservice.createOrUpdate(user);
  }

  @Get('/login')
  @Render('auth/login')
  login() {
    const viewData = [];
    viewData['title'] = 'User Login - Online Store';
    viewData['subtitle'] = 'User Login';
    return { viewData: viewData };
  }

  @Post('/connect')
  async connect(@Body() body, @Req() request, @Res() response) {
    const email = body.email;
    const pass = body.password;
    const user = await this.userservice.login(email, pass);
    if (user) {
      request.session.user = {
        id: user.getId(),
        name: user.getName(),
        role: user.getRole,
      };
      return response.redirect('/');
    } else {
      return response.redirect('auth/login');
    }
  }

  @Get('logout')
  @Redirect('/')
  logout(@Req() request) {
    request.session.user = null;
  }
}
