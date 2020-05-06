# Cypress and Cucumber

We are trying to achieve a feature based user story. We are basically re-using some parts of the story.

To get familiar with Cucumber read the following:

## [Everyone can read and write Gherkin](https://cucumber.io/docs/gherkin/reference/)

The Gherkin syntax makes it very easy to read for non-developers what we are actually teasting.

### TDD
We have the possibilty to setup test driven development by defining our steps here first.

### Can my PO write Gherkin steps?
Yes!
But maybe, you refine them, when you implement them.

``` gherkin
Feature: Integration Page

Scenario: Checking out the wishlist for the first time
  When I visit Google
  When I click the search bar
  Then it should be highlighted
```
Instead of breaking a job by not defining a step definition, we create a placeholder for the step definition and return "skipped". This way the step is simply being skipped and the job continious.

``` javascript
When(/^I visit the Google$/, () => {
  return "skipped";
});
```

## Working with Cypress

Create a .feature file under the integration folder, which is a default name from Cypress. You can also create a folder inside the integration to organize your feature tests.

In the same support/step_definitions, create your step definitions which are available globally.

[Get started with Cypress here.](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Add-a-test-file)