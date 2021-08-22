FROM node:alpine

WORKDIR /usr/src/app
COPY . /usr/src/app
RUN yarn install

RUN yarn build

EXPOSE 3000

ENTRYPOINT ["yarn"]
