FROM node:10.15.3
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
ENTRYPOINT ["npm","start"]
