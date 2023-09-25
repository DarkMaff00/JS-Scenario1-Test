import Page from "./page";
import { $, $$ } from "@wdio/globals";
import SearchLocators from "../locators/search.locators";

class SearchPage extends Page {
  get searchedProductName() {
    return $(SearchLocators.searchProductTitle);
  }

  get addWishListButton() {
    return $(SearchLocators.addWishListBtn);
  }

  get wishListLink() {
    return $(SearchLocators.wishListLink);
  }

  get listedProduct() {
    return $(SearchLocators.listedProductsTitles);
  }

  productImg(productName: string) {
    return $(SearchLocators.productImg.replace("%s", productName));
  }
}

export default new SearchPage();
