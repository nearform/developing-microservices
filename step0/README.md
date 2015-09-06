# Step 0

Run the frontend as a process.

1. `cd frontend/api`
2. `npm install`
3. `node index`
4. Go to http://localhost:3000

## Challenge

Create a Dockerfile to run this in a container.

__USE the base node image `node`__.
We are caching this in the local registry, so we do not kill the
network.

Run the container, and you should be able to view your chart in the
browser.
