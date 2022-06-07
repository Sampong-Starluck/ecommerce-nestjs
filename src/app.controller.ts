import { Controller, Get, Render } from '@nestjs/common';
// import { AppService } from './app.service';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}

  @Get("/")
  @Render('index')
  index() {
    return {
      title: "Home Page - Online Store"
    };
  }

  @Get("/about")
  @Render('about')
  about() {
    let viewData = [];
    viewData["decription"] = "This is an about page ....";
    viewData["author"] = "Developed by: Sampong";
    let data1 = 'About us - Online Store';
    return {
      title: data1,
      subtitle: "About Us",
      viewData: viewData
    }
  }
}
