# msworkshop

This workshop will walk you through creating a simple live fed graph 
using a Microservices architecture in node.js.

## The App
The app your are building is a sensor fed chart that provides realtime 
data from a dummy sensor. This 'app' is broken down into a number of
individually deployed containers, each with it's own well define concern.

### Web app
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

### MQTT
A robust messaging layer build for IoT based devices. We use this to wire up
the actuator, serializer and sensor in a loosely coupled fashion.

### InfluxDB
A timeseries database that the serialiser uses for robust storage of data.

## Need Help

- @mcollina
- @pelger
- @mcdonnelldean
- @davidmarkclem



