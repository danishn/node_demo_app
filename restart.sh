#!/bin/sh
# comment
GREEN='\033[0;32m'
NC='\033[0m'

printf "${GREEN} -----------------------------------------------------------\n"
printf "${GREEN} Listing PM2 processes...\n"
printf "${GREEN} ================= PM2 LIST ==========================\n"
pm2 list
printf "${GREEN} ================= Stopping current instance =============\n"
pm2 stop 0
printf "${GREEN} ================= Starting new instance =================\n"
pm2 start server.js

printf "${NC} ================= Logs =================\n"
