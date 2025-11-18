// todo => polymorphism is the 2nd pillar of oop

class Person {
  getSleep(sleepTime: number) {
    console.log(`Normal person doinik ${sleepTime} ghonta gumay`);
  }
}

class Student extends Person {
  name: string;
  constructor(name: string) {
    super();
    this.name = name;
  }
  getSleep(sleepTime: number): void {
    console.log(`${this.name} doinik ${sleepTime} ghonta gumay`);
  }
}

class Teacher extends Person {
  name: string;
  constructor(name: string) {
    super();
    this.name = name;
  }
  getSleep(sleepTime: number): void {
    console.log(`${this.name} doinik ${sleepTime} ghonta gumay`);
  }
}

const person1 = new Person();
const student1 = new Student("Sheikh Lukman");
const teacher1 = new Teacher("Mr. Suheb");

person1.getSleep(10);
student1.getSleep(10);
teacher1.getSleep(10);
