# Step 4

This is the solution for the challenge in step 3.
To run the microservices as a container:

1. `docker ps -q | xargs docker stop` stops all running containers
2. `docker-compose build`
3. `docker-compose up`

Test the application like previous steps.

## Challenge

You are provided with a dummy sensor and a MQTT broker service, your challenge is to wire these
into the docker compose yml. The MQTT broker needs to connect to the serializer microservice
that you wired up in the previous step.

To complete this challenge you will need to add two new entries to the [docker-compose.yml][] file.

### The broker section
1. Add a `build` entry pointing to `./services/broker`
2. Add a `container_name` entry with the value `broker`
4. Add a link entry with the name of the serializer service as it's value
3. In the broker section add an environment entry with the following,
  - `SERVICE_HOST`
  - `SERVICE_PORT`
  - `serializer_HOST`
  - `serializer_PORT`

### The sensor section
1. Add a `build` entry pointing to `./services/sensor`
2. Add a `container_name` entry with the value `sensor`
3. Add a link entry with the name of the broker service as it's value

If you do this correctly, you should be able to see data streaming into
influxdb from the sensor through the broker. To confirm,

1. Run `docker ps -q | xargs docker stop` to stop all running containers
2. Run `docker-compose build` to rebuild all containers
3. Run `docker-compose up` to start all containers
4. Run `docker exec -ti <containerID> /opt/influxdb/influx` to connect to influxdb
5. Run `use temperature; select count(temperature) from temperature;` to see the new data

[docker-compose.yml]: ./docker-compose.yml
