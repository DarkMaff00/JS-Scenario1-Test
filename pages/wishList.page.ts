import Page from "./page";
import { $ } from "@wdio/globals";
import WishListPageLocators from "../locators/wish.locators";

class WishListPage extends Page {
  productOnWishList(productName: string) {
    return $(WishListPageLocators.productOnWishList.replace("%s", productName));
  }

  addToCartBtn(productName: string) {
    return $(WishListPageLocators.addToCartBtn.replace("%s", productName));
  }
}

export default new WishListPage();
