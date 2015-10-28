# Step 4

This is the solution for the challenge in step 3.
To run the microservices as a container:

1. `docker ps -q | xargs docker stop` stops all running containers
2. `docker-compose build`
3. `docker-compose up`

Test the application like previous steps.

## Challenge

You are provided with a dummy sensor and a MQTT broker service, your
challenge is to wire these into the docker compose yml. The MQTT broker
needs to connnect to the serializer microservice that you wired up in
the previous step.

If you do this correctly, you should be able to see data streaming into
influxdb from the sensor through the broker when you start the system with `docker-compose up`

