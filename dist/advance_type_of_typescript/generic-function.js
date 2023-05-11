"use strict";
//Generic type in arrow function
const createArray1 = (param) => {
    return [param];
};
const createArray = (param) => {
    return [param];
};
const result1 = createArray("Bangladesh");
const result2 = createArray(true);
const result = createArray({ name: "Bangladesh" });
//using tupple
const createArrayTupple = (param1, param2) => {
    return [param1, param2];
};
function createArrayTupple1(param1, param2) {
    return [param1, param2];
}
const resultTupple = createArrayTupple("Bangladesh", "Independet Country");
const resultTupple2 = createArrayTupple(false, [
    "India",
]);
//spread operator
const crush = "Noushin Akter";
const myInfo = {
    name: "Ismail Hossen",
    age: 22,
    salary: 10,
};
// const newData = { ...myInfo, crush };
const addMeInCrushMind = (myInfo) => {
    const crush = "Nowrrin";
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
const result5 = addMeInCrushMind(myInfo);
