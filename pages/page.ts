import { browser } from "@wdio/globals";
import { $ } from "@wdio/globals";
import { Key } from "webdriverio";
import BaseLocators from "../locators/base.locators";

export default class Page {
  /**
   *
   * @param option one of top menu bar options
   */
  topMenuOption(option: string) {
    return $(BaseLocators.topMenuOption.replace("%s", option));
  }

  /**
   *
   * @param option one of My Account dropdown options
   */
  myAccountOption(option: string) {
    return $(BaseLocators.myAccountOption.replace("%s", option));
  }

  get searchBar() {
    return $(BaseLocators.searchBar);
  }

  get successAlert() {
    return $(BaseLocators.successAlert);
  }

  menuBarOption(option: string) {
    return $(BaseLocators.menuBarOption.replace("%s", option));
  }

  dropdownMenuOption(option: string, dropdownOption: string) {
    this.menuBarOption(option).click();
    return $(
      BaseLocators.dropdownMenuOption
        .replace("%s", option)
        .replace("%d", dropdownOption)
    );
  }

  async goToRegisterPage() {
    await this.topMenuOption("My Account").click();
    await this.myAccountOption("Register").click();
  }

  async open() {
    await browser.url(`${process.env.URL}`);
    await browser.maximizeWindow();
  }

  async getTitle() {
    return await browser.getTitle();
  }

  async searchInShop(productName: string) {
    await this.searchBar.setValue(productName);
    await browser.keys(Key.Enter);
    await browser.pause(3000);
  }

  async logout() {
    await this.topMenuOption("My Account").click();
    await this.myAccountOption("Logout").click();
  }
}
