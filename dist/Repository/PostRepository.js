"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const Post_1 = require("../model/Post");
const Category_1 = require("../model/Category");
let PostRepository = class PostRepository {
    constructor() {
        this.posts = [
            new Post_1.Post(1, "post #1", "about post #1", [new Category_1.Category(1, "People"), new Category_1.Category(2, "Technology")]),
            new Post_1.Post(2, "post #2", "about post #2", [new Category_1.Category(2, "Technology")]),
            new Post_1.Post(3, "post #3", "about post #3", [new Category_1.Category(3, "Politics")]),
            new Post_1.Post(4, "post #4", "about post #4", [new Category_1.Category(3, "Politics"), new Category_1.Category(4, "Economy")]),
        ];
    }
    findAll() {
        // here, for example you can load categories using mongoose
        // you can also return a promise here
        // simulate async with creating an empty promise
        console.log(this.posts);
        return Promise.resolve(this.posts);
    }
    findOne(id) {
        // here, for example you can load post id using mongoose
        // you can also return a promise here
        let foundPost = undefined;
        this.posts.forEach(post => {
            if (post.id === id)
                foundPost = post;
        });
        return foundPost;
    }
    save(post) {
        // here, for example you can save a post to mongodb using mongoose
        this.posts.push(post);
        return post;
    }
    remove(id) {
        // here, for example you can save a post to mongodb using mongoose
        const post = this.findOne(id);
        if (post)
            this.posts.splice(this.posts.indexOf(post), 1);
        return post;
    }
};
PostRepository = __decorate([
    typedi_1.Service()
], PostRepository);
exports.PostRepository = PostRepository;
