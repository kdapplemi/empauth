"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const Category_1 = require("../model/Category");
let CategoryRepository = class CategoryRepository {
    constructor() {
        this.categories = [
            new Category_1.Category(1, "Society"),
            new Category_1.Category(2, "Technology"),
            new Category_1.Category(3, "Politics"),
            new Category_1.Category(4, "Economy"),
            new Category_1.Category(5, "Sports"),
        ];
    }
    findAll() {
        // here, for example you can load categories using mongoose
        // you can also return a promise here
        // simulate async with creating an empty promise
        return Promise.resolve(this.categories);
    }
    findOne(id) {
        // here, for example you can load category id using mongoose
        // you can also return a promise here
        let foundCategory = undefined;
        let cId = 0;
        cId = id;
        // parseInt(id);
        this.categories.forEach(category => {
            // console.log(typeof category.id);
            console.log(typeof (cId));
            if (category.id == cId)
                foundCategory = category;
        });
        return foundCategory;
    }
    save(category) {
        // here, for example you can save a category to mongodb using mongoose
        this.categories.push(category);
        return category;
    }
    remove(id) {
        // here, for example you can save a category to mongodb using mongoose
        const category = this.findOne(id);
        if (category)
            this.categories.splice(this.categories.indexOf(category), 1);
        return category;
    }
};
CategoryRepository = __decorate([
    typedi_1.Service()
], CategoryRepository);
exports.CategoryRepository = CategoryRepository;
