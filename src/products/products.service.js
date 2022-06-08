"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.ProductsService = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var products_entity_1 = require("./products.entity");
var ProductsService = /** @class */ (function () {
    function ProductsService(productsRepository) {
        this.productsRepository = productsRepository;
    }
    ProductsService.prototype.findAll = function () {
        return this.productsRepository.find();
    };
    ProductsService.prototype.findOne = function (id) {
        return this.productsRepository.findOneBy({ id: parseInt(id, 10) });
    };
    ProductsService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(products_entity_1.Products))
    ], ProductsService);
    return ProductsService;
}());
exports.ProductsService = ProductsService;
