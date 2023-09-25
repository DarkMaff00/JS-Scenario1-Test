class CartPageLocators {
  totalPriceCell: string;
  productCell: string;
  productQuantityInput: string;
  productUpdateBtn: string;
  constructor() {
    this.totalPriceCell =
      "//div[@id='content']//div[@class='row']//table//tr[3]//td[2]";
    this.productCell =
      "//table[contains(@class,'table-bordered')]//a[text()='%s']";
    this.productQuantityInput =
      "//table[contains(@class,'table-bordered')]//a[text()='%s']//following::input[1]";
    this.productUpdateBtn =
      "//table[contains(@class,'table-bordered')]//a[text()='%s']//following::button[1]";
  }
}

export default new CartPageLocators();
