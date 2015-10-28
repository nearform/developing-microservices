FROM node
ADD . /
RUN npm config set registry http://192.168.100.85:4873
RUN cd api && npm install
CMD node /api/index.js
