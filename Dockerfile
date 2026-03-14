FROM node:18

WORKDIR /app

COPY . .

RUN npm install --prefix server

EXPOSE 3000

CMD ["node","server/server.js"]
