var filesFilter = require("./MakeItModular-Module");

filesFilter(process.argv[2], process.argv[3], function(err, list){
    if(err) return console.error(err);
    list.forEach(file => console.log(file));
});