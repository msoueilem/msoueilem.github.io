"use strict";

const topicName = "ES Classes and ESModules";
console.log(`Welcome to ${topicName}`);
console.log("Hello" + topicName);

class User {
    constructor(name){
        this.name=name;
    }
    get name(){
        return this._name;
    }
    set name(value){
        if(value.length<4){
            alert("Name is too short");
        }
        this._name = value;
    }
    sayHello() {
        console.log(`Hello, ${this.name}`);
    }
}



const userJohn = new User("John");

userJohn.sayHello();

console.log(typeof User);
console.log(userJohn instanceof User);
console.log(User.prototype);

console.log(`calling getter: ${userJohn.name}`);
userJohn.name = "Mohamed";
console.log(`calling getter: ${userJohn.name}`);

class Student{
    constructor(studentId, name, admissionDate, cgpa){
        this.studentId = studentId;
        this.name = name;
        this.admissionDate = admissionDate;
        this.cgpa = cgpa;
    }

    //Getters and Setters
    get studentId(){
        return this._studentId;
    }
    set studentId(value){
        //some validation check
        if(value == null){
            throw new Error("Invalid studentId date");
        }
        this._studentId = value;
    }

    get name(){
        return this._name;
    }
    set name(value){
        //some validation check
        if(value == null){
            throw new Error("Invalid name date");
        }
        this._name = value;
    }

    get admissionDate(){
        return this._admissionDate;
    }
    set admissionDate(value){
        //some validation check
        if(value == null){
            throw new Error("Invalid admissionDate date");
        }
        this._admissionDate = value;
    }

    get cgpa(){
        return this._cgpa;
    }
    set cgpa(value){
        //some validation check
        if(value == null){
            throw new Error("Invalid cgpa date");
        }
        this._cgpa = value;
    }
}

// Usage
const bob = new Student("000-00-001", "Bob Jones", new Date(1995,12,12), 3.4);
console.log(bob);
console.log(bob.__proto__);
Student.prototype.toString = function() {
    return `
    {StudentId: ${this.studentId}}\n
    {Name: ${this.name}}\n
    {Addmission Date: ${this.admissionDate}}\n
    {CGPA: ${this.cgpa}}`;
}
console.log(
    "trying to string"
);
console.log(bob.toString());