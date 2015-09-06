'use strict';

var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use('/public', express.static(__dirname + '/../public'));


setInterval(function() {
  /*
   * Put the point generation code here and emit it to the client over a web socket
   */
}, 1000);




http.listen(3000, function(){
  console.log('listening on *:3000');
});

