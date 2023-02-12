import { Given, When, Then } from "@wdio/cucumber-framework";
import { Log } from "../pageobjects/login-page";

Given(/^I am on the log in page$/, async () => await Log.open());
When(
  /^I type "(.*)" into email field$/,
  async (username: string) => await Log.emailField.type(username)
);
When(
  /^I type "(.*)" into password field$/,
  async (password: string) => await Log.passwordField.type(password)
);
When(/^I click on Log in button$/, async () => await Log.loginButton.click());
Then(/^I am redirected to user profile page$/, async () => {
  const url = await browser.getUrl();
  expect(url).toBe(Log.profilePageUrl);
});
