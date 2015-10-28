FROM node
RUN npm config set registry http://192.168.100.85:4873
ADD . /
RUN cd api && npm install --ignore-scripts
CMD node /api/index.js
