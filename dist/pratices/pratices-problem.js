"use strict";
// 1..Convert the following JavaScript array into a TypeScript tuple
//     const userInfo = [101, "Ema", "John", true,  , "2023"];
const userInfo = [
    101,
    "Ema",
    "John",
    true,
    ,
    "2023",
];
//2..Write a TypeScript function that takes in two arrays of numbers as parameters. The function should compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays.
function matchNumber(arr1, arr2) {
    //আমরা এখানে arr1 এর মধ্যের আইটেম গুলি ফিল্টার এ বের করে চেক করতেছি যে arr2 এর মধ্যে এই আইটেম গুলা includes করে কি না?
    const newArray = arr1.filter((item) => arr2.includes(item));
    return newArray;
}
console.log(matchNumber([1, 5, 73, 64, 35], [5, 73, 2, 54, 35])); //[ 5, 73, 35 ]
const product = (param) => {
    return [param];
};
const result11 = product(["test"]);
