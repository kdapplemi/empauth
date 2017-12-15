import {Service} from "typedi";
import {Employee} from "../Model/Employee";

@Service()
export class EmployeeRepository{
        private employees =[
            new Employee(1,"Hugh","Jackman","2017-06-20","Wolverine",20),
            new Employee(2,"Jack","Sparroe","2017-06-20","Captain",20)            
    ];


    findAll() {
        // here, for example you can load categories using mongoose
        // you can also return a promise here
        // simulate async with creating an empty promise        
        return Promise.resolve(this.employees);     
    }

    findOne(id: number) {
        // here, for example you can load category id using mongoose
        // you can also return a promise here
        let foundCategory: Employee = undefined;
        let cId: number = 0;
        cId = id;
       // parseInt(id);
        this.employees.forEach(category => {
           // console.log(typeof category.id);
            console.log(typeof (cId));
            if (category.id == cId )           
                foundCategory = category;
        });
        return foundCategory;
    }


}