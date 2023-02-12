Feature: Checkout

  Scenario: As a user, I will see the error message while entering wrong card number
    Given I logged in with "k@mail.ru" email and "123qweASD!" password
    When I click on elite tab
    When I click on get elite now button
    When I type "1234123412341234" into card number field
    When I type "0226" into expiration date field
    When I type "920" into CVC field
    When I type "185 Berry st" into address field
    When I type "San Francisko" into city field
    When I type "CA" into state field
    When I type "94107" into ZIP field
    When I click on confirm purchase button
    Then I will see an error message
