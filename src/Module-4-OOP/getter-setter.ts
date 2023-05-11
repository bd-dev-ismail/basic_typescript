class BankAccount {
  public readonly id: number;
  public name: string;
  private _blance: number;
  constructor(id: number, name: string, blance: number) {
    (this.id = id), (this.name = name), (this._blance = blance);
  }

   private getTestBlance(): number{
        return this._blance;
    }
     getTest():number{
        return this.getTestBlance();
     }
  ///getter bosabo
  get blance(): number{
    return this._blance
  }
//   getBlance(): number {
//     return this._blance
//   }
///setter
set deposite(amount: number){
    this._blance = this._blance + amount;
}
  addDeposite(amount: number) {
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
console.log(myAccount.blance)
