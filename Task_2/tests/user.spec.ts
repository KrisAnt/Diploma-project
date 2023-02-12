import superagent from "superagent";
import { UserRequest } from "../requests/user-request";

describe("User api tests", function () {
  test("Create new user", async () => {
    const request = UserRequest.createUser(
      {
        id: 2,
        username: "kris",
        firstName: "kris",
        lastName: "antonava",
        email: "kr_92@inbox.ru",
        password: "123",
        phone: "+2345",
        userStatus: 2,
      },
      ""
    );
    const response = await request.send();
    expect(response.status).toBe(200);
  });
  test("Create list of users", async () => {
    const request = UserRequest.createListOfUsers(
      [
        {
          id: 15,
          username: "stkri",
          firstName: "sqwe",
          lastName: "we",
          email: "lkdmf",
          password: "sdf",
          phone: "s134",
          userStatus: 5,
        },
      ],
      "createWithArray"
    );
    const response = await request.send();
    expect(response.status).toBe(200);
  });
  test("Update user", async () => {
    const request = UserRequest.updateUser(
      {
        id: 2,
        username: "kristina",
        firstName: "ant",
        lastName: "string",
        email: "string",
        password: "string",
        phone: "string",
        userStatus: 0,
      },
      "kris"
    );
    const response = await request.send();
    expect(response.status).toBe(200);
  });
  test(" User log into system", async () => {
    const request = UserRequest.logUser("kristy", "password");
    const response = await request.send();
    expect(response.status).toBe(200);
  });
  test("User is log out of system", async () => {
    const request = UserRequest.logOutUser("logout");
    const response = await request.send();
    expect(response.status).toBe(200);
  });
  test("Delete user from system", async () => {
    const request = UserRequest.deleteUser("kris");
    const response = await request.send();
    expect(response.status).toBe(200);
  });
});
