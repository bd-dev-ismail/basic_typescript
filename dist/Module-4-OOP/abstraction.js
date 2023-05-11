"use strict";
// using interface R ekta hocce abstract class er maddo me
//using interfface
class Car {
    constructor(name, model, brand) {
        this.name = name;
        this.model = model;
        this.brand = brand;
    }
    startEngine() {
        console.log("Starting Enginne");
    }
    stopEnginne() {
        console.log("Stop Enginne");
    }
    move() {
        console.log("Moveing Car");
    }
}
const vechle1 = new Car("Car", "Tesla", "2827");
//abstract class
// abstract class Vechle{
//      constructor(
//     public name: string,
//     public model: string,
//     public brand: string
//   ) {}
//   abstract startEngine(): void 
//   abstract stopEnginne(): void 
//   move(): void {
//     console.log("Moveing Car");
//   }
// }
// class Car extends Vechle{
//    startEngine(): void {
//        console.log("STaring Enginne")
//    }
//    stopEnginne(): void {
//        console.log("Stoping Enginne")
//    }
// }
// const car1 = new Vechle("Car", "Honda", "3203");
