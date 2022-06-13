import { UserService } from './user/user.service';
import { UserEntity } from './user/user.entity';
import { AdminProductsController } from './admin/adminproducts.controller';
import { AdminModule } from './admin/admin.module';
import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';
import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from 'process';
import { AuthModule } from './auth/auth.module';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import Products from './products/products.entity';
import { CartModule } from './cart/cart.module';

@Global()
@Module({
  imports: [
    // AdminModule,
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
    TypeOrmModule.forFeature([Products, UserEntity]),
    AdminModule,
    AuthModule,
    CartModule,
    // ProductsModule,
  ],
  controllers: [AdminProductsController, ProductsController, AppController],
  providers: [
    UserService,
    // AppService
    ProductsService,
  ],
  exports: [ProductsService, UserService],
})
export class AppModule {}
