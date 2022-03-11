"use strict";

export class Person {

    #name = null;
    #dob = null;
    constructor(name, dob){
        this.#name=name;
        this.#dob = dob;
    }

    getName(){
        return this.#name;
    }

    setName(value){
        if(value.length<4){
            alert("Name is too short");
        }
        this.#name = value;
    }
    getDob(){
        return this.#dob;
    }

    setDob(value){
        if(value == null){
            alert("Date of birth can't be null");
        }
        this.#dob = value;
    }
    
    toString() {
        return `
        Name: ${this.#name}
        Date of Birth: ${this.#dob.toLocaleDateString("en-US")}`;
    }
}