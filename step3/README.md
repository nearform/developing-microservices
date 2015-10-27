# Step 3

This is the solution for the challenge in step 2.
To run the serializer microservice as a container:

1. `docker ps -q | xargs docker stop` stops all running containers
2. `cd services/serializer`
3. Run `docker pull tutum/influxdb` to pull the influxdb image.
3. Run influxdb with: `docker run -d -p 8083:8083 -p 8086:8086 --expose 8090 --expose 8099 tutum/influxdb`
3. `./runContainer.sh`
4. Run `curl -X POST -d "{\"role\": \"serialize\", \"cmd\": \"write\", \"sensorId\": \"1\", \"temperature\": 32}" http://`docker-machine ip default`:3001/act  --header "Content-Type:application/json"
5. Open the Influx console with `docker exec -ti <containerID> /opt/influxdb/influx`
6. Execute `use temperature; select * from temperature;` in the influx
   console to see the data points

## Challenge

Running multiple containers individually is error prone, your challenge
is to use docker-compose. In this step you will create a docker compose
yml file to launch all our containers with a single command.

A skeleton `docker-compose.yml` is provided for you, you just need to
fill in the settings for the various containers.
