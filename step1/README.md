# Step 1
This is the solution for the challenge in step 0:

1. Add a [valid Dockerfile][] to `/frontend`
2. Run `docker build -t frontend .` from the root folder
3. Run `docker run -p 3000:3000 -d frontend`
4. Get your ip address with `docker-machine ip`
5. Point your browser to http://localhost:3000

## Challenge
Right now, our web app's backend doesn't do much, all of the work to plot the graph happens on the
client; Lets change that. Since we require a real time feed for our data, we will use websocket-stream
and browserify. We have provided some addtional code in frontend/api/webStream.js that provides an emit
function.

1. Move the pumpData function from `./frontend/public/js/chart.js L73-L81` to `./frontend/api/index.js`
2. Wire up the pumpData function to the `webStream.emit()` function to emit random data to the client
3. Add `require('websocket-stream')` to `frontend/public/js/chart.js`
4. Add a `data` event handler to `./frontend/public/js/chart.js L54` to handle the data
5. In `frontend/public/js` run `npm install` to pull in the required modules on the front end
6. In `frontend/public/js` run `browserify chart.js -o bundle.js` and update index.html to include bundle.js instead of chart.js
7. Rebuild your container and run, just like in the last step

[valid Dockerfile]: ./frontend/Dockerfile
