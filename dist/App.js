"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
require("reflect-metadata");
//import * as mongoose from 'mongoose';
//import * as passport from 'passport';
const CategoryController_1 = require("./Controllers/CategoryController");
const PostController_1 = require("./Controllers/PostController");
//import {WelcomeController} from './controllers';
//import {default as routers} from './routers';
//import { PassportConfig } from './config/passport';
class App {
    constructor() {
        this.setEnvironment();
        this.express = express();
        //  this.database();
        this.middleware();
        this.routes();
    }
    /**
     * database connection
     
    private database(): void {
        mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI);
        mongoose.connection.on('error', () => {
            console.log('MongoDB connection error. Please make sure MongoDB is running.');
            process.exit();
        });
    }*/
    /**
     * http(s) request middleware
     */
    middleware() {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*'); // dev only
            res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,PUT,POST,DELETE');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            if (req.method === 'OPTIONS') {
                res.status(200).send();
            }
            else {
                next();
            }
        });
        //   this.express.use(passport.initialize());
        //   this.express.use(passport.session());
        //   const pConfig = new PassportConfig(passport);
        ///  pConfig.init();
    }
    /**
     * app environment configuration
     */
    setEnvironment() {
        dotenv.config({ path: '.env' });
    }
    /**
     * API main v1 routes
     */
    routes() {
        // this.express.use('/v1', routers);
        this.express.use('/', (req, res) => {
            res.status(200).send({ 'Home page': 'Ho' });
        });
        this.express.use('/Category', CategoryController_1.CategoryController);
        this.express.use('/Post', PostController_1.PostController);
    }
}
exports.default = new App().express;
