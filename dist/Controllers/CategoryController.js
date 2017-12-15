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
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const typedi_1 = require("typedi");
const CategoryRepository_1 = require("../Repository/CategoryRepository");
let CategoryController = class CategoryController {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
        categoryRepository = new CategoryRepository_1.CategoryRepository();
        this.categoryRepository = categoryRepository;
        // console.log(categoryRepository);
    }
    all() {
        return this.categoryRepository.findAll();
    }
    one(id) {
        console.log('id :' + id);
        return this.categoryRepository.findOne(id);
    }
    category(category) {
        return this.categoryRepository.save(category);
    }
    delete(id) {
        return this.categoryRepository.remove(id);
    }
};
__decorate([
    routing_controllers_1.Get("/categories")
], CategoryController.prototype, "all", null);
__decorate([
    routing_controllers_1.Get("/categories/:id"),
    __param(0, routing_controllers_1.Param("id"))
], CategoryController.prototype, "one", null);
__decorate([
    routing_controllers_1.Post("/categories"),
    __param(0, routing_controllers_1.Body())
], CategoryController.prototype, "category", null);
__decorate([
    routing_controllers_1.Delete("/categories/:id"),
    __param(0, routing_controllers_1.Param("id"))
], CategoryController.prototype, "delete", null);
CategoryController = __decorate([
    typedi_1.Service(),
    routing_controllers_1.JsonController()
], CategoryController);
exports.CategoryController = CategoryController;
