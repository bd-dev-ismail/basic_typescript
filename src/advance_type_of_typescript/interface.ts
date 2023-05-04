// type User = {
//   name: string;
//   age: number;
// };

// interface IUser {
//   name: string;
//   age: number;
// }
// //এটা হচ্ছে টাইপ এলিয়াসকে এক্সটেন্ড করতেছি।
// type extendedUser = User & {
//   role: string;
// };
// //ইন্টারফেইস এক্সটেন্ড করতেছি।
// interface IExtendUser extends IUser {
//   role: string;
// }

// //object || function || array

// //using Type
// type AddNumberType = (num1: number, num2: number) => number;
// ///using Interface
// interface IAddNumbers {
//   (num1: number, num2: number): number;
// }
// //using Type alis
// type rollNumbersType = string[];
// //using interface
// interface IRollNumber {
//   [index: number]: string; //index signature
// }
// const rollNumbers: IRollNumber = ["1", "4", "5", "6"]; //[index]

// const addNumber: AddNumberType = (num1, num2) => num1 + num2;

// //এখানে ইউজার অবজেক্ট এর মধ্যে এক্সটেন্ড করা টাইপ ব্যাবহার করতেছি।
// const user: extendedUser = {
//   name: "Hello Manus",
//   age: 390,
//   role: "Driver",
// };

// // const userWithTypeAlis: User = {
// //   name: "Type Alias",
// //   age: 22,
// // };

// // const userWithInterface: IUser = {
// //   name: " Interface",
// //   age: 33,
// // };
// //Interface shudu matro object type er jonno!!!
// type RollNumberType = number;
