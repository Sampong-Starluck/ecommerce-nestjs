import { AdminProductsController } from './admin/adminproducts.controller';
import { AdminModule } from './admin/admin.module';
import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';
import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from 'process';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import Products from './products/products.entity';

@Global()
@Module({
  imports: [
    AdminModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: env.MYSQL_HOST,
      port: parseInt(env.MYSQL_PORT),
      username: env.MYSQL_USERNAME,
      password: env.MYSQL_PASSWORD,
      database: env.MYSQL_DATABASE,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Products]),
    // ProductsModule,
  ],
  controllers: [AdminProductsController, ProductsController, AppController],
  providers: [
    // AppService
    ProductsService,
  ],
  exports: [ProductsService],
})
export class AppModule {}
