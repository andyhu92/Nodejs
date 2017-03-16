const fs = require("fs");

var filePath = process.argv[2];
var fileContent = fs.readFileSync(filePath, "utf-8");
var lineCount = fileContent.split("\n").length - 1;
console.log(lineCount);