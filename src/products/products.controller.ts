import { Controller, Get, Param, Render, Res } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get('/')
  @Render('products/index')
  async index() {
    const viewData = [];
    viewData['title'] = 'Products - Online Store';
    viewData['subtitle'] = 'List of products';
    viewData['products'] = await this.productsService.findAll();
    return {
      viewData: viewData,
    };
  }

  @Get(':/id')
  @Render('products/show')
  async show(@Param() params, @Res() response) {
    // const product = ProductsController.products[params.id - 1];
    const product = await this.productsService.findOne(params.id);
    if (product === undefined) {
      return response.redirect('/products');
    }
    const viewData = [];
    viewData['title'] = product.getName() + '- Online Store';
    viewData['subtitle'] = product.getName() + '- Product Information';
    viewData['product'] = product;
    return response.render('products/show', {
      viewData: viewData,
    });
  }
}
