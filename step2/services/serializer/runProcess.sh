#!/bin/bash
export SERVICE_HOST=localhost
export SERVICE_PORT=8081
MACHINE=`docker-machine ls -q | head`
export INFLUX_HOST=$(docker-machine ip $MACHINE)
node serializer.js
