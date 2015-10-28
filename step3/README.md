# Step 3
This is the solution for the challenge in step 2.

1. Run `docker ps -q | xargs docker stop` to stop all running containers
2. Change directory to `services/serializer`
3. Run `docker build -t serializer .`
4. Run influxdb `docker run -d -p 8083:8083 -p 8086:8086 --expose 8090 --expose 8099 tutum/influxdb`
5. Run `sh ./runContainer.sh`
6. Run the curl command below, it will return null, run it a couple of times to add some dummy data
7. Open the influxdb console with `docker exec -ti <containerID> /opt/influxdb/influx`
8. Execute `use temperature; select * from temperature;` in the influx console to see the data

__Data add curl:__
```
curl -X POST -d "{\"role\": \"serialize\", \"cmd\": \"write\", \"sensorId\": \"1\", \"temperature\": 32}"
http://`docker-machine ip default`:3001/act  --header "Content-Type:application/json"
```

## Challenge
Running multiple containers individually is error prone, your challenge
is to use docker-compose. In this step you will create a docker compose
yml file to launch all our containers with a single command.

A skeleton `docker-compose.yml` is provided for you, you just need to
fill in the settings for the various containers.

__Hint:__ You can see a completed `docker-compose.yaml` [here][]

[here]: ../step4/docker-compose.yml
