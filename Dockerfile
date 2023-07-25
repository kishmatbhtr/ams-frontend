FROM node:alpine

WORKDIR /front

COPY package*.json ./

COPY . .

RUN npm install

RUN npm run build

RUN npm run start

EXPOSE 3000