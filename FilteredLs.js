const fs = require("fs");
const path = require("path");
var dir = process.argv[2];
var ext = "." + process.argv[3];

fs.readdir(dir, function(err, list){
    if(err) return console.error(err);
    list.forEach(file => {
        if(path.extname(file) ===  ext) console.log(file);
    });
});
