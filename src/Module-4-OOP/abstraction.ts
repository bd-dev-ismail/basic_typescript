// using interface R ekta hocce abstract class er maddo me
//using interfface

// interface IVechle {
//     name: string,
//     model: string,
// }

// const vechle : IVechle= {name: "Tesla", model: "Xlsy#"}

interface Vechle {
  startEngine(): void;
  stopEnginne(): void;
  move?(): void;
}

class Car implements Vechle {
  constructor(
    public name: string,
    public model: string,
    public brand: string
  ) {}
  startEngine(): void {
    console.log("Starting Enginne");
  }
  stopEnginne(): void {
    console.log("Stop Enginne");
  }
  move(): void {
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
