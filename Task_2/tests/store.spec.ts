import superagent from "superagent";
import { StoreRequest } from "../requests/store-requrest";

describe("Store api tests", function () {
  test("Create new order", async () => {
    const request = StoreRequest.placeOrder(
      {
        id: 12,
        petId: 35,
        quantity: 1,
        shipDate: "2023-02-10T21:17:27.416Z",
        status: "placed",
        complete: true,
      },
      ""
    );
    const response = await request.send();
    expect(response.status).toBe(200);
  });
  test("Find order by ID", async () => {
    const request = StoreRequest.findOrderById(12);
    const response = await request.send();
    expect(response.status).toBe(200);
  });
  test("Find pet by status", async () => {
    const request = StoreRequest.inventories("inventory");
    const response = await request.send();
    expect(response.status).toBe(200);
  });
  test("Delete order", async () => {
    const request = StoreRequest.deleteOrder(12);
    const response = await request.send();
    expect(response.status).toBe(200);
  });
});
