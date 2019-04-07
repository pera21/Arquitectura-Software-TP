FROM node:10.15.3
RUN mkdir /app
WORKDIR /app
COPY app.js
COPY package.json
COPY package-lock.json

RUN npm install
ENTRYPOINT["node", "app.js"]