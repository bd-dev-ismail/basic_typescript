"use strict";
class Personn {
    takeNap() {
        console.log("I am sleeping daily 8hour");
    }
}
class Student extends Personn {
    takeNap() {
        console.log(`I am sleeping 10hours per day`);
    }
}
class Developer extends Personn {
    takeNap() {
        console.log(`I am sleeping daily 5 hours only`);
    }
}
function getNap(param) {
    return param.takeNap();
}
const person1 = new Personn();
const person2 = new Student();
const person3 = new Developer();
getNap(person1);
getNap(person2);
getNap(person3);
class Shepe {
    getArea() {
        return 0;
    }
}
//circle= pi *r *r
class Circle extends Shepe {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectengle extends Shepe {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.width * this.height;
    }
}
function getAreaOfShape(param) {
    console.log(param.getArea());
}
getAreaOfShape(new Circle(20));
getAreaOfShape(new Rectengle(10, 21));
