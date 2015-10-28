#!/bin/bash
export DOCKER_IP=$(docker-machine ip default)
docker run -p 3001:3001 -e SERVICE_HOST=0.0.0.0 -e SERVICE_PORT=3001 -e INFLUX_HOST=$DOCKER_IP -d serializer
