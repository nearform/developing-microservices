FROM node
RUN npm config set registry http://192.168.100.85:4873
ADD . /
RUN npm install
CMD node serializer.js

