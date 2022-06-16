#!bin/bash 

# START Docker Compose Services
function startComposeProxy() {
  docker-compose --env-file config.env \
    --file docker/docker-compose.proxy.yml \
    up --detach --build
}

function startComposeFsg() {
  npm run dev:frontend:fsg && docker compose --env-file config.env \
    --file docker/docker-compose.proxy.yml \
    --file docker/docker-compose.fsg.yml \
    up --detach --build
}

function startPrototype() {
    docker compose --env-file config.env \
    --file docker/docker-compose.proxy.yml \
    --file docker/docker-compose.prototype.yml \
    up --detach --build
}

function startWhoami() {
    docker compose --env-file config.env \
    --file docker/docker-compose.proxy.yml \
    --file docker/docker-compose.whoami.yml \
    up --detach --build
}


# STOP Docker Compose Services

function stopComposeProxy() {
  docker compose --env-file config.env \
    --file docker/docker-compose.proxy.yml \
    down --volumes --rmi all
}

function stopComposeFsg() {
  docker compose --env-file config.env \
    --file docker/docker-compose.fsg.yml \
    down --volumes --rmi all
}

function stopPrototype() {
  docker compose --env-file config.env \
    --file docker/docker-compose.prototype.yml \
    down --volumes --rmi all
}

function stopWhoami() {
  docker compose --env-file config.env \
    --file docker/docker-compose.whoami.yml \
    down --volumes --rmi all
}

function installSubPrjDevDependencies () {
  npm --prefix frontend/frontend-style-guide install
  npm --prefix frontend/static/prototype install
}

$1