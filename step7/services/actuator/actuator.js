'use strict';

var mqtt = require('mqtt').connect('mqtt://broker:1883');
var seneca = require('seneca')();



mqtt.on('connect', function () {
});



mqtt.on('message', function (topic, payload) {
});


seneca.add({role: 'actuate', cmd: 'set'}, function(args, callback) {
  var payload = JSON.stringify({ "offset":  parseInt(args.offset) })

  server.publish({
    cmd: 'publish',
    topic: 'temperature/1/set',
    payload: new Buffer(payload),
    qos: 0,
    retain: true
  }, function (err) {
    // needed because server.publish returns more parameters
    callback(err)
  })
})

seneca.add({role: 'actuate', cmd: 'set'}, function(args, callback) {
  ifx.readPoints(args.sensorId, args.start, args.end, function(err, data) {
    callback(err, data);
  });
});


seneca.add({role: 'serialize', cmd: 'write'}, function(args, callback) {
 


var i = 0;
setInterval(function() {
  var randInt = Math.floor(Math.random()*100);
  var temp = Math.round((Math.sin(i++ / 40) + 4) * randInt + offset);

  console.log(offset, temp)
  mqtt.publish('temperature/1/read', JSON.stringify({
    sensorId: '1',
    temperature: temp
  }), function(err) {
    if (err) { console.log(err); }
  });
}, 2000);
