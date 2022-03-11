"use strict";
console.log("Hello , Java Script");

const person = {
    name: null,
    dateOfBirth: null
};

// person.prototype.toString = function() {
//     return 
//     `The person's name is: ${this.name}\n
//     ${this.name} was born on ${this.dateOfBirth.format('DD-MM-YYYY')}\n`;
// }

console.log(person.__proto__);

const student = {
    cgpa: 0.00
};

// student.__proto__ = person;
Object.setPrototypeOf(student, person);
// console.log(Object.getPrototypeOf(student));

const empolyee = {
    job: null,
    salary: 0.00
};

empolyee.__proto__ = person;

const faculty = {
    spes: null
};

faculty.__proto__ = person;

const anna = Object.create(student);
const smith = Object.create(student, {
    name: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: "Smith Anna"
    },
    dateOfBirth: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: new Date(1995,10,10)
    },
    cgpa: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 3.6
    }
});
anna.name = "Anaa Smith";
anna.dateOfBirth = new Date(1995,11,12);
anna.cgpa = 3.4;

console.log(anna);
console.log(smith);


//====================

function sum(a, b){
    return a+b;
}

//Constractor function
function Animal(name) {
    this.name = name;
}

const animal_rabit = new Animal("Rabit");
const animal_camel = new Animal("Camel");

console.log(animal_camel.name);

function print(a){
    var x = "";
    for (let index = 0; index < a.length; index++) {
        x = x+"name: "+a[index]+"\n";
    }
    return x;
}
var b = ["mohamed","sidi","Ahmed", "Sid Ahmed","sidi","mohamed","mohamed","sidi","Ahmed", "Sid Ahmed","sidi","mohamed"];
var c = [];

function addE(a,b){
    a[a.length] = b;
}
// addE(c,"Mohamed Lemine");
// addE(c,"Mohamed Ahmed");
// addE(c,"Mohamed Yahya");
// addE(c,"Mohamed Abdellahi");
// addE(c,"Mohamed Zein");
// addE(c,"Mohamed Mahmoud");
// addE(c,"Mohamed Beyba");
// alert(print(b));
// console.log(print(b));

console.log("From C: \n"+print(c));

function addP() {
    var p = prompt("Please enter your name:", "type here...");
    if(p!=null){
        addE(c,p);
        console.log(print(c));
    }
}

function showP() {
    alert(print(c));
}

const John = Object.create(student, {
    name: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: "John"
    },
    dateOfBirth: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: new Date(1980,11,10)
    }
});

console.log(`The person's name is: ${John.name}\n
${John.name} was born on ${John.dateOfBirth}\n`);

const annapro = Object.create(empolyee, {
    name: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: "Anna"
    },
    dateOfBirth: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: new Date(1995,10,10)
    },
    cgpa: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 3.6
    }
});