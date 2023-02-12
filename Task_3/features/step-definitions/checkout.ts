import { Given, When, Then } from "@wdio/cucumber-framework";
import { Checkout } from "../pageobjects/checkout-page";
import { Log } from "../pageobjects/login-page";

Given(
  /^I logged in with "(.*)" email and "(.*)" password$/,
  async (email: string, password: string) => {
    await Log.open();
    await Log.login(email, password);
  }
);
When(/^I click on elite tab$/, async () => Checkout.eliteTab.click());
When(/^I click on get elite now button$/, async () =>
  Checkout.getEliteButton.click()
);
When(/^I type "(.*)" into card number field$/, async (cardNumber: string) => {
  await Checkout.cardNumberField.type(cardNumber);
});
When(
  /^I type "(.*)" into expiration date field$/,
  async (date: string) => await Checkout.exporationDateField.type(date)
);
When(
  /^I type "(.*)" into CVC field$/,
  async (cvc: string) => await Checkout.cvcField.type(cvc)
);
When(
  /^I type "(.*)" into address field$/,
  async (address: string) => await Checkout.addressField.type(address)
);
When(
  /^I type "(.*)" into city field$/,
  async (city: string) => await Checkout.cityField.type(city)
);
When(
  /^I type "(.*)" into state field$/,
  async (state: string) => await Checkout.stateField.type(state)
);
When(
  /^I type "(.*)" into ZIP field$/,
  async (zip: string) => await Checkout.xipField.type(zip)
);
When(
  /^I click on confirm purchase button$/,
  async () => await Checkout.confirmButton.click()
);
Then(
  /^I will see an error message$/,
  async () => await expect(Checkout.errorMessage).toBeDisplayed()
);
