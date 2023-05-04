type PersonType = {
  name: string;
  age: number;
  address: string;
};

type newType = "name" | "age" | "address";

type newTypeUsingKeyOf = keyof PersonType;

// const a: newType = "address"
// const b: newTypeUsingKeyOf = "name"

function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
  obj[key];
}

const property = getProperty({ name: "Hello", age: 33 }, "name");
// ({name: "Mr. Hello", age: 234}, "age") //100
const a = { name: "Mr. Hello", age: 234 };
// a["age"]
