FROM ubuntu:latest
FROM node:latest

# RUN apt-get update && apt-get upgrade
# RUN apt-get install xsel

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json ./

# add app
COPY . ./

RUN yarn install
RUN yarn css-build
RUN yarn build
RUN yarn global add serve

WORKDIR /app/build

# add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# start app
CMD ["serve", "-s", "build"]
