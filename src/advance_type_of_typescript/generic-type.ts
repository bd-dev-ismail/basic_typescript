//generic Tuplle
type GenericTuple<X, Y> = [X, Y];

const relation: GenericTuple<string, string> = ["Ismail", "Noushin"];

type RelationOjbSalary = { name: string; salary: number }
const relationWithSalary: GenericTuple<RelationOjbSalary, string> = [
  { name: "Ismail", salary: 10 },
  "Noushin",
];


const relationWithSalary2: GenericTuple<RelationOjbSalary, string> = [
  { name: "Ismail", salary: 10 },
  "Noushin",
];

type GenericArray<T> = Array<T>;
const rollNumberss: Array<number> = [23, 234, 24, 234, 234, 23];
const rollNumber2: GenericArray<string> = ["44", "55", "66"];
const rollNumber3: GenericArray<boolean> = [true, true, false];
//
type NameRollType = { name: string; roll: number };
const userRollAndNumbers: GenericArray<NameRollType> = [
  { name: "Mr. X", roll: 23 },
  { name: "MR.Y", roll: 345 },
];
