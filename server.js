var http = require('http'),
      io = require('./vendor/socket.io'),
  static = require('./vendor/node-static');

var file = new(static.Server)('./public');

server = http.createServer(function(req, res) {
  req.addListener('end', function () {
    file.serve(req, res);
  });
});

server.listen(8081);

// socket.io, I choose you
var socket = io.listen(server);
