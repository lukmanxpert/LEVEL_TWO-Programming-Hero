type generics<type> = Array<type>;

const friends: generics<string> = ["Lukman", "Baki", "Jaki", "Suhan", "Riyad"];
const numbers: generics<number> = [12, 12, 34, 53];

const userList: generics<{ name: string; age: number }> = [
  {
    name: "Sheikh Lukman",
    age: 21,
  },
  {
    name: "Baki Billah",
    age: 20,
  },
];
