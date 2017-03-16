const http = require("http");

var url = process.argv[2];

http.get(url, function(response){
    response.setEncoding("utf-8");
    response.on("error", console.error)
            .on("data", console.log);
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});
