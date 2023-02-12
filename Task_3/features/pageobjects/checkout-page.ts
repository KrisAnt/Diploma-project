import {
  Element,
  ElementsService,
} from "../../framework/services/element-service";
import Page from "./page";

class CheckoutPage extends Page {
  constructor(path) {
    super(path);
  }

  public readonly cardNumberField = ElementsService.getElement(
    "#example2-card-number",
    Element.TextField
  );
  public readonly exporationDateField = ElementsService.getElement(
    "#example2-card-expiry",
    Element.TextField
  );
  public readonly cvcField = ElementsService.getElement(
    "#example2-card-cvc",
    Element.TextField
  );
  public readonly addressField = ElementsService.getElement(
    "#example2-address",
    Element.TextField
  );
  public readonly cityField = ElementsService.getElement(
    "#example2-city",
    Element.TextField
  );
  public readonly stateField = ElementsService.getElement(
    "#example2-state",
    Element.TextField
  );
  public readonly xipField = ElementsService.getElement(
    "#example2-zip",
    Element.TextField
  );
  public readonly confirmButton = ElementsService.getElement(
    "#submit-btn",
    Element.Button
  );
  public readonly errorMessage = ElementsService.getElement(
    " span[class='message']",
    Element.BaseElement
  );
  public readonly eliteTab = ElementsService.getElement(
    "#menu-item-15181 [href='https://www.jefit.com/elite/']",
    Element.Button
  );
  public readonly getEliteButton = ElementsService.getElement(
    ".pricing-table [href='https://www.jefit.com/elite/checkout.php']",
    Element.Button
  );

}

export const Checkout = new CheckoutPage(
  "https://www.jefit.com/elite/checkout.php"
);
