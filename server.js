var http    = require('http'),
      io    = require('socket.io'),
  static    = require('node-static'),
querystring = require('querystring');

var file = new(static.Server)('./public');
var params;
var current_client;

var server = http.createServer(function(req, res) {
  var body = '';

  req.on('data', function(data) {
    if (req.url == "/phantom") {
      body += data.toString();
    }
  });

  req.on('end', function () {
    if (req.url == "/phantom") {
      params = querystring.parse(body);
      current_client.send(params['payload']);
      res.end();
    } else {
      file.serve(req, res);
    }
  });
});

server.listen(8081);

// socket.io, I choose you
var socket = io.listen(server);
socket.on('connection', function(client) {
  current_client = client;
});
