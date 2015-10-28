#!/bin/bash
DOCKER_IP=$(docker-machine ip default)
docker build -t frontend .
docker run -p 3000:3000 -d frontend
echo open http://$DOCKER_IP:3000/public/index.html

