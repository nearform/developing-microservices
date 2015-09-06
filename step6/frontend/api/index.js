'use strict';

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var i = 0;

app.use('/', express.static(__dirname + '/../public'));


setInterval(function() {
  /*
   * your challenge is to replace the random value generation with a call to ther serializer read handler
   * the chart should now be populated with data returned from the sensor
   * your solution should send each data point once only.
   */
  var randInt = Math.floor(Math.random() * 100);
  var temp = Math.round((Math.sin(i++ / 40) + 4) * (randInt + 200));
  io.emit('data', [{time: (new Date()).getTime(), sensorId: '1', temperature: temp}]);
}, 1000);



io.on('connection', function(/*socket*/){
  console.log('client connected');
});



http.listen(3000, function(){
  console.log('listening on *:3000');
});

