# Step 0
Included in this step is a dummy representation of the front end microservice we will be using throughout this workshop. Right now, this front end can be ran as a simple in process app,

1. `cd frontend/api`
2. `npm install`
3. `node index.js`
4. Go to http://localhost:3000

## Challenge
Your first challenge is to dockerize this service so that we can run it as a container. Dockerizing a service is as simple as adding a file named `Dockerfile` with a number commands which docker will need to build a container. 

The steps to complete this challenge are:

1. Create a file named `Dockerfile` in the `./step0/frontend` folder.
2. Add a `FROM` command specifying the `node` as the base image.
3. Add an `ADD` command specifying the current working directory.
4. Add a `RUN` command that runs `npm install`, make sure this runs from the correct directory.
5. Add a `CMD` command to run the front end just as you would from a terminal window.

__HINT:__ Use the [Dockerfile reference][] to look at a sample of each of the above commands

If your `Dockerfile` is correct you should be able create and run a valid container using the steps below:

1. Run `docker build -t frontend .`
2. Run `docker run -p 3000:3000 -d frontend`

Finally to access your running containerized service in the browser you will first need to find the IP address your docker virtual machine is running on. __NOTE:__ if you are running on Linux your IP address is simply localhost as docker runs natively on Linux and not in a virtual machine.

1. Run `docker-machine ip`
2. Use the returned ip address along with the port `3000` to access the service

[Dockerfile reference]: https://docs.docker.com/reference/builder/
