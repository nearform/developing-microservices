# Step 2

This is the solution for the challenge in step 1. To run the frontend as a container:

1. `docker ps -q | xargs docker stop` stops all running containers
2. `cd frontend`
3. `./run.sh`
4. Open the url provided by the script

## Challenge

We are going to write a serializer microservice that records data points
to [influxdb](https://influxdb.com/), a time series database. We will
use a docker to do this.

The `step2` folder has a skeleton for the serializer service, your
challenge is to write a [Seneca](http://senecajs.org) handler to write
points to influxdb, see `services/serializer/serializer.js`.
