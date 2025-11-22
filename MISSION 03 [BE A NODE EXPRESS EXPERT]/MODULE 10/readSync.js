import fs from "fs";

console.log("reading stating...");

const readFile = fs.readFileSync("./read.txt", "utf-8");
console.log(readFile);

console.log("great, i just finished it...");
