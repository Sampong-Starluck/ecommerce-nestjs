import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from 'process';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
// import { AppService } from './app.service';
// import { ProductsModule } from './products.module';
import { Products } from './products/products.entity';

@Module({
  imports: [
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
  controllers: [ProductsController, AppController],
  providers: [
    // AppService
    ProductsService,
  ],
})
export class AppModule {}
