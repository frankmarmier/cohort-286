const fs = require("fs");
const path = require("path");
const directoryPath = process.argv[2];
const extension = "." + process.argv[3];

fs.readdir(directoryPath, (err, list) => {
  if (err) {
    return console.log(err);
  }
  for (let fileName of list) {
    // if (fileName.includes("." + extension)) {
    //   console.log(fileName);
    // }
    if (path.extname(fileName) === extension) {
      console.log(fileName);
    }
  }
});
