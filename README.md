## CBI Meetup - Journey of Containerization for Cloud-Native Apps
**Technology: node.js**
**DB: MySQL**

## ---------------------------------------

***This is containerized version of service.***


- To setup application - you will need to copy `env-example.txt` and create `.env` file in root directory and define following values
- Create a schema in MySQL `CREATE SCHEMA node_app_demo DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`


***Some useful Docker commands from my Mac installation***
- cd to application directory
- create `.env` file
- Build container: `docker build -t node_app_demo_v1 .`
- Start Container: `docker run -d -p 8080:8080 -v $PWD:/app --name node_app_demo node_app_demo_v1:latest`
- Container Logs: `docker logs -f node_app_demo`
- Restart App: `docker exec -it node_app_demo /app/restart.sh`
- Container login: `docker exec -it node_app_demo /bin/sh`
