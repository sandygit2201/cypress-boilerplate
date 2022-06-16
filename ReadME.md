# Cypress-boilerplate
 Created this boilerplate project to help cypress beginners. Thanks to saucelabs for proving a platform to practice automation testing. 

## Steps to Run

- Checkout code from git [repo](git@github.com:sandygit2201/cypress-boilerplate.git)
- Make sure that node is already setup in your system. if not download node js form https://nodejs.org/en/download/ install it. 
- Run `npm install` to install node dependencies 
- Run `npm run cy:execute-scripts` to run scripts in local machine

## Push execution results to cypress dashboard
- Create a login in [cypress dashboard](https://dashboard.cypress.io/)
- Create a project and update proectId in `cypress.config.js`
- Add key details in execution command in `package.json`
- Run `npm run cy:execute-scripts-upload-results` to run tests in local and upload results to [cypress dashboard](https://dashboard.cypress.io/)