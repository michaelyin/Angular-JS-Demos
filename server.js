
console.log("start nodejs server with connect ...");
var port = 8000;
console.log("server listening on port " + port);
var connect = require('connect');
connect.createServer(
    connect.static(__dirname)
).listen(port);
