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
const EmployeeRepository_1 = require("../Repository/EmployeeRepository");
const DepartmentRepository_1 = require("../Repository/DepartmentRepository");
const cors = require("cors");
let EmployeeController = class EmployeeController {
    constructor(employeeRepository, departmentRepository) {
        this.employeeRepository = employeeRepository;
        this.departmentRepository = departmentRepository;
        employeeRepository = new EmployeeRepository_1.EmployeeRepository();
        this.employeeRepository = employeeRepository;
        departmentRepository = new DepartmentRepository_1.DepartmentRepository();
        this.departmentRepository = departmentRepository;
        /*
        const options:cors.CorsOptions = {
            allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
            credentials: true,
            methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
           // origin: API_URL,
            origin: 'http://localhost:3000/',
            preflightContinue: false
          };*/
    }
    all() {
        return this.employeeRepository.findAll();
    }
    one(id) {
        console.log('id :' + id);
        return this.employeeRepository.findOne(id);
    }
    allDept() {
        return this.departmentRepository.findAllDept();
    }
};
__decorate([
    routing_controllers_1.Get("/employee")
], EmployeeController.prototype, "all", null);
__decorate([
    routing_controllers_1.Get("/employee/:id"),
    __param(0, routing_controllers_1.Param("id"))
], EmployeeController.prototype, "one", null);
__decorate([
    routing_controllers_1.Get("/department")
], EmployeeController.prototype, "allDept", null);
EmployeeController = __decorate([
    typedi_1.Service(),
    routing_controllers_1.JsonController(),
    routing_controllers_1.UseBefore(cors())
], EmployeeController);
exports.EmployeeController = EmployeeController;
