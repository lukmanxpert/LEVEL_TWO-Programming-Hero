class Person {
  name: string;
  age: number;
  isMarried: boolean;
  constructor(name: string, age: number, isMarried: boolean) {
    this.name = name;
    this.age = age;
    this.isMarried = isMarried;
  }
  sleepTime() {
    console.log(`${this.name} eto ghonta gumay`);
  }
}

// const person1 = new Person("Sheikh Lukman", 21, false);

// person1.sleepTime();

class Teacher extends Person {
  designation: string;
  constructor(
    name: string,
    age: number,
    isMarried: boolean,
    designation: string
  ) {
    super(name, age, isMarried);
    this.designation = designation;
  }
  printDesignation() {
    console.log(`${this.name}'s designation is ${this.designation}`);
  }
}

const teacher1 = new Teacher("Mahi", 20, false, "Senior Teacher");

teacher1.sleepTime();
teacher1.printDesignation();
