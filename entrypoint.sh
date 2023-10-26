#!/bin/sh

# Entrypoint helps developers to run any ad-hoc commands or flows that are essential to run cotnainer
# ex. entrypoint can be used to pull some assets from S3 or external storage based on application environmen before starting application
# aws s3 --region "us-west-1" cp s3://<bucket_name>/env.txt /app/.env

cd /app

# In development mode, we would like to update npm packages every time we update package.json (without actually re-building image)
npm install

# You can manually also run from inside container once.
# npx sequelize-cli db:migrate

# Start the node app with PM2 runtime Process Manager (PM) for node
pm2-runtime server.js
