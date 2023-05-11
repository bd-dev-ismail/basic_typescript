//Pick
interface Personnn {
    name: string, 
    email?: string,
    contactNumber: number,
}

type Contact = Pick<Personnn, "contactNumber" | "email">

//Omitt
type Name = Omit<Personnn ,"email" | "contactNumber">

//Partial & Required

//to make all ther property with optional type

type optional = Partial<Personnn>

//required 
type requiredPeroperties = Required<Personnn>

const person  : Readonly<Personnn> ={
    name: "Ismail",
    email: "ismail@gmail.com",
    contactNumber: 38492390290,
}

// type myObj = {
//     a: string,
//     b: string,
//     c: string,
// }
//using index signiture
// type myObj = {
//   [key: "a" | "b" | "c"]: string;
// };
//utility type er recoder type
//Record type "a" | "b" | "c"]
type myObj = Record<"a" | "b" | "c" | "d", string>

const obj : myObj ={
    a: "1",
    b: "2",
    c: "3",
    d: "3",
}