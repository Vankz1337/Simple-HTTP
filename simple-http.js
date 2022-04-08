const http = require("http");

const server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end();
});
server.listen(80);
console.log("HTTP UP!");