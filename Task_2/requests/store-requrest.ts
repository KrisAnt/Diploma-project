import superagent from "superagent";
import { BaseRequest } from "./base-request";
import { RequestTypes } from "./request-types";

export class StoreRequest extends BaseRequest {
  private constructor(
    public readonly requestType: RequestTypes,
    protected readonly requestPath: string,
    public readonly requestHeader?: object,
    public readonly requestData?: object
  ) {
    super(requestType, requestPath, requestHeader, requestData);
  }

  public static placeOrder(orderData: object, path: string) {
    return new StoreRequest(
      RequestTypes.post,
      `store/order/${path}`,
      {
        "Content-Type": "application/json",
      },
      orderData
    );
  }

  public static findOrderById(orderId: number) {
    return new StoreRequest(RequestTypes.get, `store/order/${orderId}`);
  }

  public static inventories(path: string) {
    return new StoreRequest(RequestTypes.get, `store/${path}`);
  }
  public static deleteOrder(orderId: number) {
    return new StoreRequest(RequestTypes.delete, `store/order/${orderId}`);
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
