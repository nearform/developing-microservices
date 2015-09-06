'use strict';

var seneca = require('seneca')();
var influx= require('influx');



var createDatabase = function(cb) {
  setTimeout(function() {
    var initDb = influx({host: process.env.INFLUX_HOST, username : 'root', password : 'root'});
    initDb.createDatabase('temperature', function(err) {
      if (err) { console.log('ERROR: ' + err); }
      cb();
    });
  }, 3000);
};



createDatabase(function() {
  var db = influx({host: process.env.INFLUX_HOST, username : 'root', password : 'root', database : 'temperature'});
  var ifx = require('./influxUtil')(db);

  /*
   * your challenge is to add a read action handler to select data from influx
   * the handler should take a start and end time and also a sensor id as input parameters
   * and return time series data
   *
   * Hint: there is a readPoint method in influxUtil
   */

  seneca.add({role: 'serialize', cmd: 'write'}, function(args, callback) {
    ifx.writePoint(args.sensorId, args.temperature, function(err) {
      callback(err);
    });
  });


  seneca.listen({host: process.env.SERVICE_HOST, port: process.env.SERVICE_PORT});
});


module.exports.seneca = seneca;


