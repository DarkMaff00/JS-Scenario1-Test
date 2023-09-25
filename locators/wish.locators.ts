class WishListPageLocators {
  productOnWishList: string;
  addToCartBtn: string;
  constructor() {
    this.productOnWishList = "//div[@id='content']//a[text()='%s']";
    this.addToCartBtn = "//a[text()='%s']//following::button[1]";
  }
}
export default new WishListPageLocators();
