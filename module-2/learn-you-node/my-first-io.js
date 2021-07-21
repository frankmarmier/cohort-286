const fs = require("fs");

const path = process.argv[2];

const buffer = fs.readFileSync(path);
const lines = buffer.toString().split("\n").length - 1;
console.log(lines);
