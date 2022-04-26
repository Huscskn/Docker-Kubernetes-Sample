FROM node:14.10.0-alpine

WORKDIR /usr/src/test

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node","app.js"]