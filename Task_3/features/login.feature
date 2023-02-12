Feature: Log in

  Scenario: As a user, I can log in intp account
    Given I am on the log in page
    When I type "k@mail.ru" into email field
    When I type "123qweASD!" into password field
    When I click on Log in button
    Then I am redirected to user profile page
