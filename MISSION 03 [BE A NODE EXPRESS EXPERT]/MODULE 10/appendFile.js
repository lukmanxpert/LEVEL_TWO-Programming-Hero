import fs from "fs";

fs.writeFileSync("./output/appendFile.log", "Log File Created");

const content1 = `${new Date().toISOString()} : User logged in`;

fs.appendFileSync("./output/appendFile.log", "\n" + content1);

console.log("Task 1 completed");

const content2 = `${new Date().toISOString()} : User logged out`;

fs.appendFileSync("./output/appendFile.log", "\n" + content2);

console.log("Task 2 completed");
