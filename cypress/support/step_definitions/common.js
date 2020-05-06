import { Given, When } from "cypress-cucumber-preprocessor/steps";

// ***********************************************************
// Here it start. Define your step definitions here.
// You can use a file with commononly used step definition, like this one
// or you can use differen .js files to define specific topics.
// All of the files are available globally for all feature files.
// ***********************************************************

When(/^I visit Google$/, () => {
  cy.visit(Cypress.env("URL"))
    .get("body").should("be.visible");
});

// You are able to clean local storage and cookies:
Given(/^I have a clean local storage$/, () => {
  cy.clearLocalStorage();
});

// Overlapping elements can disturb your tests.
// Try to close or to remove them.
When(/^I click accept the cookies$/, () => {
  cy.get(".cookies")
    .should("be.visible")
    .click()
    .wait(500);  
});