const { readFileSync, writeFileSync } = require("fs");


writeFileSync("./newfile.txt", "this is new file");
const somefile = readFileSync("./somefile.txt", "utf-8");

console.log(somefile);
