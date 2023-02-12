export class CreateAccount {
  validateEmail(email: string) {
    if (email === "") {
      return "Email filed can't be empty";
    } else if (!email.includes(".")) {
      return 'Email should contain "." symbol';
    } else if (email.endsWith(".")) {
      return "Email should not end with special symbols";
    } else if (!(email.indexOf("@") === email.lastIndexOf("@"))) {
      return "Email should contain only one '@' symbol";
    } else if ((email.startsWith("@"))) {
      return "Email should not start with '@' ";
    } else if (!(email.indexOf("@") < email.indexOf("."))) {
      return "'.' symbol should be after '@' ";
    } else if (email.length > 50) {
      return "Email field should not exceed 50 characters";
    } else if (!email.includes("@")) {
      return "Email should contain '@' symbol";
    } else return "Validation passed";
  }

  validateName(username: string) {
    const reg = new RegExp("[!@#$%^&*()]");
    if (username === "") {
      return "Name field can't be empty";
    } else if (!Number.isNaN(Number(username))) {
      return "Name field can't contain only numbers";
    } else if (username.length < 3) {
      return "Name field should have more then 3 characters";
    } else if (username.length > 35) {
      return "Name field has maximum 35 characters";
    } else return "Validation passed";
  }

  validatePassword(password: string) {
    const numbeReg = new RegExp("[0-9]");
    const lowReg = new RegExp("[a-z]");
    const upprReg = new RegExp("[A-Z]");
    const specialReg = new RegExp("[!@#$%^&*]");
    if (password === "") {
      return "Password field can't be empty";
    } else if (password.length < 8) {
      return "Password field should have minimum 8 characters";
    } else if (!(password.search(numbeReg) >= 0)) {
      return "Password field should contain at least one digit";
    } else if (!(password.search(lowReg) >= 0)) {
      return "Password field should contain at least one lower-case character";
    } else if (!(password.search(upprReg) >= 0)) {
      return "Password field should contain at least one Upper-Case character";
    } else if (!(password.search(specialReg) >= 0)) {
      return "Password field should contain at least one special symbol";
    } else return "Validation passed";
  }
}
