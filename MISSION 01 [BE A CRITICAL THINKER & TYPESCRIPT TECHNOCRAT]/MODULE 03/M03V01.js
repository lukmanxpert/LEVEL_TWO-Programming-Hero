const stateLess = (num) => {
  let sum = 0;
  sum += num;
  return sum;
};

const stateFull = {
  sum: 0,
  increase: (num) => {
    stateFull.sum = stateFull.sum + num;
    return stateFull.sum
  },
};

console.log(stateFull.increase(10));
console.log(stateFull.increase(10));
console.log(stateFull.increase(50));
