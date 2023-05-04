const arrayOfNumbers = [22, 24, 28]; //["22", "24", "28"]

const arrayOfStrings = arrayOfNumbers.map((number) => number.toString());
// console.log(arrayOfStrings);

type AreaNumber = {
  height: number;
  width: number;
};

type AreaString = {
  height: string;
  width: string;
};
//lookup type
type AreaReadOnly = {
  readonly height: number;
  readonly width: number;
};

const ractangulerArea: AreaReadOnly = {
  height: 22,
  width: 2424,
};

type A = AreaNumber["height"];
type B = keyof AreaNumber; // "height" | "Width"
// const obj = { name: "Ismail Hossen" };
// obj["name"];
type Volume = {
  height: number;
  width: number;
  depth: number;
};
// map type
type Area<T> = {
//   [key in keyof Volume]: Volume[key];
    [key in keyof T] : T[key]
};

const area1: Area<{name: string, height: number, width: number}> ={
    name: "Ismail",
    height: 33,
    width: 353,
}