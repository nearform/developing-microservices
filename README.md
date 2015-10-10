![nearform](https://rawgit.com/mcollina/enterprise-iot-systems-with-mqtt-and-node/master/src/images/nearform.svg)

# Developing Microservices

This workshop will walk you through creating a simple live fed graph
using a Microservices architecture in node.js.

## The app
The app your are building is a sensor fed chart that provides realtime
data from a dummy sensor. This 'app' is broken down into a number of
individually deployed containers, each with it's own well define concern.

### Frontend
A simple web app that uses JQuery, Rickshaw charts, and Socket.io to show
a realtime graph of data being emitted by our sensor. This app has an API
which is included in the same microservice who's sole job is to talk to
and read from other microservices.

### Actuator
A small microservice that causes reads on the sensor based on an offset.

### Sensor
A dummy temperature sensor that sends out variying values based on what it
receives from the actuator.

### Serialisation
A service that handles reads and writes in serial fashion to the database. Uses
Socket.io to update the web app and thus the graph, in real time.

### Broker
A robust messaging layer build for IoT based devices. We use this to wire up
the actuator, serializer and sensor in a loosely coupled fashion.

### Influx
A database in a container that the serialiser uses for robust storage of data.

## The libraries

### Rickshaw Charts
A charting library for the web.

http://code.shutterstock.com/rickshaw/

### Express
A HTTP Web server library.

http://expressjs.com/

### Socket.io
A socket based library for realtime communication to the browser.

http://socket.io/

### Seneca
A pattern matching Microservices library.

http://senecajs.org/

### Mosca / MQTT
An MQTT broker that enables robust message, particularly suited to IoT.

https://github.com/mcollina/mosca

### InfluxDb
A time series database particularly suited to time sensitive data.

https://influxdb.com/

### Docker
A container engine.

https://www.docker.com

## Setting up
To complete this workshop you will need both the offical node image
as well as the influxDb image. These can be pulled from Docker Hub
or via a usb key if applicable.

##### 1 - `docker-machine start default`
Start your default machine

##### 2 - `eval "$(docker-machine env default)"`
Add the correct env variables to your shell

##### 3 - `docker ps`
Confirm that docker is available to use.

##### 4 - `docker import node.tar node`
Import the offical node image.

##### 5 -`docker import influx.tar tutum/influxdb`
Import the influx db image.

##### 6 - `docker images`
Confirm that you have both influx and node.

## Docker command cheatsheet
We have included a set of common commands for docker and docker machine, including
a short decscription of what they do below.

##### `eval "$(docker-machine env NAME)"`
Sets up your current shell with the variables from `docker-machine env NAME`.

##### `docker import < FILENAME`
Imports a tarball (or other file) image into docker. 

##### `docker ps`
Lists all of your containers.

##### `docker images`
Lists all of your images, these are the building blocks for your containers.

##### `docker-machine start NAME`
Starts your docker virtual machine (only applicable to non Linux).

##### `docker-machine stop NAME`
Stops your docker virtual machine (only applicable to non Linux).

##### `docker-machine env NAME`
Lists the needed ENV variables needed to connect to your virtual machine.

##### `eval "$(docker-machine env NAME)"`
Sets up your current shell with the variables from `docker-machine env NAME`.

##### `docker-machine ip`
Will return the ip address your docker machine is running on.

##### `docker ps -q | xargs docker stop`
Will stop all running containers based on the list from `docker ps`.

##### `docker-compose build`
Will compose your services together based off a root _docker-compose.yml_ file.

##### `docker-compose up`
Runs your composed services (asumming you are in the correct directory.

For a full cheatsheet on docker please see the [Docker Cheat Sheet][] repo.

## Need Help

- @mcollina
- @pelger
- @mcdonnelldean
- @davidmarkclem

[Docker Cheat Sheet]: https://github.com/wsargent/docker-cheat-sheet
