import Page from "./page";
import { $ } from "@wdio/globals";
import ProductPageLocators from "../locators/product.locators";

class ProductPage extends Page {
  get quantityField() {
    return $(ProductPageLocators.quantityField);
  }

  get addButton() {
    return $(ProductPageLocators.addToCartBtn);
  }

  async setQuantity(value: number) {
    await this.quantityField.setValue(value);
  }
}

export default new ProductPage();
