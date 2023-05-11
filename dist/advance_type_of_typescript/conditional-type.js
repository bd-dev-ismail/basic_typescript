"use strict";
// //conditional type ==when a type depand on another type
// type a1 = number;
// type a3 = undefined;
// type a4 = number;
// type a2 = a1 extends string ? string : null;
// //nested conditional type
// type d = a1 extends null
//   ? null
//   : a3 extends number
//   ? number
//   : a4 extends null
//   ? null
//   : never;
// type Sheik = {
//   wife1: string;
//   wife2: string;
// };
// type A = keyof Sheik; //Wife1 | Wife2
// type CheckProperty<T, K> = K extends keyof Sheik ? true : false;
// /// checking sheik wife1 ache kina?
// type CheckWife1 = CheckProperty<Sheik, "wife2">;
// //craziest example
// type Bandopi = "Nowrin" | "Amrin" | "Noushin";
// type RemoveBandopi<T, K> = T extends K ? never : T;
// type CurrentBandopi = RemoveBandopi<Bandopi, "Noushin">;
