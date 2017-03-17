const http = require("http");
const bl = require("bl");

var collect = {};

for(var i = 2;i < process.argv.length; i++){
    getData(process.argv[i], i);
}

function getData(url, index){
    http.get(url, function(response){
        response.pipe(bl(function(err, data){
            if(err) return console.error(err);
            collect[index] = data.toString();
            //Get all data
            if(Object.keys(collect).length === 3){
                for(var i = 2;i < process.argv.length; i++){
                    console.log(collect[i]);
                }
            }
        }));
    });
}