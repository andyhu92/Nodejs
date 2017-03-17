const http = require("http");
const url = require("url");

http.createServer(function(request, response){
    response.writeHead(200, { 'Content-Type': 'application/json ' });
    var urlInfo = url.parse(request.url, true);
    var dateTime = new Date(urlInfo.query["iso"]);
    if(!urlInfo.query["iso"]){
        response.writeHead(400);
        response.end("Bad request: missing iso time");
        return;
    }
    if(urlInfo.pathname === "/api/parsetime"){
        var res = {
            hour: dateTime.getHours(),
            minute: dateTime.getMinutes(),
            second: dateTime.getSeconds()
        }
        response.end(JSON.stringify(res));

    } else if(urlInfo.pathname === "/api/unixtime"){
         var res = {
            unixtime: dateTime.getTime(),
        }
        response.end(JSON.stringify(res));
    } else{
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.end("404 Not Found\n");
    }

}).listen(+process.argv[2]);

