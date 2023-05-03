//spread operator
// const newData = { ...myInfo, crush };

const addMeInCrushMind = <T>(myInfo: T) => {
  const crush = "Nowrrin";
  const newData = { ...myInfo, crush };
  return newData;
};
const crush = "Noushin Akter";
const myInfo = {
  name: "Ismail Hossen",
  age: 22,
  salary: 10,
};


const result5 = addMeInCrushMind(myInfo);
