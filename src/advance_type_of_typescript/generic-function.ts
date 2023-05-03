// //Generic type in arrow function
// const createArray1 = (param: string): string[] => {
//   return [param];
// };

// const createArray = <T>(param: T): T[] => {
//   return [param];
// };

// const result1 = createArray<string>("Bangladesh");
// const result2 = createArray<boolean>(true);
// type ArrayType = { name: string };
// const result = createArray<ArrayType>({ name: "Bangladesh" });
// //using tupple
// const createArrayTupple = <X, Y>(param1: X, param2: Y): [X, Y] => {
//   return [param1, param2];
// };

// function createArrayTupple1<X, Y>(param1: X, param2: Y): [X, Y] {
//   return [param1, param2];
// }

// const resultTupple = createArrayTupple<string, string>(
//   "Bangladesh",
//   "Independet Country"
// );

// const resultTupple2 = createArrayTupple<boolean, Array<string>>(false, [
//   "India",
// ]);

// //spread operator
// const crush = "Noushin Akter";
// const myInfo = {
//   name: "Ismail Hossen",
//   age: 22,
//   salary: 10,
// };
// // const newData = { ...myInfo, crush };

// const addMeInCrushMind = <T>(myInfo: T) => {
//   const crush = "Nowrrin";
//   const newData = { ...myInfo, crush };
//   return newData;
// };

// const result5 = addMeInCrushMind(myInfo);
