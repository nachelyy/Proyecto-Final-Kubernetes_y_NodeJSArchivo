FROM node:latest
WORKDIR /app
COPY  package.json ./
RUN npm i
COPY BurbujaBinaria.js /app/
EXPOSE 3505
CMD [ "node", "BurbujaBinaria.js" ]