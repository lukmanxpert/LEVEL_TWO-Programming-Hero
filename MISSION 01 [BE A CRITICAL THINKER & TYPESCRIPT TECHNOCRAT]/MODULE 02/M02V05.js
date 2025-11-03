const products = [
  { id: 101, name: "Laptop", price: 85000, stock: 8 },
  { id: 102, name: "Mouse", price: 800, stock: 50 },
  { id: 103, name: "Keyboard", price: 1500, stock: 32 },
  { id: 104, name: "Monitor", price: 12000, stock: 12 },
  { id: 105, name: "Printer", price: 9000, stock: 4 },
];

const subTotal = products.reduce((total, product) => {
  return total + product.price;
}, 0);

// console.log("subTotal :>> ", subTotal);

// use reduce to find the best scorer player
const players = [
  {
    player: "Cristiano Ronaldo",
    totalGoals: 902,
  },
  {
    player: "Lionel Messi",
    totalGoals: 840,
  },
  {
    player: "Josef Bican",
    totalGoals: 722,
  },
  {
    player: "Robert Lewandowski",
    totalGoals: 674,
  },
  {
    player: "Ferenc Puskás",
    totalGoals: 725,
  },
];

const bestScorer = players.reduce((bestScorer, player) => {
  if (bestScorer.totalGoals < player.totalGoals) {
    return player;
  } else {
    return bestScorer;
  }
}, players[0]);

console.log("bestScorer :>> ", bestScorer);
