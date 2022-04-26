FROM node:14.17.6-alpine

WORKDIR /usr/src/test

COPY package*.json ./

RUN npm install

COPY . .

RUN apk update && apk add curl

EXPOSE 8080

CMD ["node","app.js"]