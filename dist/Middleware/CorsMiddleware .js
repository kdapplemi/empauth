"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const debug = require("debug");
let CorsMiddleware = class CorsMiddleware {
    constructor() {
        this.logger = debug('pick:middleware:CorsMiddleware');
    }
    use(req, res, next) {
        this.logger(`Setting Access-Control-Allow-Origin headers to ${req.get('origin')}`);
        res.header('Access-Control-Allow-Origin', `${req.get('origin')}`);
        res.header('Access-Control-Allow-Credentials', `true`);
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, Access-Control-Allow-Credentials');
        if (req.method === 'OPTIONS') {
            res.sendStatus(200);
            res.end();
        }
        else {
            next();
        }
    }
};
CorsMiddleware = __decorate([
    routing_controllers_1.Middleware({ type: 'before' })
], CorsMiddleware);
exports.CorsMiddleware = CorsMiddleware;
