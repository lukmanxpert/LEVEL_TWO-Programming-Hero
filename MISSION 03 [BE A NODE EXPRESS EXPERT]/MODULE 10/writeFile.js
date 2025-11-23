import fs from "fs";

const content = "Good morning, node.js is awesome...";

try {
  fs.writeFileSync("./output/writeFileSync.txt", content);
  console.log("File writing successful...");
} catch (error) {
  console.error(error);
}

try {
  const content2 = "I'am learning node.js, node.js is awesome...";
  fs.writeFile("./output/writeFileAsync.txt", content2, (error) => {
    if (error) {
      console.error(error);
    }
    console.log("File async write successful...");
  });
} catch (error) {
  console.error(error);
} 