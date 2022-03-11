import {Person} from "../JS/model/person.js";
import {Employee} from "../JS/model/emoloyee.js";

const personarry = [];

const anna = new Person("Ana Smith", new Date(1998,11,15));
const bob = new Person("Bob Jone", new Date(1945,10,16));
const carlos = new Person("Carlos Slim Helu, ", new Date(1976,8,24));

// Employee.__proto__ = Person;
Object.setPrototypeOf(Employee,Person);

const jim = new Employee("Jim Hanson",new Date(1993,12,23),245990.00,new Date(1993,10,23));

console.log(jim.doJob("Software Engineer"));

personarry.push(anna);
personarry.push(bob);
personarry.push(carlos);

personarry.forEach(element => {
    console.log(element.toString());
});