FROM node:latest
WORKDIR /app
COPY  package.json ./
RUN npm i
COPY LinearSalto.js /app/
EXPOSE 3500
CMD [ "node", "LinearSalto.js" ]