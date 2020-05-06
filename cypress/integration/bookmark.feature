# Use @integration if you want to test integrated features
# Use @smoketest if you want to test the most essential features
# Give your features tags such as @bookmark
@integration @smoketest @bookmark
Feature: Bookmarking
    # The Background repeats before each Scenario:

    # We clean the local storage to keep the browser clean
    # Accepting the cookies will prevent that its element
    # overlapps an element to be clicked
    # We clear the counter by opening and closing the bookmark
    Background: Visit an e-commerce portal
      Given I have a clean local storage
      When I visit the portal
      When I click accept the cookies
      When I click on the bookmark icon
      And I close the bookmark by clicking on the x-button
      Then I don't see the bookmark
      And I don't see the bookmark icon counter

    # Implementation is not finished, that why the test would fail
    # We add a @skip here and with the skip strategy, we let the test pass
    # in the CI/CD. The test will exit with status code 1,
    # once the test passes. It reminds you to remove the skip tag.
    @skip
    Scenario: Bookmarking
      When I browse to get an offer
      Then I see the bookmark button
      When I click on the bookmark button in a given position
        |  0  |
        |  6  |
        | 19  |
      And I see the bookmark icon counting 3
      When I click on the bookmark icon
      Then I see the bookmark frame
      And I have bookmarked 3 items