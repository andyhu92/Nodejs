const http = require("http");
const map = require("through2-map");

http.createServer(function(request, response){
    request.pipe(map(function(chunk){
        return chunk.toString().toUpperCase();
    })).pipe(response);

}).listen(+process.argv[2]);