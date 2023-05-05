// //keyof guard
// type Alphanewmaric = string | number;
// function add(param1: Alphanewmaric, param2: Alphanewmaric): Alphanewmaric {
//   if (typeof param1 == "number" && typeof param2 == "number") {
//     return param1 + param2;
//   } else {
//     return param1.toString() + param2.toString();
//   }
// }
// add("1", "2");
// add(1, 2);
// //In Guard
// type NormalUserType = {
//   name: string;
// };
// type AdminUserType = {
//   name: string;
//   role: "admin";
// };

// function getUser(user: NormalUserType | AdminUserType): string {
//   if ("role" in user) {
//     return `I am an admin and my role is ${user.role} & name is ${user.name}`;
//   } else {
//     return `I am a normal user name is ${user.name}`;
//   }
// }

// const normalUser1: NormalUserType = { name: "Ratul" };
// const adminUser1: AdminUserType = { name: "Ismail Hossen", role: "admin" };

// // console.log(getUser(normalUser1));
// // console.log(getUser(adminUser1));

// // Instance of type guard
// class Animal {
//   name: string;
//   species: string;
//   constructor(name: string, species: string) {
//     (this.name = name), (this.species = species);
//   }
//   makeSound() {
//     console.log(`I am making sound`);
//   }
// }

// class Dog extends Animal {
//   constructor(name: string, species: string) {
//     super(name, species);
//   }
//   makeBurk() {
//     console.log("I am burking");
//   }
// }

// class Cat extends Animal {
//   constructor(name: string, species: string) {
//     super(name, species);
//   }
//   makeMiaw() {
//     console.log("I am miawing");
//   }
// }

// function isDog(animal: Animal): animal is Dog {
//   return animal instanceof Dog;
// }

// function isCat(animal: Animal): animal is Cat {
//   return animal instanceof Cat;
// }

// function getAnimal(animal: Animal) {
//   if (isDog(animal)) {
//     animal.makeBurk();
//   } else if (isCat(animal)) {
//     animal.makeMiaw();
//   } else {
//     animal.makeSound();
//   }
// }
// const Animal1 = new Dog("german shepard", "burking burking"); //instance of Dog
// const Animal2 = new Cat("Kitty", "Miaaww"); //instance of Car

// getAnimal(Animal2);
