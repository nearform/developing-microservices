# Step 7

This is the solution for the challenge in step 6.
To run the microservices as a container:

1. Update your frontend/api/index.js file to match a [valid one][]
2. Run `docker ps -q | xargs docker stop` to stop all running containers
3. Run `docker-compose build` to rebuild all containers
4. Run `docker-compose up` to start all containers
5. Get your ip address with `docker-machine ip`
6. Point your browser to http://localhost:3000

You should now be able to see data streaming into the front end charts from influx.

## Challenge

Your challenge is to wire up the actuator micro-service. The actuator service is provided for you in services/actuator.
The actuator service will send a new offset message to the sensor via the mqtt broker. To enable the actuator you will
need to:

1. In index.js add a call to `seneca.client()` to allow messages to be sent from the frontend to the actuator
2. Add an API end point in frontend/api/index.js that responds to /set as a route
3. In this endpoint call `seneca.act` using `{role: 'actuate', cmd: 'set', offset: req.query.offset}`
3. Wire up the actuator into the docker-compose.yml

__Note__: A button and input field have been provided on the front end to call the /set route for you

Once you have your code ready, rebuild and restart using the steps below,

1. Run `docker ps -q | xargs docker stop` to stop all running containers
2. Run `docker-compose build` to rebuild all containers
3. Run `docker-compose up` to start all containers
4. Get your ip address with `docker-machine ip`
5. Point your browser to http://localhost:3000

You should see data flowing as before. Try applying a value of 500 to the actuator and you should see the chart jump.

[valid one]: ./frontend/api/index.js
