# Step 6

This is the solution for the challenge in step 5.
To run the microservices as a container:

1. `docker ps -q | xargs docker stop` stops all running containers
2. `docker-compose build`
3. `docker-compose up`

Test the application like previous steps, you should now be able to read
data from the front end container

1. `docker exec -ti frontend /bin/bash`
4. `curl -X POST -d "{\"role\": \"serialize\", \"cmd\": \"read\", \"sensorId\": \"1\", \"start\": 1441400000000, \"end\": 1541497000671}" http://serializer:3001/act  --header "Content-Type:application/json"`

## Challenge

Your challenge is to wire the data reader up to the front end. To do this you will need to replace the radom value
generator in the frontend/api/index.js with a call to read data from the serializer service. Once you have the code
completed, restart the system using docker-compose and open the front end in a browser. You should be able to see
the chart populated as before.

