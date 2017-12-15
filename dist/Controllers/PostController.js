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
let PostController = class PostController {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    all() {
        return this.postRepository.findAll();
    }
    one(id) {
        return this.postRepository.findOne(id);
    }
    post(post) {
        return this.postRepository.save(post);
    }
    delete(id) {
        return this.postRepository.remove(id);
    }
};
__decorate([
    routing_controllers_1.Get("/posts")
], PostController.prototype, "all", null);
__decorate([
    routing_controllers_1.Get("/posts/:id"),
    __param(0, routing_controllers_1.Param("id"))
], PostController.prototype, "one", null);
__decorate([
    routing_controllers_1.Post("/posts"),
    __param(0, routing_controllers_1.Body())
], PostController.prototype, "post", null);
__decorate([
    routing_controllers_1.Delete("/posts/:id"),
    __param(0, routing_controllers_1.Param("id"))
], PostController.prototype, "delete", null);
PostController = __decorate([
    typedi_1.Service(),
    routing_controllers_1.JsonController()
], PostController);
exports.PostController = PostController;
