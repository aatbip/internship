const path = require("path");

// console.log(path.sep); 

const filePath = path.join("/", "something", "another"); 

console.log(filePath); 

const absolutePath = path.resolve(__dirname, "path.js"); 

console.log(absolutePath); 

