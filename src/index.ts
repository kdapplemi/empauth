import "reflect-metadata";
import {createExpressServer, useContainer, useExpressServer} from "routing-controllers";
import {Container} from "typedi";
import {CategoryController} from "./controllers/CategoryController";
import {PostController} from "./controllers/PostController";
import {EmployeeController} from "./Controllers/EmployeeController";
import {UserController} from "./Controllers/UserController";
import * as cors from "cors";

/**
 * Setup routing-controllers to use typedi container.
 */
useContainer(Container);

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
const expressApp = createExpressServer({
    /**
     * We can add options about how routing-controllers should configure itself.
     * Here we specify what controllers should be registered in our express server.
     */
    // cors: true,
    controllers: [
        CategoryController,
        PostController,
        EmployeeController,
        UserController
    ]
});


//expressApp.options("*", cors(options));
//expressApp.use(cors(options));
/**
 * Start the express app.
 */
expressApp.listen(3000);


console.log("Server is up and running at port 3000");