// type Sum = (num1: number, num2: number) => number;

// const sum: Sum = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(sum(10, 20));

type Role = "user" | "admin";
type mStatus = boolean;

type UserStatus = Role & mStatus;


interface User {
  name: string;
  age: number;
  marriedStatus: boolean;
  //   role: Role;
}

// const user: User = {
//   name: "Sheikh Lukman",
//   age: 21,
//   marriedStatus: false,
//   role: "admin",
// };

interface IAdministrator extends User {
  role: Role;
}

const admin1: IAdministrator = {
  name: "Sheikh Lukman",
  age: 21,
  marriedStatus: false,
  role: "admin",
};
