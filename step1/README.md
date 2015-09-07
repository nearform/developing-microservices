# Step 1

This is the solution for the challenge in step 0. To run the frontend as a container:

1. docker build -t frontend .
2. docker run -p 3000:3000 -d frontend
3. docker-machine ip
4. point your browser to the docker machine ip address, you should now see the application
   running in your container

## Challenge

Add socket.io and move the random point generation to the backend and
stream it to the browser.
Rebuild your container and deploy it.
