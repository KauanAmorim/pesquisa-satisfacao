# Development mode
FROM node:20.10.0-alpine

RUN apk add --no-cache bash

# Create app directory, this is in our container/in our image
WORKDIR /home/node/app

# Bundle app source
COPY . .

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
RUN npm i -g npm
RUN npm i -g typeorm
RUN npm run build
EXPOSE 3000


CMD [ "npm", "run", "start:prod" ]
