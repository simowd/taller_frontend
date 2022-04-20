FROM node:16.14

WORKDIR /usr/src/app

COPY . .

ENV REACT_APP_BACKEND_URL=http://localhost:3003

RUN npm install

CMD ["npm", "start"]