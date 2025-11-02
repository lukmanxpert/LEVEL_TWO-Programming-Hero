const fruits = ["banana", "Cherry", "apple", "orange"];

// todo : important things for sorting, localeCompare is ignore the inside algorithm
fruits.sort((a, b) => a.localeCompare(b));

const numbers = [12, 43, 54, [12, 52, [43, 45, 87, [90, 87, 54]]]];

// flattening array
const flatNumbers = numbers.flat(Infinity);

console.log(flatNumbers.length);

// todo : make an array unique || these the best practice inspired Big-o-Notation
const numbersSet = new Set(flatNumbers);
const uniqueArray = new Array(...numbersSet);

console.log(flatNumbers);
console.log(numbersSet);
console.log(uniqueArray);
