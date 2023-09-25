import Page from "./page";
import { browser } from "@wdio/globals";
import { $ } from "@wdio/globals";
import CartPageLocators from "../locators/cart.locators";

class CartPage extends Page {
  productNameCell(productName: string) {
    return $(CartPageLocators.productCell.replace("%s", productName));
  }

  productQuantity(productName: string) {
    return $(CartPageLocators.productQuantityInput.replace("%s", productName));
  }

  get totalPrice() {
    return $(CartPageLocators.totalPriceCell);
  }

  updateBtn(productName: string) {
    return $(CartPageLocators.productUpdateBtn.replace("%s", productName));
  }

  async setNewQuantity(productName: string, value: number) {
    await browser.pause(1000);
    await this.productQuantity(productName).setValue(value);
    await this.updateBtn(productName).click();
  }
}

export default new CartPage();
