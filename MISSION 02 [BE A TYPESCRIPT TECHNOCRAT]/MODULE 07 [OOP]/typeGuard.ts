const add = (num1: number | string, num2: number | string) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return num1.toString() + num2.toString();
  }
};

// console.log(add(20, 20));

// in guard

type NormalUser = {
  name: string;
};

type AdminUser = {
  name: string;
  role: "ADMIN";
};

const getUser = (user: NormalUser | AdminUser) => {
  if ("role" in user) {
    console.log(
      `The name of user is: ${user.name} and the role of user is: ${user.role}`
    );
  } else {
    console.log(`The name of user is ${user.name}`);
  }
};

getUser({ name: "Sheikh Lukman", role: "ADMIN" });
