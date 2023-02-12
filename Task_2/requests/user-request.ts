import superagent from "superagent";
import { BaseRequest } from "./base-request";
import { RequestTypes } from "./request-types";

export class UserRequest extends BaseRequest {
  private constructor(
    public readonly requestType: RequestTypes,
    protected readonly requestPath: string,
    public readonly requestHeader?: object,
    public readonly requestData?: object
  ) {
    super(requestType, requestPath, requestHeader, requestData);
  }
  public static createListOfUsers(orderData: object, path: string) {
    return new UserRequest(
      RequestTypes.post,
      `user/${path}`,
      {
        "Content-Type": "application/json",
      },
      orderData
    );
  }
  public static createUser(userData: object, path: string) {
    return new UserRequest(
      RequestTypes.post,
      `user/${path}`,
      {
        "Content-Type": "application/json",
      },
      userData
    );
  }

  public static getUserByName(userName: string) {
    return new UserRequest(RequestTypes.get, `user/${userName}`);
  }
  public static logUser(login: string, password: string) {
    return new UserRequest(
      RequestTypes.get,
      `user/login?username=${login}&password=${password}`
    );
  }
  public static logOutUser(path: string) {
    return new UserRequest(RequestTypes.get, `user/${path}`);
  }
  public static updateUser(userData: object, userName: string) {
    return new UserRequest(
      RequestTypes.put,
      `user/${userName}`,
      {
        "content-type": "application/json",
      },
      { userData: userData }
    );
  }
  public static deleteUser(userName: string) {
    return new UserRequest(RequestTypes.delete, `user/${userName}`);
  }

  send() {
    switch (this.requestType) {
      case RequestTypes.get:
        return superagent.get(this.url);
        break;
      case RequestTypes.post:
        return superagent
          .post(this.url)
          .send(this.requestData)
          .set(this.requestHeader);
      case RequestTypes.put:
        return superagent
          .put(this.url)
          .send(this.requestData)
          .set(this.requestHeader);
        break;
      case RequestTypes.delete:
        return superagent.delete(this.url).send(this.requestData);
        break;
    }
  }
}
