const fs = require("fs");
const path = require("path");

function filteredLs(dir, ext, callback){
    fs.readdir(dir, function(err, list){
        if(err) return callback(err);
        var filteredList = list.filter(file => path.extname(file) === "." + ext);
        callback(null, filteredList);
    });
}


module.exports = filteredLs;