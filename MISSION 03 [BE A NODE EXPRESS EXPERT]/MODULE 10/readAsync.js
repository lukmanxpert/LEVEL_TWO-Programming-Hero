import fs from "fs";

console.log("reading staring...");

const readFile = fs.readFile("./read.txt", "utf-8", (error, data) => {
  if (error) {
    console.error("error", error.message);
  } else if (data) {
    console.log("Reading: ", data);
  } else {
    console.log("Something went error...");
  }
});

console.log("Great, I just finished it.");
