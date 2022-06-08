"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppController = void 0;
var common_1 = require("@nestjs/common");
// import { AppService } from './app.service';
var AppController = /** @class */ (function () {
    function AppController() {
    }
    // constructor(private readonly appService: AppService) {}
    AppController.prototype.index = function () {
        var viewData = [];
        viewData['title'] = 'Home Page - Online Store';
        return {
            // title: "Home Page - Online Store"
            viewData: viewData
        };
    };
    AppController.prototype.about = function () {
        var viewData = [];
        viewData['title'] = 'About us - Online Store';
        viewData['subtitle'] = 'About Us';
        viewData['description'] = 'This is an about page ....';
        viewData['author'] = 'Developed by: Sampong';
        return {
            viewData: viewData
        };
    };
    __decorate([
        (0, common_1.Get)('/'),
        (0, common_1.Render)('index')
    ], AppController.prototype, "index");
    __decorate([
        (0, common_1.Get)('/about'),
        (0, common_1.Render)('about')
    ], AppController.prototype, "about");
    AppController = __decorate([
        (0, common_1.Controller)()
    ], AppController);
    return AppController;
}());
exports.AppController = AppController;
