#!/bin/bash
echo "server start"
rm -rf ../src
cd ../
yarn svgr
yarn genarate
nohup node bin/www >> /data/iconserver.log 2>&1 &