# Step 7

This is the solution for the challenge in step 6.
To run the microservices as a container:

1. `docker ps -q | xargs docker stop` stops all running containers
2. `docker-compose build`
3. `docker-compose up`

Test the application like previous steps, you should now be able to see data streaming into the front end
charts from influx.

## Challenge

Your challenge is to wire up the actuator micro-service. The actuator service is provided for you in services/actuator.
The actuator service will send a new offset message to the sensor via the mqtt broker. To enable the actuator you will
need to:

1. add an API end point in frontend/api/index.js that responds to /set as a route
2. a button and input field have been provided on the front end to call the /set route
3. wire up the actuator into the docker-compose.yml


Once you have your code ready, rebuild and restart using docker-compose. You should see data flowing as before. Try 
applying a value of 500 to the actuator and you should see the cahrt jump.

