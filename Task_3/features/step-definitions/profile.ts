import { Given, When, Then } from "@wdio/cucumber-framework";
import { Log } from "../pageobjects/login-page";
import { Profile } from "../pageobjects/profile-page";

Given(
  /^I is logged in with "(.*)" email and "(.*)" password$/,
  async (email: string, password: string) => await Log.login(email, password)
);
Given(/^I am on the profile page$/, async () => await Profile.open());
When(
  /^I select kg radoibutton$/,
  async () => await Profile.weightRadiobutton.click()
);
When(
  /^I type "(.*)" into height field$/,
  async (height: string) => await Profile.hightInputField.type(height)
);
When(
  /^I type "(.*)" into weight field$/,
  async (weight: string) => await Profile.weightInputField.type(weight)
);
When(
  /^I select female gender$/,
  async () => await Profile.genderRadiobutton.click()
);
When(
  /^I click on save settings button$/,
  async () => await Profile.saveSttingsButton.click()
);
When(
  /^I click on profile link$/,
  async () => await Profile.profileLink.click()
);
Then(
  /^I see info about myself$/,
  async () => await expect(Profile.aboutMe).toExist()
);
