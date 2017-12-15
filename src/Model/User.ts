export class User{
    id:number;
    username:string;
    firstName:string;
    lastName:string;
    password:string;
 //   dateOfBirth:Date;
 //   dateOfJoin:Date;
    isActive:boolean;
 
    constructor(id:number, username: string, firstName: string, lastName: string,  password: string, isActive: boolean) {
        this.id = id;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.isActive = isActive;        
    }
}