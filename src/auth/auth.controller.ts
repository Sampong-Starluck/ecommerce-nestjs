import { Body, Controller, Get, Post, Redirect, Render } from '@nestjs/common';
import { UserEntity } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';

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
}
