import Page from "./page";
import { $, $$ } from "@wdio/globals";
import { browser } from "@wdio/globals";
import RegisterPageLocators from "../locators/register.locators";
import RegisterForm from "../utilities/register.form";

class RegisterPage extends Page {
  get firstNameField() {
    return $(RegisterPageLocators.firstNameField);
  }

  get lastNameField() {
    return $(RegisterPageLocators.lastNameField);
  }

  get emailField() {
    return $(RegisterPageLocators.emailField);
  }

  get telephoneField() {
    return $(RegisterPageLocators.telephoneField);
  }

  get passwordField() {
    return $(RegisterPageLocators.passwordField);
  }

  get confirmPasswordField() {
    return $(RegisterPageLocators.passwordConfirmField);
  }

  get acceptPolicyCheckBox() {
    return $(RegisterPageLocators.privacyCheckBox);
  }

  get continueBtn() {
    return $(RegisterPageLocators.continueBtn);
  }

  get warningAlert() {
    return $(RegisterPageLocators.warningAlert);
  }

  get accountCreatedAlert() {
    return $(RegisterPageLocators.accountCreatedMessage);
  }

  get confirmBtn() {
    return $(RegisterPageLocators.confirmBtn);
  }

  get inputWarnings() {
    return $$(RegisterPageLocators.inputWarnings);
  }

  async register(data: typeof RegisterForm) {
    await this.firstNameField.setValue(data.firstName);
    await this.lastNameField.setValue(data.lastName);
    await this.emailField.setValue(data.email);
    await this.telephoneField.setValue(data.telephone);
    await this.passwordField.setValue(data.password);
    await this.confirmPasswordField.setValue(data.password);
    await this.acceptPolicyCheckBox.click();
    await this.continueBtn.click();
  }

  async submit() {
    await this.continueBtn.click();
    await browser.pause(2000);
  }
}

export default new RegisterPage();
