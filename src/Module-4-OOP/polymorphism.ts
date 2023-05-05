class Personn {
  takeNap(): void {
    console.log("I am sleeping daily 8hour");
  }
}

class Student extends Personn {
  takeNap(): void {
    console.log(`I am sleeping 10hours per day`);
  }
}

class Developer extends Personn {
  takeNap(): void {
    console.log(`I am sleeping daily 5 hours only`);
  }
}

function getNap(param: Personn) {
  return param.takeNap();
}

const person1 = new Personn();
const person2 = new Student();
const person3 = new Developer();

getNap(person1);
getNap(person2);
getNap(person3);

class Shepe {
  getArea(): number {
    return 0;
  }
}

//circle= pi *r *r
class Circle extends Shepe {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectengle extends Shepe {
  height: number;
  width: number;
  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }
  getArea(): number {
    return this.width * this.height;
  }
}

function getAreaOfShape(param: Shepe) {
  console.log(param.getArea());
}

getAreaOfShape(new Circle(20));
getAreaOfShape(new Rectengle(10, 21));
