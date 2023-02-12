import {
  Element,
  ElementsService,
} from "../../framework/services/element-service";
import Page from "./page";

class WorkoutPage extends Page {
  constructor(path) {
    super(path);
  }
  public readonly copyTemplateButton = ElementsService.getElement(
    "#copy-template",
    Element.Button
  );
  public readonly confirmButton = ElementsService.getElement(
    "[type='button'][class='btn btn-primary']",
    Element.Button
  );
  public readonly exercise = ElementsService.getElement(
    "#add-exercise626",
    Element.BaseElement
  );
  public readonly elementInList = ElementsService.getElement(
    "#muscle11",
    Element.BaseElement
  );
}
export const Workout = new WorkoutPage("https://www.jefit.com/build-routine/");
