import { Then, When } from "cypress-cucumber-preprocessor/steps";
import objects from "../../fixtures/objects.json";

// ***********************************************************
// Here it start. Define your step definitions here.
// This is an example for a specific topic: Bookmarking.
// All of the files are available globally for all feature files.
// ***********************************************************

Then(/^I see the bookmark icon counting (\d+)$/, counter => {
  cy.get(objects.bookmark.mainButton)
    .first()
    .should("be.visible")
    .should("contain", counter);
});

When(/^I click on the bookmark icon$/, () => {
  cy.listenToRoutes(); // Initiates listening to routes
  cy.scrollTo(0, 0)
    .get(objects.bookmark.mainButton)
    .should("be.visible")
    .first()
    .click()
    // If a request is involved, then
    // rather wait with routes than add seconds
    // .wait(1300);
    .wait(["@myRoute"]);
});

Then(/^I see the bookmar frame$/, () => {
  cy.get(objects.bookmark.iframe).should("be.visible");
});

When(/^I close the bookmark by clicking on the x-button$/, () => {
  cy.get(objects.bookmark.close).should("be.visible")
    .click()
    .should("not.exist");
});

When(/^I close the bookmark by clicking on the backdrop$/, () => {
  cy.get(objects.bookmark.backdrop)
    .should("be.visible")
    // Sometime you need to force true, but this is
    // extremely bad practise. Try not to use it, as it
    // can make your test false positive
    .click(-50, -50, { force: true })
    .should("not.exist");
});

Then(/^I don't see the boomark frame$/, () => {
  cy.get(objects.bookmark.iframe).should("not.exist");
});

Then(/^I don't see the bookmark icon counter$/, () => {
  cy.get(objects.bookmark.count).should("not.be.visible");
});

Then(/^I see a completion feedback$/, () => {
  cy.getIframeBody(objects.bookmark.frameId)
    .find(objects.taskCompletion)
    .should("be.visible");
});