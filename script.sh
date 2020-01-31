#!/bin/bash
sudo apt-get update -y

sudo apt install docker.io -y

mkdir mygitstuff
cd mygitstuff

git clone --single-branch --branch master https://github.com/lukeharrison95/DartsBuddy-Front-End.git

sudo systemctl start docker
sudo systemctl enable docker
sudo setfacl -m user:ubuntu:rw /var/run/docker.sock
sudo usermod -a -G docker $USER




cd ~/mygitstuff/DartsBuddy-Front-End/static

docker network create projectnetwork

docker build -t myfrontendimg .
docker run --network projectnetwork --restart unless-stopped -d -p 80:80 --name backendcont myfrontendimg 
