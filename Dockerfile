FROM node:latest as node

WORKDIR /app

COPY package*.json ./

RUN npm install -g @angular/cli @angular-devkit/build-angular && npm install

EXPOSE 3000
EXPOSE 3001

CMD [ "npm", "start" ]