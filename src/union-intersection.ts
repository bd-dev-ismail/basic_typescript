type NoobDeveloper = {
  name: string;
};
// type JuniorDeveloper = {
//     name: string,
//     experties: string,
//     experience: number,
// }
/// & dawa k bola hocce intersection
type JuniorDeveloper = NoobDeveloper & {
  experties: string;
  experience: number;
};
/// orr kora ke bolteci union

// enum Level {
//   Junior = "Junior",
//   Mid = "Mid",
//   Senior = "Senior",
// }

type NextLevelDeveloper = JuniorDeveloper & {
  leaderShip: number;
  level: "Junior" | "Mid" | "Senior";
};

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
  name: "Ismail Hossen",
  experties: "JavaScript",
  experience: 6,
};

const developer: JuniorDeveloper | NextLevelDeveloper = {
  name: "Ismail Hossen",
  experties: "TypeScript",
  experience: 4,
  level: "Mid",
};
