#!/bin/bash
MACHINE=`docker-machine ls -q | head`
DOCKER_IP=$(docker-machine ip $MACHINE)
docker build -t serializer .
docker run -p 3001:3001 -e SERVICE_HOST=0.0.0.0 -e SERVICE_PORT=3001 -e INFLUX_HOST=$DOCKER_IP -d serializer
