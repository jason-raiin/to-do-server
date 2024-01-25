FROM node:18-alpine as build
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 1337
CMD ["node", "app.js"] 