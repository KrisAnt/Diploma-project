import { Given, When, Then } from "@wdio/cucumber-framework";
import { Exercise } from "../pageobjects/exrcise-page";
import { Log } from "../pageobjects/login-page";



Given(
  /^user logged in with "(.*)" email and "(.*)" password$/,
  async (email: string, password: string) => {
    await Log.open();
    await Log.login(email, password)}
);
Given(
  /^I click on Create custom exercise button$/,
  async () => await Exercise.createExerciseTab.click()
);
When(
  /^I type "(.*)" into exercise name field$/,
  async (name: string) => await Exercise.newExerciseNameField.type(name)
);
When(
  /^I select "(.*)" and "(.*)" in Major Muscle Group selector$/,
  async (attribute: string, value: string) =>
    await Exercise.selectPartDropdown.select(attribute, value)
);
When(
  /^I select "(.*)" and "(.*)" in Record type dropdown$/,
  async (attribute: string, value: string) =>
    await Exercise.selectRecordDropdown.select(attribute, value)
);
When(/^I click on create exercise button$/, async () =>
  await Exercise.createExButton.click()
);
Then(
  /^I see new crested exercise$/,
  async () => await expect(Exercise.myExercise.waitForExists()).toExist()
);
