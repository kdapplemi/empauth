"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(id, username, firstName, lastName, password, isActive) {
        this.id = id;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.isActive = isActive;
    }
}
exports.User = User;
