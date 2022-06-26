# Front-end UI Tech-stack Insights

## About

- Project developed to showcase and demo the core UI technology stack - HTML, CSS and JavaScript.

## Dev. Notes

### Docker Desktop config for local development

- in Docker Desktop -> Settings -> Resources
  - CPUs: 4
  - Memory: 8.00 GBs

### File structure

- File Structure based on `paulAlexSerban/pbanf@^1.0.0`

## Start Development
- `npm run install:root` - install root devDependencies
- `npm run install:all` - install all build dependencies in all sub-projects
- `npm run lint:all` - lint code
- `npm run test:all` - test code
- `npm run build:all` - build all sub-projects
- `npm run start:compose:all` - start docker compose containers
- `npm run test:containers` - test all docker containers with curl for response

## Useful Local Development URLs

- [traefik dashboard](http://localhost:8080/dashboard)
- [technical-documentation](https://technical-documentation-ui-techstack-insights.localhost/)
