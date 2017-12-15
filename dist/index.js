"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const typedi_1 = require("typedi");
const CategoryController_1 = require("./controllers/CategoryController");
const PostController_1 = require("./controllers/PostController");
const EmployeeController_1 = require("./Controllers/EmployeeController");
const UserController_1 = require("./Controllers/UserController");
/**
 * Setup routing-controllers to use typedi container.
 */
routing_controllers_1.useContainer(typedi_1.Container);
//options for cors midddleware
/*
const options:cors.CorsOptions = {
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
   // origin: API_URL,
    origin: 'http://localhost:3000/',
    preflightContinue: false
  };
*/
/**
 * We create a new express server instance.
 * We could have also use useExpressServer here to attach controllers to an existing express instance.
 */
const expressApp = routing_controllers_1.createExpressServer({
    /**
     * We can add options about how routing-controllers should configure itself.
     * Here we specify what controllers should be registered in our express server.
     */
    // cors: true,
    controllers: [
        CategoryController_1.CategoryController,
        PostController_1.PostController,
        EmployeeController_1.EmployeeController,
        UserController_1.UserController
    ]
});
//expressApp.options("*", cors(options));
//expressApp.use(cors(options));
/**
 * Start the express app.
 */
expressApp.listen(3000);
console.log("Server is up and running at port 3000");
