"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(id, firstName, lastName, birthDate, jobPosition, departmentId) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.jobPosition = jobPosition;
        this.departmentId = departmentId;
    }
}
exports.Employee = Employee;
