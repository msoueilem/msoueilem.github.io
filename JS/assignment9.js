//Question no #1
"use strict";
const person = {
    name: "",
    dateOfBirth: null,
    getName: () => {
        return this.name;
    },
    setName: (name) => {
        this.name = name;
    },
    getDob: () => {
        return this.dateOfBirth;
    },
    setDob: (dob) => {
        this.dateOfBirth = dob;
    },

    toString: () => {
        return `
    The person's name is ${this.name}
    ${this.name} was born on ${this.dateOfBirth.toLocaleDateString("en-US")}`;
    }
};

let john = Object.create(person);
john.setName("John");
john.setDob(new Date(1998, 11, 10));
console.log(john.toString());

// Question no #2
let employee = {
    salary: 0,
    hireDate: new Date(),

    doJob: (jobTitle) => {
        console.log(`
    ${this.name} is a ${jobTitle} who earns $${Intl.NumberFormat('en-US').format(this.salary)}`);
    },
    setSalary: (salary) => {
        this.salary = salary;
    }
}
employee.__proto__ = person;
let annae = Object.create(employee);
annae.setName("Anna");
annae.setSalary(249995.50);
annae.doJob("Programmer");

// Question no 3:
class Person2 {
    constructor(name, dob) {
        this.name = name;
        this.dob = dob;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length < 4) {
            alert("Name is too short");
        }
        this._name = value;
    }
    get dob() {
        return this._dob;
    }
    set dob(value) {
        if (value == null) {
            alert("Date is null");
        }
        this._dob = value;
    }
}

Person2.prototype.toString = function () {
    return `
    {Name: ${this.name}, DateofBirth: ${this.dob.toLocaleDateString("en-US")}}`;
}
let peter = new Person2("Peter", new Date(1985, 10, 10));
console.log(peter.toString());