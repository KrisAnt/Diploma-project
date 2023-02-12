import { BaseElement } from "./base-element";

export class TextField extends BaseElement {
  async type(text: string) {
    const el = await this.waitForVisible();

    await el.addValue(text);
  }

  async clearAndType(text: string) {
    const el = await this.waitForVisible();

    await el.setValue(text);
  }
}
