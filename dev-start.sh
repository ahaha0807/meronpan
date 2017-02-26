#!/bin/sh

cd ./public/
echo '[INFO] Compile Start'
npm run build
echo '[INFO] Compile Finish'
cd ../
echo '[INFO] Server Start'
ruby main.rb