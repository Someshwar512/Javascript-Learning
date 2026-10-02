// const fs=require("fs");

// fs.writeFileSync("hello.txt", "Hello Node.js");

// console.log("File created");


// const fs = require("fs");

// const data = fs.readFileSync("hello.txt", "utf8");

// console.log(data);

// const path = require("path");

// console.log(path.basename(__filename));



const os = require("os");

console.log(os.platform());
console.log(os.arch());
console.log(os.cpus().length);