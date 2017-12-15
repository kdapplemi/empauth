import {JsonController, Get, Post, Param, Delete, Body, UseBefore} from "routing-controllers";
import {Service} from "typedi";
import {EmployeeRepository} from "../Repository/EmployeeRepository";
import {DepartmentRepository} from "../Repository/DepartmentRepository";
import {Employee} from "../Model/Employee";
import {Department} from "../Model/Department";
import * as cors from "cors";

@Service()
@JsonController()
@UseBefore(cors())
export class EmployeeController{

    constructor(private employeeRepository: EmployeeRepository, private departmentRepository: DepartmentRepository ){
        employeeRepository = new EmployeeRepository();
        this.employeeRepository = employeeRepository;
        departmentRepository = new DepartmentRepository();
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

    @Get("/employee")
    all(): Promise<Employee[]> {     
           
        return this.employeeRepository.findAll();
    }

    @Get("/employee/:id")
    one(@Param("id") id: number): Employee {
        console.log('id :'+ id);
        return this.employeeRepository.findOne(id);
    }

    @Get("/department")
    allDept(): Promise<Department[]> {
        return this.departmentRepository.findAllDept();
    }
}