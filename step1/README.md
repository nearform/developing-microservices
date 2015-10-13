# Step 1
This is the solution for the challenge in step 0. To run the frontend as a container,

1. Add a [valid Dockerfile][] to `/frontend`
2. Run `docker build -t frontend .` from the root folder
3. Run `docker run -p 3000:3000 -d frontend`
4. Get your ip address with `docker-machine ip`
5. Point your browser to http://localhost:3000

## Challenge
Right now, our web app's backend doesn't do much, all of the work to plot the graph happens on the
client; Lets change that. Since we require a real time feed for our data, we will use socket.io.

1. Add socket.io to `./frontend/api/index.js`
2. Move the pumpData function from `./frontend/public/js/chart.js L73-L81` to the above
3. Wire up the pumpData function to an `io.emit()` event to emit random data to the client
4. Add a socket.io `data` event to `./frontend/public/js/chart.js L54` to handle the data
5. Rebuild your container and run, just like in the last step

[valid Dockerfile]: ./frontend/Dockerfile
