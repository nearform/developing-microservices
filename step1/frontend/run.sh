#!/bin/bash
MACHINE=`docker-machine ls -q | head`
DOCKER_IP=$(docker-machine ip $MACHINE)
docker build -t frontend .
docker run -p 3000:3000 -d frontend
echo open http://$DOCKER_IP:3000

