# Cypress-Cucumber setup for E2E testing

The step definitions are available for every feature.
Every step definition can be found under cypress/support/step_definitions.

## Gitlab CI/CD

This test contains a working Gitlab CI/CD configuration

## Prerequisites

- Git
- Node.js 12.x LTS: [Install Node.js on your local machine.](https://nodejs.org/en/download/)
- Setup an enrivonment variable given in the env.example

## How to run

Run via npm install and npm test:

```bash
npm i
```

and

```bash
npm run test

// Using tags
npm run test -- --env TAGS='@yourTag'
```

## Skip strategy
You can add a @skip tag to you test, if something is temporarily failing.
Once the test is passing, Cucumber will exit with a status code 1 to let us know, that the tests are not work in progress anymore.
```
npm run test -- --env TAGS='not @skip'
```


### Run tests in Cypress Dashboard for debugging
```bash
npm run cypress:open
```

### Run Cypress for a specific browser

Inside the Cypress dashboard, choose the browser.

For the terminal:
````
"cypress:chrome": "cypress run --browser chrome --headless",
`````
The browser must be installed, even inside a docker with the correct name.