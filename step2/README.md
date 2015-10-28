# Step 2

This is the solution for the challenge in step 1. `frontend/api/index.js` now has an interval timer
that sends data down the websocket stream each second. `frontend/public/js/code.js` has been updated 
to recieve this data. `bundle.js` is the browserifed version of code.js. `index.html` has been modified 
in order to include `bundle.js`. You can run this container in the following manner:

1. Update your index.js to match a [valid one][]
2. Use `docker ps -q | xargs docker stop` stops all running containers
3. Run `docker build -t frontend .` from the root folder
4. Run `docker run -p 3000:3000 -d frontend`
5. Get your ip address with `docker-machine ip`
6. Point your browser to http://localhost:3000

## Challenge

We are going to write a serializer microservice that records data points
to [influxdb](https://influxdb.com/), a time series database. We will
use a docker container to do this:

```
docker pull tutum/influxdb
docker run -d -p 8083:8083 -p 8086:8086 --expose 8090 --expose 8099 tutum/influxdb
```

The `step2` folder has a skeleton for the serializer service, your
challenge is to write a [Seneca](http://senecajs.org) handler to write
points to influxdb, see `services/serializer/serializer.js`.

All the interaction to influx has already been done for you in
`serives/serializer/influxUtil.js`.

Seneca uses [pattern matching]() to map requests to handlers, this is
the message example that you should expect:

```js
{
  role: 'serialize', // you need to match on this
  cmd: 'write', // and on this
  sensorId: 42,
  temperature: 16.0
}
```

Build and execute the serializer container and test it with the
following command:

```
curl -X POST -d "{\"role\": \"serialize\", \"cmd\": \"write\", \"sensorId\": \"1\", \"temperature\": 32}" http://`docker-machine ip default`:3001/act  --header "Content-Type:application/json"
```

You can check for added datapoints running the influx console:

```
docker exec -ti <containerID> /opt/influxdb/influx
```

and then:

```
use temperature;
select * from temperature;
```

