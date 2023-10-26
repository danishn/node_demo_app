## CBI Meetup - Journey of Containerization for Cloud-Native Apps
**Technology: node.js**
**DB: MySQL**

## ---------------------------------------

***This is containerized version of service.***


- To setup application - you will need to copy `env-example.txt` and create `.env` file in root directory and define following values


***Some useful Docker commands from my Mac installation***
- cd to application directory
- create `.env` file
- `docker build -t node_app_demo_v1 .` : Build container
- `docker run -d -p 8080:8080 -v $PWD:/app --name node_app_demo node_app_demo_v1:latest` : Start Container
- `docker logs -f node_app_demo` : Container Logs
- `docker exec -it node_app_demo /app/restart.sh` : Restart App:
- `docker exec -it node_app_demo /bin/sh` : Container login


## ---------------------------------------
***If you want to use DB connection***
- Update `.env` with Db connection details
- Update `server.js` to sync DB schema (switch between current Vs commented the code)
- Create a schema in MySQL `CREATE SCHEMA node_app_demo DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`
- When you run application - it will automatically create tables in the DB (schema defined in `/src/database/entities/*`)