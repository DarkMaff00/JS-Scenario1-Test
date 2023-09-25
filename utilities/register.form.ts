class RegisterForm {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  password: string;
  constructor(
    firstName: string,
    lastName: string,
    email: string,
    telephone: string,
    password: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.telephone = telephone;
    this.password = password;
  }
}

export default new RegisterForm(
  "Mark",
  "Oak",
  `mark${Math.random() * 1000}@oak.com`,
  "123 456 789",
  `${process.env.PASSWORD}`
);
