"use strict";
function add(param1, param2) {
    if (typeof param1 == "number" && typeof param2 == "number") {
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString();
    }
}
add("1", "2");
add(1, 2);
function getUser(user) {
    if ("role" in user) {
        return `I am an admin and my role is ${user.role} & name is ${user.name}`;
    }
    else {
        return `I am a normal user name is ${user.name}`;
    }
}
const normalUser1 = { name: "Ratul" };
const adminUser1 = { name: "Ismail Hossen", role: "admin" };
// console.log(getUser(normalUser1));
// console.log(getUser(adminUser1));
// Instance of type guard
class Animal {
    constructor(name, species) {
        (this.name = name), (this.species = species);
    }
    makeSound() {
        console.log(`I am making sound`);
    }
}
class Dog extends Animal {
    constructor(name, species) {
        super(name, species);
    }
    makeBurk() {
        console.log("I am burking");
    }
}
class Cat extends Animal {
    constructor(name, species) {
        super(name, species);
    }
    makeMiaw() {
        console.log("I am miawing");
    }
}
function isDog(animal) {
    return animal instanceof Dog;
}
function isCat(animal) {
    return animal instanceof Cat;
}
function getAnimal(animal) {
    if (isDog(animal)) {
        animal.makeBurk();
    }
    else if (isCat(animal)) {
        animal.makeMiaw();
    }
    else {
        animal.makeSound();
    }
}
const Animal1 = new Dog("german shepard", "burking burking"); //instance of Dog
const Animal2 = new Cat("Kitty", "Miaaww"); //instance of Car
getAnimal(Animal2);
