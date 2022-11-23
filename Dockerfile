FROM node:14-alpine
COPY my-project .
CMD npm run dev
EXPOSE 8080