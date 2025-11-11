// todo: type alias via object
type User = {
  name: string;
  age: number;
  address: {
    city: string;
    division: string;
  };
  occupation?: {
    type: string;
    institute: string;
  };
};

const user1: User = {
  name: "Sheikh Lukman",
  age: 21,
  address: {
    city: "Uttara",
    division: "Dhaka",
  },
  occupation: {
    type: "Student",
    institute: "Habiganj Polytechnic Institute",
  },
};

// todo: type alias via function
type SumNum = (num1: number, num2: number) => number;

const sum: SumNum = (num1, num2) => {
  return num1 + num2;
};


console.log(sum(12, 21));