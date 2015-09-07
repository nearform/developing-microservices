FROM node
RUN npm set registry http://192.168.3.12:4873
ADD . /
RUN cd api && npm install
CMD node /api/index.js
