"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Post {
    constructor(id, title, text, categories) {
        this.createDate = new Date();
        this.id = id;
        this.title = title;
        this.text = text;
        this.categories = categories;
    }
}
exports.Post = Post;
