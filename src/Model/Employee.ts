export class Employee{
    id:number;
    firstName:string;
    lastName:string;
    birthDate:string;
    jobPosition:string;
    departmentId:number;

    constructor(id:number, firstName: string, lastName: string,  birthDate: string, jobPosition: string, departmentId:number) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.jobPosition = jobPosition;
        this.departmentId = departmentId;
    }
}