const version = 'v1.0.2'

const http = require('http');
const os = require('os');

console.log(`lb_tester ${version} starting...`);

var handler = function(request, response) {
  console.log(`Received request from ${request.connection.remoteAddress}`);

  response.writeHead(200);
  response.end(`lb_tester ${version}, hostname: ${os.hostname()}\n`);
};

var www = http.createServer(handler);
www.listen(8080);
