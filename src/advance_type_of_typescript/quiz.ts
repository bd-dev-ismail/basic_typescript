// function getArrayItem<T, K extends keyof T>(
//   arr: T[],
//   index: number,
//   key: K
// ): T[K] {
//   const item = arr[index];

//   return item[key];
// }

// const users = [
//   { name: "John", age: 30 },
//   { name: "Mary", age: 25 },
// ];

// console.log(getArrayItem(users, 0, "name"));

// type Data = { num11: number };

// type C = {
//   [key in keyof Data]: string;
// };

// const numberss: C = {
//   num11: 20,
// };
interface Person {
  firstName: string;

  lastName: string;
}

function fullName<T extends Person>(person: T): string {
  return `${person.firstName} ${person.lastName}`;
}



