import { stringify } from "ts-jest";
import { BaseElement } from "./base-element";

export class Dropdown extends BaseElement {
  async select(attribute: string, value: string) {
    await this.element.selectByAttribute(attribute, value);
  }
}
