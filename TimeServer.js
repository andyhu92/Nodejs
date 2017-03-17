const net = require("net");

net.createServer(function(socket){
    socket.end(getCurrentDate());
}).listen(process.argv[2]);

function getCurrentDate(){
    var date = new Date();
    return date.getFullYear() + "-"
         + padZero(date.getMonth() + 1) + "-"
         + padZero(date.getDate()) + " "
         + padZero(date.getHours()) + ":"
         + padZero(date.getMinutes()) + "\n";
}

function padZero(num){
    return (num < 10 ? "0":"") + num;
}