 class Person{
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string){
        this.name = name,
        this.age = age,
        this.address = address
    }
    makeSleep(hours: number): string{
        return `This ${name} sleep will be ${hours} hours!!`
    }
 }
 //student
class Student extends Person {
//   name: string;
//   age: number;
//   address: string;
  constructor(name: string, age: number, address: string) {
    super(name, age, address)
    // (this.name = name), (this.age = age), (this.address = address);
  }
//   makeSleep(hours: number): string {
//     return `${this.name} is sleep will ${hours}!!!`;
//   }
}
const studnet1 = new Student("Mr. X", 22, "Dhaka") ;
studnet1.age //sob pacci amra Person teke
//teacher
class Teacher extends Person {
   designation: string;
    constructor(name: string, age: number, address: string, designation: string){
       super(name, age, address)
       this.designation = designation
    }
   
    takeClasses(NumberOfClass: number): string{ //different
        return `This ${name} will take ${NumberOfClass}`
    }
}

const teacher1 = new Teacher("hakim", 53, "Kumira", "Pinciple");
