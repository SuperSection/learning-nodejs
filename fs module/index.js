const fs = require("fs");

// Non-blocking I/O model
fs.writeFile("file.txt", "Data is added to file", () => {
  console.log("File is successfully created");
});

const randomVar = fs.writeFileSync("file2.txt", "Data is entered in this file");
console.log(randomVar); // = undefined
console.log("Super Section is here");

fs.readFile("file.txt", "utf-8", (err, data) => {
  console.log(err);
  console.log(data);
});

fs.appendFile("file.txt", "\nAgain some data is added here", (err) => {
  console.log(err);
});

fs.rename("file.txt", "file01.txt", (err) => {
  console.log(err);
});

fs.unlinkSync("file01.txt")