"use strict";
// //generic interface
// interface CrushInterface<T, U = null> {
//   crush: string;
//   husband: T;
//   wife?: U;
// }
// const crush1: CrushInterface<boolean, string> = {
//   crush: "Noushin",
//   husband: true,
//   wife: "Nowrin",
// };
// const crush2: CrushInterface<string> = { crush: "Noushin", husband: "Ismail" };
// interface IHusband {
//   name: string;
//   salary: number;
// }
// const crush3: CrushInterface<IHusband> = {
//   crush: "Nowrin",
//   husband: { name: "Ismail", salary: 10 },
// };
// interface PersonInterface {
//   name: string;
//   age: number;
// }
// const crush4: CrushInterface<PersonInterface, PersonInterface> = {
//   crush: "Nowrin",
//   husband: { name: "Ratul", age: 21 },
//   wife: { name: "Noushin", age: 21 },
// };
// //generic Tuplles
// type GenericTuple<X, Y> = [X, Y];
// const relation: GenericTuple<string, string> = ["Ismail", "Noushin"];
// //using type alis
// // type RelationOjbSalary = { name: string; salary: number };
// //using interface
// interface IReelationOjbSalary {
//   name: string;
//   salary: number;
// }
// const relationWithSalary: GenericTuple<IReelationOjbSalary, string> = [
//   { name: "Ismail", salary: 10 },
//   "Noushin",
// ];
// const relationWithSalary2: GenericTuple<IReelationOjbSalary, string> = [
//   { name: "Ismail", salary: 10 },
//   "Noushin",
// ];
// type GenericArray<T> = Array<T>;
// const rollNumberss: Array<number> = [23, 234, 24, 234, 234, 23];
// const rollNumber2: GenericArray<string> = ["44", "55", "66"];
// const rollNumber3: GenericArray<boolean> = [true, true, false];
// //
// type NameRollType = { name: string; roll: number };
// const userRollAndNumbers: GenericArray<NameRollType> = [
//   { name: "Mr. X", roll: 23 },
//   { name: "MR.Y", roll: 345 },
// ];
