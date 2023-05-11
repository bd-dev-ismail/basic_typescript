// 1..Convert the following JavaScript array into a TypeScript tuple
//     const userInfo = [101, "Ema", "John", true,  , "2023"];

const userInfo: [number, string, string, boolean, undefined, string] = [
  101,
  "Ema",
  "John",
  true,
  ,
  "2023",
];

//2..Write a TypeScript function that takes in two arrays of numbers as parameters. The function should compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays.

function matchNumber(arr1: number[], arr2: number[]) {
  //আমরা এখানে arr1 এর মধ্যের আইটেম গুলি ফিল্টার এ বের করে চেক করতেছি যে arr2 এর মধ্যে এই আইটেম গুলা includes করে কি না?
  const newArray: number[] = arr1.filter((item) => arr2.includes(item));
  return newArray;
}
console.log(matchNumber([1, 5, 73, 64, 35], [5, 73, 2, 54, 35])); //[ 5, 73, 35 ]

//3......You have an interface for Product, containing the product's id, name, price, and category. You want to filter an array of Products based on a specific criterion and value.

// Write a TypeScript generic function that takes this array, a criterion , and returns a new array containing only the products that match the given criterion and value. Use a generic type parameter in the function signature to ensure type safety.
interface Product {id: number,name: string, price: number, category: string}
const product = <T>(param: T)=>{
  return [param]
}
const result11 = product<Array<string>>(["test"])