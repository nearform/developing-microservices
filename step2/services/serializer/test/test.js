'use strict';

process.env.SERVICE_HOST = 'localhost';
process.env.SERVICE_PORT = 3001;

var assert = require('assert');
var ser = require('../serializer');

describe('read write test', function() {

  before(function(done) {
    // hack to wait for the db to be up
    setTimeout(done, 1000)
  })

  it('should write data to influx', function(done){
    ser.seneca.act({role: 'serialize', cmd: 'write', sensorId: '1', temperature: 32}, function(err) {
      assert(!err);
      done();
    });
  });
});


