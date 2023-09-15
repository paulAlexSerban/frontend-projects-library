# Front-end UI Tech-stack Insights

## Tech-stack

[![Traefik](https://img.shields.io/badge/Traefik-v2-green)](https://traefik.io/)
[![NodeJS](https://img.shields.io/badge/NodeJS-14.19.1-green)](https://nodejs.org/docs/latest-v14.x/api/)
[![Docker](https://img.shields.io/badge/Docker-20-blue)](https://docs.docker.com/release-notes/)
[![Nginx](https://img.shields.io/badge/Nginx-1.21.6-green)](https://www.nginx.com/)
[![Commitizen Friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Semantic Versioning](https://img.shields.io/badge/Semantic%20Versioning-2.0.0-green)](https://semver.org/spec/v2.0.0.html)

## About

- Project developed to showcase and demo the core UI technology stack - HTML, CSS and JavaScript.

### Docker Desktop config for local development

- in Docker Desktop -> Settings -> Resources
  - CPUs: 4
  - Memory: 8.00 GBs

## Start Development Steps
1. `nvm use` - to set node version to `v14.19.1` as defined in `.nvmrc`
2. `npm run install:root && bash scripts/assets-install.bash && bash scripts/frontend-static-website-install.bash && bash scripts/frontend-living-style-guide-install.bash`
3. `bash scripts/docker-all-start.bash`
4. `bash scripts/assets-process.bash`
5. `bash scripts/frontend-living-style-guide-compile.bash development`
6. `bash scripts/frontend-static-website-build.bash`

## Commands

- `npm run install:root` - install root dependencies

- `bash scripts/docker-all-start.bash` - start all docker containers
- `bash scripts/docker-traefik-proxy-start.bash` - start traefik container
- `bash scripts/docker-static-website-start.bash` - start static-website container

- `bash scripts/docker-all-stop.bash` - stop all docker containers
- `bash scripts/docker-all-clean-stop.bash` - stop all docker container and clean leftovers

- `bash scripts/assets-install.bash` - install assets dependencies
- `bash scripts/assets-process.bash` - process assets to be used in the project

- `bash scripts/frontend-static-website-install.bash` - install static-website frontend project dependencies
- `bash scripts/frontend-static-website-build.bash` - build static-website frontend project dependencies

- `bash scripts/frontend-living-style-guide-install.bash` - install project dependencies
- `bash scripts/frontend-living-style-guide-compile.bash development` - compile for development environment
- `bash scripts/frontend-living-style-guide-compile.bash production` - compile for production environment

## Useful Local Development URLs

- [traefik dashboard](http://localhost:8080/dashboard)
- [poc](https://nginx-fe-ui-techstack-insights.localhost/)

## Resources

- [coding style guide](https://cssguidelin.es/)
