import {
  Element,
  ElementsService,
} from "../../framework/services/element-service";
import Page from "./page";

class ExercisePage extends Page {
  constructor(path) {
    super(path);
  }
  public readonly newExerciseNameField = ElementsService.getElement(
    "#newename",
    Element.TextField
  );
  public readonly selectPartDropdown = ElementsService.getElement(
    "#selectpart",
    Element.Dropdown
  );
  public readonly selectRecordDropdown = ElementsService.getElement(
    "#select_recordtype",
    Element.Dropdown
  );
  public readonly createExButton = ElementsService.getElement(
    "#createcustomexercises input[class='statusblueButton']",
    Element.Button
  );
  public readonly myExercise = ElementsService.getElement(
    "//td[normalize-space()='my custom exercise']",
    Element.BaseElement
  );
  public readonly createExerciseTab = ElementsService.getElement(
    "[href='https://www.jefit.com/my-jefit/my-exercises/']",
    Element.BaseElement
  );
}
export const Exercise = new ExercisePage(
  "https://www.jefit.com/my-jefit/my-exercises/"
);
