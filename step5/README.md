# Step 5

This is the solution for the challenge in step 5.

To run the microservices as a container:

1. Update your docker compose to match a [valid one][]
2. Run `docker ps -q | xargs docker stop` to stop all running containers
3. Run `docker-compose build` to rebuild all containers
4. Run `docker-compose up` to start all containers
5. Run `docker exec -ti <containerID> /opt/influxdb/influx` to connect to influxdb
6. Run `use temperature; select count(temperature) from temperature;` to see the new data

## Challenge

Your challenge is to add a read action handler to select data from influx
the handler should take a start and end time and also a sensor id as input
parameters and return time series data.

Hint: there is a readPoint method in influxUtil

Once you have your code finished and the sytem running with docker-compose.
You should test the read handler from within the frontend container, via
`docker exec`:

1. `docker exec -ti frontend /bin/bash`
4. `curl -X POST -d "{\"role\": \"serialize\", \"cmd\": \"read\", \"sensorId\": \"1\", \"start\": 1441400000000, \"end\": 1541497000671}" http://serializer:3001/act  --header "Content-Type:application/json"`


[valid one]: ./docker-compose.yml
