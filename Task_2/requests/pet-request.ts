import superagent from "superagent";
import { BaseRequest } from "./base-request";
import { RequestTypes } from "./request-types";

export class PetRequests extends BaseRequest {
  private constructor(
    public readonly requestType: RequestTypes,
    protected readonly requestPath: string,
    public readonly requestHeader?: object,
    public readonly requestData?: object
  ) {
    super(requestType, requestPath, requestHeader, requestData);
  }

  public static findPetById(petId: number) {
    return new PetRequests(RequestTypes.get, `pet/${petId}`);
  }

  public static findPetByStatus(status: string) {
    return new PetRequests(
      RequestTypes.get,
      `pet/findByStatus?status=${status}`
    );
  }
  public static addNewPet(petData: object, path: string) {
    return new PetRequests(
      RequestTypes.post,
      `pet/${path}`,
      {
        "Content-Type": "application/json",
      },
      petData
    );
  }
  public static updatePet(petData: object, path: string) {
    return new PetRequests(
      RequestTypes.put,
      `pet/${path}`,
      {
        "content-type": "application/json",
      },
      { petData: petData }
    );
  }

  public static deletePet(petId: number) {
    return new PetRequests(RequestTypes.delete, `pet/${petId}`);
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
        return superagent
          .delete(this.url)
          .send(this.requestData);
        break;
    }
  }
}
