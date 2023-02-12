export class BaseElement {
  constructor(private readonly selector: string) {}

  protected get element() {
    return $(this.selector);
  }
  protected get elements() {
    return $$(this.selector);
  }
  protected async waitForVisible() {
    const el = await this.waitForExists();

    await el.waitForDisplayed();
    return this.element;
  }
  async waitForExists() {
    await this.element.waitForExist();
    return this.element;
  }
  protected async waitForClickable() {
    const el = await this.waitForVisible();

    await el.waitForClickable();
    return this.element;
  }
  get text() {
    return this.waitForExists().then((el) => el.getText());
  }
  async clickOn() {
    await (await this.element).click();
  }

  async click() {
    const el = await this.waitForClickable();
    await el.click({ x: 2, y: 2 });
  }
  public getElementsCount() {
    return BaseElement.getElementsCount(this.selector);
  }

  public static getElementsCount(selector: string) {
    return $$(selector).length;
  }
  public static getElements(selector: string) {
    return $$(selector);
  }
}
