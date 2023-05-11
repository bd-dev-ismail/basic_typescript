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