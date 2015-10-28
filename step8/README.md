# Step 7
This is the solution for the challenge in step 7:

1. Update your frontend/api/index.js file to match a [valid one][]
2. Run `docker ps -q | xargs docker stop` to stop all running containers
3. Run `docker-compose build` to rebuild all containers
4. Run `docker-compose up` to start all containers
5. Get your ip address with `docker-machine ip`
6. Point your browser to http://localhost:3000

You should see data flowing as before. Try applying a value of 500 to the actuator and you should see the chart jump.

[valid one]: ./frontend/api/index.js
