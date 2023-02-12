import { visitFunctionBody } from "typescript";
import { CreateAccount } from "./create-account";

describe("Username field validation: negative", function () {
  let createAccount = new CreateAccount();
  test("Usernmae field in empty", function () {
    expect(createAccount.validateName("")).toBe("Name field can't be empty");
  });
  test("Username field contains only digits", function () {
    expect(createAccount.validateName("456789")).toBe(
      "Name field can't contain only numbers"
    );
  });
  test("Username field contains 2 characters", function () {
    expect(createAccount.validateName("Kr")).toBe(
      "Name field should have more then 3 characters"
    );
  });
  test("Username field contains 36 characters", function () {
    expect(
      createAccount.validateName("kkeeiirrooffhhhhhhhheeooddiishjeufloshrj")
    ).toBe("Name field has maximum 35 characters");
  });
});

describe("Email field validation : negative", function () {
  let createAccount = new CreateAccount();
  test("Email field is empty", function () {
    expect(createAccount.validateEmail("")).toBe("Email filed can't be empty");
  });
  test("Email has no '@' symbol", function () {
    expect(createAccount.validateEmail("kris_92.ru")).toBe(
      "Email should contain '@' symbol"
    );
  });
  test("Email starts with '@' symbol", function () {
    expect(createAccount.validateEmail("@kris_92.ru")).toBe(
      "Email should not start with '@' "
    );
  });
  test("Email contains more than omne '@' symbol", function () {
    expect(createAccount.validateEmail("Kristy_92@@.ru")).toBe(
      "Email should contain only one '@' symbol"
    );
  });
  test("Email has no '.' symbol", function () {
    expect(createAccount.validateEmail("kristy_92@inboxty")).toBe(
      'Email should contain "." symbol'
    );
  });
  test("Email ends with special symbol", function () {
    expect(createAccount.validateEmail("kristy_92@inbox.ru.")).toBe(
      "Email should not end with special symbols"
    );
  });
});

describe("Password field validation: negative", function () {
  let createAccount = new CreateAccount();
  test("Password field is empty", function () {
    expect(createAccount.validatePassword("")).toBe(
      "Password field can't be empty"
    );
  });
  test("Password has no spcial symbol", function () {
    expect(createAccount.validatePassword("123qweSDF")).toBe(
      "Password field should contain at least one special symbol"
    );
  });
  test("Password has no digits", function () {
    expect(createAccount.validatePassword("qweASDqwer!")).toBe(
      "Password field should contain at least one digit"
    );
  });
  test("Password has no upper-case letters", function () {
    expect(createAccount.validatePassword("123qweasd!")).toBe(
      "Password field should contain at least one Upper-Case character"
    );
  });
  test("Password has no lower-case letters", function () {
    expect(createAccount.validatePassword("123QWEASSD!")).toBe(
      "Password field should contain at least one lower-case character"
    );
  });
  test("Password has 7 characters", function () {
    expect(createAccount.validatePassword("Q!12wer")).toBe(
      "Password field should have minimum 8 characters"
    );
  });
});
