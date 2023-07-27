FROM node:18-alpine

WORKDIR /front

COPY package*.json ./

RUN npm install

COPY . .

# RUN npm run build

EXPOSE 3001

# CMD ["tail", "-f", "/dev/null"]
CMD ["npm", "run", "dev"]