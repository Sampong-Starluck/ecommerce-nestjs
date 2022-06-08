"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var products_service_1 = require("./products/products.service");
var products_controller_1 = require("./products/products.controller");
var common_1 = require("@nestjs/common");
var app_controller_1 = require("./app.controller");
var typeorm_1 = require("@nestjs/typeorm");
var process_1 = require("process");
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
// import { AppService } from './app.service';
// import { ProductsModule } from './products.module';
var products_entity_1 = require("./products/products.entity");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                typeorm_1.TypeOrmModule.forRoot({
                    type: 'mysql',
                    host: process_1.env.MYSQL_HOST,
                    port: parseInt(process_1.env.MYSQL_PORT),
                    username: process_1.env.MYSQL_USERNAME,
                    password: process_1.env.MYSQL_PASSWORD,
                    database: process_1.env.MYSQL_DATABASE,
                    entities: ['dist/**/*.entity{.ts,.js}'],
                    synchronize: true
                }),
                typeorm_1.TypeOrmModule.forFeature([products_entity_1.Products]),
                // ProductsModule,
            ],
            controllers: [products_controller_1.ProductsController, app_controller_1.AppController],
            providers: [
                // AppService
                products_service_1.ProductsService,
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
