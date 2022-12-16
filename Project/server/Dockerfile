#FROM node:18
#WORKDIR /discord
#COPY package.json .
#RUN npm install
#COPY . .
#EXPOSE 4000
#CMD ["nodemon", "app.js"]


FROM node:18
WORKDIR /discord
COPY package.json .
RUN npm install
COPY . .
EXPOSE 4000
CMD ["npm","run", "server"]


