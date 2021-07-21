const fs = require("fs");

const path = process.argv[2];

fs.readFile(path, "utf8", (err, data) => {
  if (!err) {
    console.log(data.split("\n").length - 1);
  }
});
