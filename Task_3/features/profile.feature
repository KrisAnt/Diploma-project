Feature: User Profile

  Scenario: As a user, I can set up my profile
    Given I is logged in with "anonim@inbox.ru" email and "123qweASD!" password
    Given I am on the profile page
    When I select kg radoibutton
    When I type "170" into height field
    When I type "65" into weight field
    When I select female gender
    When I click on save settings button
    When I click on profile link
    Then I see info about myself

