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
  var db = influx({host : process.env.INFLUX_HOST, username : 'root', password : 'root', database : 'temperature'});
  var ifx = require('./influxUtil')(db);

  /*
   * Your challenge is to add a seneca pattern handler here that will recieve a write command to the serialize role.
   * The handler should use the influxUtil writePoint method to write data to influx. The unit test and the seneca
   * documentation should show you how this can be achieved...
   */

});

module.exports.seneca = seneca;

seneca.listen({host: process.env.SERVICE_HOST, port: process.env.SERVICE_PORT});

