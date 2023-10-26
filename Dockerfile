# Base Image for this application
# In this case, image will be pulled from Docker Hub
FROM node:18

# Do the linux stuff to keep your image clean and updated
RUN apt-get clean
RUN apt-get update --fix-missing
RUN apt-get dist-upgrade -y

# Install if there are any custom plugins required on the container
# RUN apt-get install -y build-essential curl awscli
# RUN apt-get install -y imagemagick

# Setting up any container environments
ENV TZ="UTC"
# ENV TZ="Asia/Kolkata"

# Create app directory
# This will be your default directory where application code will be copied or executed
WORKDIR /app

# Bundle app source
# Basically copy everything from the directory where Dockerfile is into a working directory i.e. /app
COPY . /app

# Install app dependencies
RUN npm install
RUN npm install pm2 -g


# Finish container build with entrypoint
RUN chmod +x /app/entrypoint.sh

# Entrypoint for container defines startup flow for image when it is being run
ENTRYPOINT ["/bin/sh", "-c", "/app/entrypoint.sh"]