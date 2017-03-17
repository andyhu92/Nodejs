const http = require("http");
const fs = require("fs");

var filePath = process.argv[3];

http.createServer(function(request, response){
    response.writeHead(200, { "content-type": "text/plain"});

    fs.createReadStream(filePath).pipe(response);
}).listen(+process.argv[2]);