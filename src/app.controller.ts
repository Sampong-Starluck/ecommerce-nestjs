import { Controller, Get, Render } from '@nestjs/common';
// import { AppService } from './app.service';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('index')
  index() {
    let viewData = [];
    viewData['title'] = 'Home Page - Online Store';
    return {
      // title: "Home Page - Online Store"
      viewData: viewData,
    };
  }

  @Get('/about')
  @Render('about')
  about() {
    let viewData = [];
    viewData['title'] = 'About us - Online Store';
    viewData['subtitle'] = 'About Us';
    viewData['description'] = 'This is an about page ....';
    viewData['author'] = 'Developed by: Sampong';
    return {
      viewData: viewData,
    };
  }
}
