// const searchName = (value: string | null) => {
//   if (value === null) {
//     console.log("There is nothing to search!!!");
//   } else {
//     console.log("Searching");
//   }
// };
// searchName(null);

// //kelometer teke milisecond e convert
// //type unknow
// const getMyCarSpped = (speed: unknown) => {
//   if (typeof speed === "number") {
//     const convertSpeed = (speed * 1000) / 3600;
//     console.log(`My Speed is ${convertSpeed}`);
//   }
//   if (typeof speed === "string") {
//     const [value, unit] = speed.split(" ");
//     const convertSpeed = (parseFloat(value) * 1000) / 3600;
//     console.log(convertSpeed);
//   }
//   else {
//     console.log("There is worng type!!")
//   }
// };
// getMyCarSpped(10);
// getMyCarSpped("10 KM-Per-Hour"); //
// getMyCarSpped(false); //

// //Never Type

// function throwError(message:string): never{

//     throw new Error(message);
// }
// throwError("Error is mortal Error Error");
