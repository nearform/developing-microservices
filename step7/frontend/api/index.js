'use strict';

var express = require('express');
var seneca = require('seneca')();
var app = express();
var http = require('http').Server(app);
var webStream = require('./webStream')(http);
var moment = require('moment');
var _ = require('lodash');

seneca.client({host: process.env.serializer_HOST, port: process.env.serializer_PORT, pin: {role: 'serialize', cmd: 'read'}});
// pin the actuator service here

app.use('/', express.static(__dirname + '/../public'));

var lastEmitted = 0;
var sensorId = 1
var start = moment().subtract(10, 'minutes').utc().format()
var end = moment().utc().format()


/*
 * add a new endpoint here to call the actuator service
 */

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



var lastEmitted = 0;
setInterval(function() {
  seneca.act({role: 'serialize', cmd: 'read', sensorId: sensorId, start: start, end: end}, function(err, data) {
    handleRead(data)
  });
}, 1000);



http.listen(3000, function(){
  console.log('listening on *:3000');
});
