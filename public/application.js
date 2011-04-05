var socket = new io.Socket('localhost', {transports:['htmlfile', 'xhr-multipart', 'xhr-polling', 'jsonp-polling']});

socket.on('message', function(data) {
  console.log("Eval-ing " + data);
  eval(data);
});

socket.connect();
