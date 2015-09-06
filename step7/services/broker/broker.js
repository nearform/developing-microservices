'use strict';

var mosca = require('mosca');
var seneca = require('seneca')();
var server = new mosca.Server({});


seneca.client({host: process.env.serializer_HOST, port: process.env.serializer_PORT, pin: {role: 'serialize', cmd: 'write'}});



function parse (body) {
  try {
    return JSON.parse(body);
  } 
  catch (err) {
    return null;
  }
}



server.published = function (packet, client, cb) {
  var body;
  if (packet.topic.match(/temperature\/[0-9]+\/read/)) {
    body = parse(packet.payload);

    body.role = 'serialize';
    body.cmd = 'write';
    seneca.act(body, cb);
  } 
  else {
    cb();
  }
};



seneca.add({role: 'actuate', cmd: 'set'}, function(args, callback) {
  var payload = JSON.stringify({'offset':  parseInt(args.offset) });
  server.publish({cmd: 'publish', topic: 'temperature/1/set', payload: new Buffer(payload), qos: 0, retain: true}, function (err) {
    callback(err);
  });
});


seneca.listen({host: process.env.SERVICE_HOST, port: process.env.SERVICE_PORT});

