Feature: Workout plan

Scenario: As a user, I can create my own workout plan
Given logged in with "k@mail.ru" email and "123qweASD!" password
Given I am on the workout planning page
When I click on copy template button
When I confirm the modal
When I select an exercise from the exercise list
Then I find this exercise in my list