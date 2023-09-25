class RegisterPageLocators {
  firstNameField: string;
  lastNameField: string;
  emailField: string;
  telephoneField: string;
  passwordField: string;
  passwordConfirmField: string;
  privacyCheckBox: string;
  continueBtn: string;
  warningAlert: string;
  inputWarnings: string;
  accountCreatedMessage: string;
  confirmBtn: string;
  constructor() {
    this.firstNameField = "#input-firstname";
    this.lastNameField = "#input-lastname";
    this.emailField = "#input-email";
    this.telephoneField = "#input-telephone";
    this.passwordField = "#input-password";
    this.passwordConfirmField = "#input-confirm";
    this.privacyCheckBox = "//input[@name='agree']";
    this.continueBtn = "//input[@value='Continue']";
    this.warningAlert = ".alert-danger";
    this.inputWarnings = ".text-danger";
    this.accountCreatedMessage = "#content h1";
    this.confirmBtn = "//a[text()='Continue']";
  }
}

export default new RegisterPageLocators();
