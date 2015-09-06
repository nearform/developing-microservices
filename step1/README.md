# Step 1

This is the solution for the challenge in step 0. To run the frontend as a container:

1. `docker ps -q | xargs docker stop` stops all running containers
2. `cd frontend`
3. `./run.sh`
4. Open the url provided by the script

## Challenge

Add socket.io and move the random point generation to the backend and
stream it to the browser.
Rebuild your container and deploy it.
