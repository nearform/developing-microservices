# Step 5

This is the solution for the challenge in step 5.
To run the microservices as a container:

1. `docker ps -q | xargs docker stop` stops all running containers
2. `docker-compose build`
3. `docker-compose up`

Test the application like previous steps, you should be able to read
the data from influxdb:

```
docker exec -ti <containerID> /opt/influxdb/influx
```

and then:

```
use temperature;
select count(temperature) from temperature;
```

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
