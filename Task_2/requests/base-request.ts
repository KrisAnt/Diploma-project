import { RequestTypes } from "./request-types";

export abstract class BaseRequest {
  private readonly baseUrl = "https://petstore.swagger.io/v2/";
  protected constructor(
    public readonly requestType: RequestTypes,
    protected readonly requestPath: string,
    public readonly requestHeader?: object,
    public readonly requestData?: object
  ) {}

  get url() {
    return this.baseUrl + this.requestPath;
  }
}
