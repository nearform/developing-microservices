'use strict';

/*
 * todo: actuator to talk to the broker and send control message over this channel
 * then prep up step7
 */

var seneca = require('seneca')();


seneca.add({role: 'actuate', cmd: 'set'}, function(args, cb) {
  var payload = JSON.stringify({offset:  parseInt(args.offset)});
  console.log('ACUTAUTE ====> ' + payload);
  cb(null, {});
});


seneca.listen({host: process.env.SERVICE_HOST, port: process.env.SERVICE_PORT});

