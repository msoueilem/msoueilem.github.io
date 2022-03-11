import {Person} from '../model/person.js';


export class Employee extends Person{
    #salary = 0.0;
    #hireDate = null;
    constructor(name, dob, salary, hireDate){
        super(name,dob);
        this.#salary=salary;
        this.#hireDate = hireDate;
    }

    getSalary(){
        return this.#salary;
    }

    setSalary(value){
        if(value<1000){
            alert("salary is too short");
        }
        this.#salary = value;
    }
    getHireDate(){
        return this.#hireDate;
    }

    setHireDate(value){
        if(value == null){
            alert("Date of birth can't be null");
        }
        this.#hireDate = value;
    }
    doJob(job){
        return`${this.getName()} is a ${job} who earns $${Intl.NumberFormat('en-US').format(this.#salary)}`;
    }
    
    toString() {
        return ` 
        Employee:
        Name: ${this.getName()}
        Date of Birth: ${this.getDob().toLocaleDateString("en-US")}
        Salary: ${this.#salary}
        Hire Date: ${this.#hireDate.toLocaleDateString("en-US")}`;
    }
}