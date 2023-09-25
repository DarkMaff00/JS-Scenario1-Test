class SearchLocators {
  searchProductTitle: string;
  addWishListBtn: string;
  wishListLink: string;
  listedProductsTitles: string;
  productImg: string;
  constructor() {
    this.searchProductTitle = ".product-thumb .caption a";
    this.addWishListBtn = "//button[@data-original-title='Add to Wish List']";
    this.wishListLink = "//div[contains(@class,'alert-success')]//a[2]";
    this.listedProductsTitles = ".caption h4";
    this.productImg = "//img[@title='%s']";
  }
}

export default new SearchLocators();
