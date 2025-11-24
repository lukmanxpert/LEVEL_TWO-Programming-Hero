import fs from "fs";

fs.writeFileSync("./output/deleteFile.txt", "This is a delete file");

console.log(fs.existsSync("./output/deleteFile.txt"));

if (fs.existsSync("./output/deleteFile.txt")) {
  fs.unlinkSync("./output/deleteFile.txt");
  console.log("File Deleted...");
}
