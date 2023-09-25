import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";

import HomePage from "../../pages/home.page";
import RegisterPage from "../../pages/register.page";
import AccountPage from "../../pages/account.page";
import {
  titles,
  messages,
  products,
  cartContent,
  prices,
} from "../../utilities/properties";
import RegisterForm from "../../utilities/register.form";
import SearchPage from "../../pages/search.page";
import WishListPage from "../../pages/wishList.page";
import ProductPage from "../../pages/product.page";
import CartPage from "../../pages/cart.page";

Given(/^User is on register page$/, async () => {
  await HomePage.open();
  // E-commerce home page is opened.
  await expect(await HomePage.getTitle()).toEqual(titles.homePage);

  // Click on My Account and Register
  await HomePage.goToRegisterPage();
  // User registration page is opened.
  await expect(await RegisterPage.getTitle()).toEqual(titles.registerPage);
});

When(/^User provided correct data in form$/, async () => {
  // User provided not all data
  await RegisterPage.firstNameField.setValue(RegisterForm.firstName);
  await RegisterPage.emailField.setValue(RegisterForm.email);
  await RegisterPage.passwordField.setValue(RegisterForm.password);
  await RegisterPage.submit();

  // Provacy Policy alert popped
  await expect(RegisterPage.warningAlert).toHaveText(
    messages.policyAlertMessage
  );
  // Input warning showed;
  await expect(RegisterPage.inputWarnings).toBeElementsArrayOfSize({ gte: 1 });

  //User provided all necessary data
  await RegisterPage.register(RegisterForm);
});

Then(/^Account has been created$/, async () => {
  await expect(RegisterPage.accountCreatedAlert).toHaveText(
    messages.accountCreatedMessage
  );

  // Click Continue Button
  await RegisterPage.confirmBtn.click();
  // Page with account details is opened
  await expect(await AccountPage.getTitle()).toEqual(titles.accountPage);
});

Given(/^User logged$/, () => true);

When(/^Click Add to Wish List button$/, async () => {
  // Insert “tab” to search and click Enter button
  await AccountPage.searchInShop("tab");
  // Search result page is opened.
  await expect(await SearchPage.getTitle()).toContain(titles.searchPage);
  // Tablets are listed
  await expect(SearchPage.searchedProductName).toHaveText(products.tablet);
  // Click Add to Wish List Button
  await SearchPage.addWishListButton.click();
});

Then(/^Items in wish list.$/, async () => {
  // Success message that product was added to the wish list is displayed.
  await expect(SearchPage.successAlert).toHaveTextContaining(
    messages.addedToWishListMessage
  );
  // Click wish list link from the success message.
  await SearchPage.wishListLink.click();
  // Wish List page is displayed.
  await expect(await WishListPage.getTitle()).toEqual(titles.wishListPage);
  // Samsung Galaxy Tab 10.1 is listed
  await expect(WishListPage.productOnWishList(products.tablet)).toExist();
});

When(/^Click Add to Cart button$/, async () => {
  await WishListPage.addToCartBtn(products.tablet).click();
  // Success message that product was added to the cart is displayed.
  await expect(WishListPage.successAlert).toHaveTextContaining(
    messages.addedSamsungToCartMessage
  );
  // On the main menu click Desktops and Mac
  await WishListPage.dropdownMenuOption("Desktops", "Mac").click();
  // All Mac Desktops are listed
  await expect(SearchPage.listedProduct).toHaveText(products.mac);
  // Click on iMac image
  await SearchPage.productImg(products.mac).click();
  await expect(await ProductPage.getTitle()).toEqual(products.mac);

  // In Quantity field provide number of iMacs: 3 and click add to cart button
  await ProductPage.setQuantity(3);
  await ProductPage.addButton.click();

  // Success message that product was added to the shopping cart is displayed
  await expect(ProductPage.successAlert).toHaveTextContaining(
    messages.addedMacToCartMessage
  );
});

Then(/^Items in cart$/, async () => {
  // Click Shopping cart button on the top right corner
  await ProductPage.topMenuOption("Shopping Cart").click();

  // Shopping cart is displayed
  await expect(await CartPage.getTitle()).toEqual(titles.cartPage);

  // All added products are listed, and the quantity is correct.
  Object.keys(cartContent).forEach(async (key) => {
    await expect(CartPage.productNameCell(key)).toExist();
    const actualQuantity = await CartPage.productQuantity(key).getValue();
    await expect(actualQuantity).toEqual(cartContent[key].toString());
  });

  // Total price is calculated properly
  await expect(CartPage.totalPrice).toHaveTextContaining(prices.totalPrice);

  // In quantity field next to iMac provide new number: 2. Click Update Button
  CartPage.setNewQuantity(products.mac, 2);

  // Success message that shopping cart was modified is displayed
  await expect(CartPage.successAlert).toHaveTextContaining(
    messages.updatedCartMessage
  );

  // // Quantity for IMacs is changed
  await expect(CartPage.productQuantity(products.mac)).toHaveValue("2");

  // Total price changed
  await expect(CartPage.totalPrice).toHaveTextContaining(prices.updatedPrice);

  // Click on My Account and Logout
  await CartPage.logout();
  // Page with information taht account was logged out is displayed.
  await expect(await CartPage.getTitle()).toEqual(titles.logoutPage);
});
