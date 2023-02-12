import { Given, When, Then } from "@wdio/cucumber-framework";
import { Log } from "../pageobjects/login-page";
import { Workout } from "../pageobjects/workout-page";

Given(
  /^logged in with "(.*)" email and "(.*)" password$/,
  async (email: string, password: string) => await Log.login(email, password)
);
Given(/^I am on the workout planning page$/, async () => await Workout.open());
When(
  /^I click on copy template button$/,
  async () => await Workout.copyTemplateButton.click()
);
When(
  /^I confirm the modal$/,
  async () => await Workout.confirmButton.click()
);
When(
  /^I select an exercise from the exercise list$/,
  async () => await Workout.exercise.click()
);
Then(
  /^I find this exercise in my list$/,
  async () => await expect(Workout.elementInList.waitForExists()).toBeDisplayed()
);
