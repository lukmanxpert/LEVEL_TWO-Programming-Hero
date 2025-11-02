const userRoles = ["user", "editor", "admin"];

const requiredRoles = ["admin", "moderator"];

// todo: use of some array method
const canAccess = userRoles.some((role) => requiredRoles.includes(role));

// console.log(canAccess);

const arr = Array.from([1, 2, 3, 4, 5], (value, index) => value * value);

// console.log(arr);

const range = (start, stop, step) =>
  Array.from(
    { length: Math.ceil((stop - start) / step) },
    (_, index) => start + index * step
  );

console.log(range(1, 11, 2));
