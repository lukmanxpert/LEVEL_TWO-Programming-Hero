const poorPerson = {
  balance: 0,
  name: "Sheikh Lukman",
  addBalance(num: number): number {
    return (this.balance += num);
  },
};

console.log(poorPerson.addBalance(100));
console.log(poorPerson.addBalance(200));

interface person {
  name: string;
  age: number;
  isMarried?: boolean; // todo: optional type
}

const person1: person = {
  name: "Sheikh Lukman",
  age: 21,
};

const add = (num1: number, num2: number): number => {
  return num1 + num2;
};

console.log(add(20, 50));
