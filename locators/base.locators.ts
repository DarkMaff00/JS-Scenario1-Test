class BaseLocators {
  topMenuOption: string;
  myAccountOption: string;
  searchBar: string;
  successAlert: string;
  menuBarOption: string;
  dropdownMenuOption: string;
  constructor() {
    this.topMenuOption = "//div[@id='top-links']//a[contains(@title,'%s')]";
    this.myAccountOption = "//li[contains(@class,'dropdown')]//a[text()='%s']";
    this.searchBar = "//input[@name='search']";
    this.successAlert = ".alert-success";
    this.menuBarOption = "//ul[contains(@class,'navbar-nav')]//a[text()='%s']";
    this.dropdownMenuOption =
      "//a[text()='%s']//following::a[contains(text(),'%d')][1]";
  }
}

export default new BaseLocators();
