Feature: Custom exercise

  Scenario: As a user, I can create my custom exercise
    Given user logged in with "k@mail.ru" email and "123qweASD!" password
    Given I click on Create custom exercise button
    When I type "my custom exercise" into exercise name field
    When I select "value" and "1" in Major Muscle Group selector
    When I select "value" and "0" in Record type dropdown
    When I click on create exercise button
    Then I see new crested exercise
