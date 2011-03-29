var socket = new io.Socket('localhost', {transports:['htmlfile', 'xhr-multipart', 'xhr-polling', 'jsonp-polling']});
socket.connect();
