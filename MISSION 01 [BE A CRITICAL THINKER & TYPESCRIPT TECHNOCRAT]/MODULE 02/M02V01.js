const course1 = { name: "programming-hero", level: "level 1" };
const course2 = { name: "next level web development", level: "level 2" };

const obj = {
  name: "Sheikh Lukman",
  "class roll": 677334,
};

obj[course1] = course1;

// console.log(obj["object Object"]);

const map = new Map();

map.set(course1, { year: 2024, status: "finished" });
map.set(course2, { year: 2025, status: "running" });

console.log("map :>> ", map);


for (const obj of map.values()) {
    console.log(obj.status);
}

console.log(map.has(course1));

map.forEach((value, key) => {
    console.log('key :>> ', key);
    console.log('value :>> ', value);
})

