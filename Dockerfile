FROM node:8.16.2

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]

#Below arg is used by label command.
ARG MANIFEST

#Provides build and source information.
#Use docker inspect to view.
LABEL damian.mock.ep=$MANIFEST
