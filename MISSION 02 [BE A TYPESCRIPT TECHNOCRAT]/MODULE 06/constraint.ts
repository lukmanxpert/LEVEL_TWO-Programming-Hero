// todo: constraint => strict roles deya

const createStudentObjArray = <T extends { id: number; name: string }>(
  value: T
) => [value];

const student1 = {
  id: 1,
  name: "Sheikh Lukman",
  isMarried: false,
};

const student2 = {
  hasWatch: true,
};

createStudentObjArray(student1);
// createStudentObjArray(student2);
