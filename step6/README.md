# Step 6

This is the solution for the challenge in step 5.

To run the microservices as a container:

1. Update your serializer.js file to match a [valid one][]
2. Run `docker ps -q | xargs docker stop` to stop all running containers
3. Run `docker-compose build` to rebuild all containers
4. Run `docker-compose up` to start all containers
5. Run `docker exec -ti frontend /bin/bash` to open a bash terminal in the frontend container
4. Run the curl command below to mimic a read

```
curl -X POST -d "{\"role\": \"serialize\", \"cmd\": \"read\", \"sensorId\": \"1\", \"start\": 1441400000000, \"end\": 1541497000671}" http://serializer:3001/act  --header "Content-Type:application/json"
```

## Challenge

Your challenge is to wire the data reader up to the front end. To do this you will need to replace the radom value
generator in the frontend/api/index.js with a call to read data from the serializer service. Once you have the code
completed, restart the system using docker-compose and open the front end in a browser. You should be able to see
the chart populated as before.

1. In index.js add a call to `seneca.client()` to allow messages to be sent from the frontend to the serializer
2. Remove the `readRandom` function and the `i` variable
3: Make a call to `seneca.act()` in setInterval, `({role: 'serialize', cmd: 'read', sensorId: sensorId, start: start, end: end}`
4: In the `seneca.act` callback make a call to `handleRead()` passing in the data object from the callback

If you have wired everything up correctly you should see data streaming to the chart in the browser:

1. Run `docker ps -q | xargs docker stop` to stop all running containers
2. Run `docker-compose build` to rebuild all containers
3. Run `docker-compose up` to start all containers
4. Get your ip address with `docker-machine ip`
5. Point your browser to http://localhost:3000

[valid one]: ./services/serializer/serializer.js
