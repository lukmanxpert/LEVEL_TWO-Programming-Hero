// type Sum = (num1: number, num2: number) => number;

// const sum: Sum = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(sum(10, 20));

type Role = "user" | "admin";

type User = {
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

type Administrator = User & Role;

const administrator1: Administrator = {
  name: "Sheikh MD Lukman Miah",
  age: 21,
  role: "admin",
  marriedStatus: false,
};

console.log(administrator1);
