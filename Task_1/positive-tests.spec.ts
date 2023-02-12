import { CreateAccount } from "./create-account";

describe("Username field validation: positive", function () {
  let createAccount = new CreateAccount();
  test("Valid username is entered", function () {
    expect(createAccount.validateName("Kristina")).toBe("Validation passed");
  });
  test("Username with digits is entered", function () {
    expect(createAccount.validateName("Kristina95")).toBe("Validation passed");
  });
  test("Username with special symbols is entered", function () {
    expect(createAccount.validateName("Kristina!")).toBe("Validation passed");
  });
  test("Username lenght is 3 characters", function () {
    expect(createAccount.validateName("Kri")).toBe("Validation passed");
  });
  test("Username lenght is 35 characters", function () {
    expect(
      createAccount.validateName("Kristiiiiiiiiiiiiiiiiiiiiiiiiinnaaa")
    ).toBe("Validation passed");
  });
});
describe("Email field validation : positive", function () {
  let createAccount = new CreateAccount();
  test("Valid email is entered", function () {
    expect(createAccount.validateEmail("kris92@inbox.ru")).toBe(
      "Validation passed"
    );
  });
  test("Email in Upper-Case is entered", function () {
    expect(createAccount.validateEmail("KRIS_92@INBOX.RU")).toBe(
      "Validation passed"
    );
  });
  test("Email is enetered in diffrent register", function () {
    expect(createAccount.validateEmail("KrIsTy_92@InBoX.ru")).toBe(
      "Validation passed"
    );
  });
  test("Email field contains more than 1 special character", function () {
    expect(createAccount.validateEmail("Kr!is_92@inbox.ru")).toBe(
      "Validation passed"
    );
  });
  test("Email field contains a hyphen in the domain part", function () {
    expect(createAccount.validateEmail("Kris_92@inbox.ru")).toBe(
      "Validation passed"
    );
  });
});
describe("Password field  validation:positive", function () {
  let createAccount = new CreateAccount();
  test("Valid password is enetered", function () {
    expect(createAccount.validatePassword("3qweASD!")).toBe(
      "Validation passed"
    );
  });
  test("Email field has more than one character in Upper-case register", function () {
    expect(createAccount.validatePassword("1QWEaSD!")).toBe(
      "Validation passed"
    );
  });
  test("Email field contains more than one special symbol", function () {
    expect(createAccount.validatePassword("qwe1sdAA!!")).toBe(
      "Validation passed"
    );
  });
  test("Email field contains more than one number", function () {
    expect(createAccount.validatePassword("12qweER!")).toBe(
      "Validation passed"
    );
  });
});