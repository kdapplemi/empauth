"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const typedi_1 = require("typedi");
const CategoryController_1 = require("./controllers/CategoryController");
const PostController_1 = require("./controllers/PostController");
/**
 * Setup routing-controllers to use typedi container.
 */
routing_controllers_1.useContainer(typedi_1.Container);
/**
 * We create a new express server instance.
 * We could have also use useExpressServer here to attach controllers to an existing express instance.
 */
const expressApp = routing_controllers_1.createExpressServer({
    /**
     * We can add options about how routing-controllers should configure itself.
     * Here we specify what controllers should be registered in our express server.
     */
    controllers: [
        CategoryController_1.CategoryController,
        PostController_1.PostController
    ]
});
/**
 * Start the express app.
 */
expressApp.listen(3000);
console.log("Server is up and running at port 3000");
