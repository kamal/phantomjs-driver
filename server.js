var http = require('http'),
      io = require('socket.io'),
  static = require('node-static');

var file = new(static.Server)('./public');

server = http.createServer(function(req, res) {
  req.addListener('end', function () {
    file.serve(req, res);
  });
});

server.listen(8081);

// socket.io, I choose you
var socket = io.listen(server);
