"use strict";
class BankAccount {
    constructor(id, name, blance) {
        (this.id = id), (this.name = name), (this._blance = blance);
    }
    getTestBlance() {
        return this._blance;
    }
    getTest() {
        return this.getTestBlance();
    }
    ///getter bosabo
    get blance() {
        return this._blance;
    }
    //   getBlance(): number {
    //     return this._blance
    //   }
    ///setter
    set deposite(amount) {
        this._blance = this._blance + amount;
    }
    addDeposite(amount) {
        this._blance = this._blance + amount;
    }
}
class StudentAccount extends BankAccount {
    test() {
    }
}
const myAccount = new BankAccount(213, "Ismail hossen", 23);
// myAccount.blance = 0;
console.log(myAccount.blance);
myAccount.deposite = 39;
console.log(myAccount.blance);
