FROM node
RUN npm set registry http://10.100.40.254:4873
ADD . /
RUN cd api && npm install --ignore-scripts
CMD node /api/index.js
