# Front-end UI Tech-stack Insights

[![Traefik](https://img.shields.io/badge/Traefik-v2-green)](https://traefik.io/)
[![NodeJS](https://img.shields.io/badge/NodeJS-18.17.1-green)](https://nodejs.org/docs/latest-v14.x/api/)
[![Docker](https://img.shields.io/badge/Docker-20-blue)](https://docs.docker.com/release-notes/)
[![Nginx](https://img.shields.io/badge/Nginx-1.21.6-green)](https://www.nginx.com/)
[![Commitizen Friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Semantic Versioning](https://img.shields.io/badge/Semantic%20Versioning-2.0.0-green)](https://semver.org/spec/v2.0.0.html)

## About 📖

This project serves as a comprehensive guide and demo for understanding and implementing front-end UI technologies. It showcases the core UI technology stack including HTML, CSS, and JavaScript, supported by detailed technical documentation and live demo pages.

## Features 🌟

-   Comprehensive Technical Documentation 📚
-   Demo Pages for Hands-on Learning 🎮
-   Dockerized Environment for Easy Setup 🐳
-   Pre-configured Traefik and Nginx 🛠️

## Prerequisites 🛠️

-   Docker Desktop
-   NodeJS 18.17.1
-   NVM (Node Version Manager)

### Docker Desktop config for local development 🛠️

-   In Docker Desktop -> Settings -> Resources
    -   CPUs: 4
    -   Memory: 8.00 GB

## Getting Started 🚀

Follow these steps to set up the development environment.

1. **Node Version Setup**
    ```bash
    nvm use
    ```
2. **Install Dependencies and Initialize Environment**
    ```bash
    npm run install:root
    bash scripts/assets-install.bash
    bash scripts/frontend-static-website-install.bash
    bash scripts/frontend-living-style-guide-install.bash
    ```
3. **Start Docker Containers**
    ```bash
    bash scripts/docker-all-start.bash
    ```
4. **Process Assets**
    ```bash
    bash scripts/assets-process.bash
    ```
5. **Compile Living Style Guide for Development**
    ```bash
    bash scripts/frontend-living-style-guide-compile.bash development
    ```
6. **Build Static Website**
    ```bash
    bash scripts/frontend-static-website-build.bash
    ```

## Commands 📜

Refer to the below commands for easy navigation and operations.

### Dependency Management

-   `npm run install:root` - Install root dependencies.

### Docker Operations

-   `bash scripts/docker-all-start.bash` - Start all docker containers.
-   `bash scripts/docker-traefik-proxy-start.bash` - Start Traefik container.
-   `bash scripts/docker-static-website-start.bash` - Start static-website container.
-   `bash scripts/docker-all-stop.bash` - Stop all docker containers.
-   `bash scripts/docker-all-clean-stop.bash` - Stop and clean all docker containers.

### Assets and Frontend Operations

-   `bash scripts/assets-install.bash` - Install assets dependencies.
-   `bash scripts/assets-process.bash` - Process assets for the project.
-   `bash scripts/frontend-static-website-install.bash` - Install static website dependencies.
-   `bash scripts/frontend-static-website-build.bash` - Build static website.

### Living Style Guide Operations

-   `bash scripts/frontend-living-style-guide-install.bash` - Install Living Style Guide dependencies.
-   `bash scripts/frontend-living-style-guide-compile.bash` - Compile for specific environment (development/production).

## Useful Local Development URLs 🌐

-   [Traefik Dashboard](http://localhost:8080/dashboard)
-   [POC Site](https://nginx-fe-ui-techstack-insights.localhost/)

## Resources 📚

-   [Coding Style Guide](https://cssguidelin.es/)
