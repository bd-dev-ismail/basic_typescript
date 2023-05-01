//normal function
function add(num1:number, num2:number):number{
    return num1 + num2;
}
add(2, 2)
const sum = (num11:number, num22:number):number=> {
    return num11 + num22
}

const arr = [1, 3, 4, 5];

const newArray = arr.map((element : number) => element*element);

const person:{name:string, blance:number,addBlance(money:number):void} = {
    name: "Ratul",
    blance: 5,
    addBlance(money: number){
        console.log(`My Total blance is ${this.blance+money}`)
    }
}