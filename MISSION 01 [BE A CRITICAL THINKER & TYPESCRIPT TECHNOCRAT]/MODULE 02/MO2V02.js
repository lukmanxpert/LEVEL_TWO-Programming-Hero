// learn map, filter, sort, slice

const products = [
  { id: 101, name: "Laptop", price: 85000, stock: 8 },
  { id: 102, name: "Mouse", price: 800, stock: 50 },
  { id: 103, name: "Keyboard", price: 1500, stock: 32 },
  { id: 104, name: "Monitor", price: 12000, stock: 12 },
  { id: 105, name: "Printer", price: 9000, stock: 4 },
];

const totalPrice = products
  .map((product) => product.price)
  .filter((value) => value > 10000)
  .reduce((prev, curr) => prev + curr, 0);
// console.log("totalPrice :>> ", totalPrice);

const filteredProducts = products.filter((product) => product.price > 5000);

// console.log("filteredProducts :>> ", filteredProducts);

// const sortedProducts = products.sort((a, b) => a.stock - b.stock);

// console.log("sortedProducts :>> ", sortedProducts);

const sliceProducts = products.slice(0, 2)

console.log('sliceProducts :>> ', sliceProducts);
console.log('products :>> ', products);
