'use strict';

var express = require('express');
var seneca = require('seneca')();
var app = express();
var http = require('http').Server(app);
var webStream = require('./webStream')(http);
var moment = require('moment');
var _ = require('lodash');

// Remember to use seneca.client to send messages we create via
// seneca.act to the serializer service.

app.use('/', express.static(__dirname + '/../public'));

var lastEmitted = 0;
var sensorId = 1;
var start = moment().subtract(10, 'minutes').utc().format();
var end = moment().utc().format();

function handleRead (data) {
  var toEmit = [];

  _.each(data[0], function(point) {
    if (moment(point.time).unix() > lastEmitted) {
      lastEmitted = moment(point.time).unix();
      point.time = (new Date(point.time)).getTime();
      toEmit.push(point);
    }
  });

  if (toEmit.length > 0) {
    console.log('will emit');
    console.log(toEmit);
    webStream.emit(toEmit);
  }
  else {
    console.log('no emit');
  }
}

var i = 0;

function readRandom() {
  var randInt = Math.floor(Math.random() * 100);
  var temp = Math.round((Math.sin(i++ / 40) + 4) * (randInt + 200));
  webStream.emit([{time: (new Date()).getTime(), sensorId: '1', temperature: temp}]);
}

// You challenge is to replace the readRandom function, which is called below, with
// the handleRead function above. We have also provided the sensorId, start and end
// values for convenience. handleRead should be called inside a seneca.act callback

setInterval(function() {
  readRandom();
}, 1000);

http.listen(3000, function(){
  console.log('listening on *:3000');
});
