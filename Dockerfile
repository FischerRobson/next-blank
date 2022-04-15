FROM node:17-alpine
LABEL maintainer="FischerNZ"
LABEL email="fischerrobson@gmail.com"
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD npm run dev