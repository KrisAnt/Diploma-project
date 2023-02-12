import {
  Element,
  ElementsService,
} from "../../framework/services/element-service";
import Page from "./page";

class LogInPage extends Page {
  constructor(path) {
    super(path);
  }
  public readonly emailField = ElementsService.getElement(
    "#navbar_username",
    Element.TextField
  );
  public readonly passwordField = ElementsService.getElement(
    "#navbar_password",
    Element.TextField
  );
  public readonly loginButton = ElementsService.getElement(
    ".loginblueButton1",
    Element.Button
  );
  public readonly profilePageUrl = "https://www.jefit.com/my-jefit/";

  public login(email: string, password: string) {
    this.emailField.type(email);
    this.passwordField.type(password);
    this.loginButton.click();
  }
}
export const Log = new LogInPage("https://www.jefit.com/login/");
