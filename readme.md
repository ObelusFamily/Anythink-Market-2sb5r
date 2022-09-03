# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

[Install Docker](https://docs.docker.com/get-docker/) (if not already installed)

Confirm Docker is installed by running the following commands in your terminal:
  - `docker -v`
  - `docker-compose -v`

Run `docker-compose up` from the project root directory to start up the frontend and backend

Confirm the backend is working by going to http://localhost:3000/api/ping in the browser

Confirm the frontend is working by going to http://localhost:3001/register and create a new user
