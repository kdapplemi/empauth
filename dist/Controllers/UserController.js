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
const UserRepository_1 = require("../Repository/UserRepository");
const cors = require("cors");
let UserController = class UserController {
    constructor(userRepository) {
        this.userRepository = userRepository;
        userRepository = new UserRepository_1.UserRepository();
        this.userRepository = userRepository;
    }
    all() {
        return this.userRepository.findAll();
    }
    one(id) {
        console.log('id :' + id);
        return this.userRepository.findOne(id);
    }
};
__decorate([
    routing_controllers_1.Get("/user")
], UserController.prototype, "all", null);
__decorate([
    routing_controllers_1.Get("/user/:id"),
    __param(0, routing_controllers_1.Param("id"))
], UserController.prototype, "one", null);
UserController = __decorate([
    typedi_1.Service(),
    routing_controllers_1.JsonController(),
    routing_controllers_1.UseBefore(cors())
], UserController);
exports.UserController = UserController;
