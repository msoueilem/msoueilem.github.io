/**
 * 
 */
"use strict";

export class Account {
    #numberAc = null;
    #nameAc = null;
    #typeAc = null
    constructor(number, name, type){
        this.#numberAc=number;
        this.#nameAc=name;
        this.#typeAc = type;
    }
    getNumber(){
        return this.#numberAc;
    }
    getName(){
        return this.#nameAc;
    }
    getType(){
        return this.#typeAc;
    }

    setNumber(value){
        this.#numberAc = value;
    }
    setName(value){
        this.#nameAc = value;
    }
    setType(value){
        this.#typeAc = value;
    }
    
    toString() {
        return ` Account:
        Account number: ${this.#numberAc}
        Name: ${this.#nameAc}
        Type: ${this.#typeAc}`;
    }
}