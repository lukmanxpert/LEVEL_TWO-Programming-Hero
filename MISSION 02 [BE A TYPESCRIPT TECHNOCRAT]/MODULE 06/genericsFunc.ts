const createArrayWithGenerics = <T>(value: T) => [value];

console.log(
  createArrayWithGenerics({
    id: 10,
    name: "Sheikh Lukman",
  })
);
