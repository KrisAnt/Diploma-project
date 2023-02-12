import { Element, ElementsService } from "../../framework/services/element-service";
import Page from "./page";

class ProfilePage extends Page {
  constructor(path) {
    super(path);
  }
  public readonly weightRadiobutton = ElementsService.getElement("input[value='1']",Element.Radiobutton);
  public readonly hightInputField = ElementsService.getElement("#heightinput",Element.TextField);
  public readonly weightInputField = ElementsService.getElement("#weightinput",Element.TextField);
  public readonly genderRadiobutton = ElementsService.getElement("input[value='F']",Element.Radiobutton);
  public readonly saveSttingsButton = ElementsService.getElement(".statusblueButton",Element.Button);
  public readonly profileLink = ElementsService.getElement(".mb-0 a",Element.BaseElement);
  public readonly aboutMe = ElementsService.getElement(".aboutmeBox",Element.BaseElement);

}

export const Profile = new ProfilePage(
  "https://www.jefit.com/my-jefit/profile/"
);
