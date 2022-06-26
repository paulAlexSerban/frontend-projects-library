#!bin/bash 

# START Docker Compose Services
function startComposeProxy() {
  docker-compose --env-file config.env \
    --file docker/docker-compose.proxy.yml \
    up --detach --build
}

function startStaticTechnicalDocumentation () {
    docker compose --env-file config.env \
    --file docker/docker-compose.proxy.yml \
    --file docker/docker-compose.technical-documentation.yml \
    up --detach --build
}

# LINT

function lintLivingStyleGuide() {
  npm run --prefix frontend/living-style-guide lint
}

function lintJSComponentLibrary() {
  npm run --prefix frontend/js-component-library lint
}

# TEST

function testCurlTraefikContainer() {
  docker run --network container:traefik appropriate/curl -s --retry 10 --retry-connrefused http://localhost:8080/dashboard
}

function testCurlTechnicalDocumentationContainer() {
  docker run --network container:technical-documentation appropriate/curl -s --retry 10 --retry-connrefused http://technical-documentation
}

function testLivingStyleGuide() {
  npm run --prefix frontend/living-style-guide test
}

# STOP Docker Compose Services

function stopComposeProxy() {
  docker compose --env-file config.env \
    --file docker/docker-compose.proxy.yml \
    down --volumes --rmi all
}

function stopStaticTechnicalDocumentation() {
  docker compose --env-file config.env \
    --file docker/docker-compose.technical-documentation.yml \
    down --volumes --rmi all
}

function stopComposeAll() {
    docker compose --env-file config.env \
    --file docker/docker-compose.technical-documentation.yml \
    --file docker/docker-compose.proxy.yml \
    down --volumes --rmi all
    docker container prune -f
}

# INSTALL

function installSubPrjDevDependencies () {
  echo "🔧  Installing Living Style Guide 🔧 " 
  npm --prefix frontend/living-style-guide install
  echo "🔧  Installing JS Component Library 🔧 " 
  npm --prefix frontend/js-component-library install
  echo "🔧  Installing Static Technical Documentation 🔧 " 
  npm --prefix frontend/static/technical-documentation install
}

$1