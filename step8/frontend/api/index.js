'use strict';

var express = require('express');
var seneca = require('seneca')();
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var moment = require('moment');
var _ = require('lodash');

seneca.client({host: process.env.serializer_HOST, port: process.env.serializer_PORT, pin: {role: 'serialize', cmd: 'read'}});
seneca.client({host: process.env.actuator_HOST, port: process.env.actuator_PORT, pin: {role: 'actuate', cmd: 'set'}});

app.use('/', express.static(__dirname + '/../public'));



app.get('/set', function (req, res) {
  seneca.act({role: 'actuate', cmd: 'set', offset: req.query.offset}, function(err) {
    if (err) {
      res.json({result: err});
    }
    else {
      res.json({result: 'ok'});
    }
    res.end();
  });
});



var lastEmitted = 0;
setInterval(function() {
  seneca.act({role: 'serialize', cmd: 'read', sensorId: '1', start: moment().subtract(10, 'minutes').utc().format(), end: moment().utc().format()}, function(err, data) {
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
    }
    else {
      console.log('no emit');
    }
    io.emit('data', toEmit);
  });
}, 1000);



io.on('connection', function(/*socket*/){
  console.log('client connected');
});



http.listen(3000, function(){
  console.log('listening on *:3000');
});

