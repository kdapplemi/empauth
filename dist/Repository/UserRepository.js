"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const User_1 = require("../Model/User");
let UserRepository = class UserRepository {
    constructor() {
        this.user = [
            new User_1.User(1, "jackmanH", "Hugh", "Jackman", "wolverine", true),
            new User_1.User(2, "sparrowJ", "Jack", "Sparroe", "Captain", true)
        ];
    }
    findAll() {
        // here, for example you can load categories using mongoose
        // you can also return a promise here
        // simulate async with creating an empty promise        
        return Promise.resolve(this.user);
    }
    findOne(id) {
        // here, for example you can load category id using mongoose
        // you can also return a promise here
        let foundCategory = undefined;
        let cId = 0;
        cId = id;
        // parseInt(id);
        this.user.forEach(category => {
            // console.log(typeof category.id);
            console.log(typeof (cId));
            if (category.id == cId)
                foundCategory = category;
        });
        return foundCategory;
    }
};
UserRepository = __decorate([
    typedi_1.Service()
], UserRepository);
exports.UserRepository = UserRepository;
