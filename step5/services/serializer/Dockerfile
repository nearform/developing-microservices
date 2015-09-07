FROM node
RUN npm set registry http://192.168.3.12:4873
ADD . /
RUN npm install
CMD node serializer.js

