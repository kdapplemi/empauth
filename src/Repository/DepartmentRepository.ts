import {Service} from "typedi";
import {Department} from "../Model/Department";


@Service()
export class DepartmentRepository{
    private departments =[
        new Department(10,"rocket","rocket science",true),
        new Department(20,"Physics","Physics",false)
    ];

    findAllDept(){
        return Promise.resolve(this.departments);
    }
}