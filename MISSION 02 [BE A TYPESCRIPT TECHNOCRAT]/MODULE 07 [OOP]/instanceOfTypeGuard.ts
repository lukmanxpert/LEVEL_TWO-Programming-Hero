// todo ==> instance of type guard

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getSleep(sleepHours: number) {
    console.log(`${this.name} doinik ${sleepHours} ghonta gumay`);
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }
  doStudy(studyHour: number) {
    console.log(`${this.name} doinik ${studyHour} ghonta pore`);
  }
}
class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }
  doTeach(teachingHour: number) {
    console.log(`${this.name} doinik ${teachingHour} ghonta poray`);
  }
}

const teacher1 = new Teacher("Suheb Miah");
const student1 = new Student("Sheikh Lukman");
const person1 = new Person("Normal Person");

const checkStudent = (person: Person) => person instanceof Student;
const checkTeacher = (person: Person) => person instanceof Teacher;

const getUserInfo = (user: Person) => {
  if (checkStudent(user)) {
    user.doStudy(10);
  } else if (checkTeacher(user)) {
    user.doTeach(8);
  } else {
    user.getSleep(6);
  }
};

getUserInfo(teacher1);
