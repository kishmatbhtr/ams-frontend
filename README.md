# AMS-Main
Main repository to bind ams-backend, ams-frontend and create a docker based development environment

## Steps
1. Clone the repository
```
git clone git@github.com:kishmatbhtr/ams-main.git
```
2. Create environment file

> Create .env file in the root path of the project. Copy the content provided in env.example

3. Get the submodules recursively
```
 git submodule update --init --recursive
```
4. Switch to the master branch and fetch the latest changes
```
# dir -> ams-frontend
git checkout master
git pull origin master 

# dir -> ams-backend
git checkout master
git pull origin master 
```
5. Install docker and docker compose
```
# installs docker
sudo apt install docker.io

# installs docker compose
sudo curl -L "https://github.com/docker/compose/releases/download/1.28.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

# changes docker-compose permission to an executable
sudo chmod +x /usr/local/bin/docker-compose

# enable docker to be used other than superusers
sudo groupadd docker
sudo gpasswd -a $USER docker

```
6. Export Timeout env variables
```
export DOCKER_CLIENT_TIMEOUT=120
export COMPOSE_HTTP_TIMEOUT=120
```
7. Run docker as mentioned in makefile script
```
make dev
```
8. After successful docker build completion, visit ```localhost:3001``` for frontend,  ```localhost:8001``` for backend and ```127.0.0.1:9001``` to access MinIO console (Login credentials provided in .env file)
9.  To restart the running containers
```
make restart
```
10. To stop the running containers
```
make stop
```