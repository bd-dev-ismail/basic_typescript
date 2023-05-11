"use strict";
// //mocking - string
// ///data fetch with joson placeholder
// interface ITodo {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }
// const getTodo = async (): Promise<ITodo> => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   return await res.json();
// };
// const getTodoData = async (): Promise<void> => {
//   const result = await getTodo();
//   console.log(result);
// };
// getTodoData();
// const makePromise = (): Promise<string> => {
//   return new Promise<string>((resolve, reject) => {
//     const data: string = "Data is fetch";
//     if (data) {
//       resolve(data);
//     } else {
//       reject("Promise failed!! failed to fetch");
//     }
//   });
// };
// /// promise type boolean
// const makePromiseBoolean = (): Promise<boolean> => {
//   return new Promise<boolean>((resolve, reject) => {
//     const data: boolean = true;
//     if (data) {
//       resolve(data);
//     } else {
//       reject("Promise failed!! failed to fetch");
//     }
//   });
// };
// type DataType = { status: boolean; data: string };
// interface IData {
//   status: boolean;
//   data: string;
// }
// /// promise type object
// const makePromiseObject = (): Promise<IData> => {
//   return new Promise<IData>((resolve, reject) => {
//     const data: IData = { status: true, data: "data fetch" };
//     if (data) {
//       resolve(data);
//     } else {
//       reject("Promise failed!! failed to fetch");
//     }
//   });
// };
// // const result1 = makePromise();
// const getPromiseData = async (): Promise<string> => {
//   const data = await makePromise();
//   return data;
// };
// const getPromiseDataBoolean = async (): Promise<boolean> => {
//   const data = await makePromiseBoolean();
//   return data;
// };
// const getPromiseDataObject = async (): Promise<IData> => {
//   const data = await makePromiseObject();
//   return data;
// };
// //Promise<string> Promise<boolean> Promise<>
