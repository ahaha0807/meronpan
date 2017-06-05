#!/bin/sh

echo '[INFO]Bundler Install'
gem install bundler
echo '[INFO]Server dependencies install'
bundle install

cd ./public/
echo '[INFO]Front dependencies install'
npm install
echo '[INFO]Front compile start'
npm run build
echo '[INFO]Front compile finish!'

cd ../
echo '[INFO]Server start!'
echo '[INFO]Please access "http://localhost:4567"'
ruby main.rb