# Step 7

This is the solution for the challenge in step 6.
To run the microservices as a container:

1. `docker ps -q | xargs docker stop` stops all running containers
2. `docker-compose build`
3. `docker-compose up`

Test the application like previous steps, you should now be able to see data streaming into the front end
charts from influx.

## Challenge

Your challenge is to wire up actuator micro-service. The actuator service is provided for you in services/actuator.
Add this into your docker-compose.yml file and restart the system. You can test the actuator service by running the
following:

1. `docker exec -ti frontend /bin/bash`
4. `curl -X POST -d "{\"role\": \"actuate\", \"cmd\": \"set\", \"sensorId\": \"1\", \"offset\": 1000}" http://actuator:3002/act  --header "Content-Type:application/json"`

