FROM node:18-alpine AS builder

WORKDIR /front

COPY package*.json ./

RUN npm install

COPY . . 

RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /front

COPY --from=builder /front/next.config.js ./next.config.js
COPY --from=builder /front/public ./public
COPY --from=builder /front/.next ./.next
COPY --from=builder /front/node_modules ./node_modules

COPY .env ./env

EXPOSE 3001

# CMD ["tail", "-f", "/dev/null"]
CMD ["npm", "run", "start"]