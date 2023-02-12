import superagent from "superagent";
import { PetRequests } from "../requests/pet-request";

describe("Pet api tests", function () {
  test("Create new pet", async () => {
    const request = PetRequests.addNewPet(
      {
        id: 10,
        category: {
          id: 2,
          name: "dog",
        },
        name: "doggie",
        photoUrls: ["string"],
        tags: [
          {
            id: 4,
            name: "gdpg",
          },
        ],
        status: "available",
      },
      ""
    );
    const response = await request.send();
    console.log(response.body);
    expect(response.status).toBe(200);
  });
  test("Find pet by ID", async () => {
    const request = PetRequests.findPetById(10);
    const response = await request.send();
    console.log(response.body);
    expect(response.status).toBe(200);
  });
  test("Find pet by status", async () => {
    const request = PetRequests.findPetByStatus("available");
    const response = await request.send();
    console.log(response.body);
    expect(response.status).toBe(200);
  });
  test("Update pet information", async () => {
    const request = PetRequests.updatePet(
      {
        id: 10,
        category: {
          id: 2,
          name: "horse",
        },
        name: "mary",
        photoUrls: ["string"],
        tags: [
          {
            id: 4,
            name: "gdpg",
          },
        ],
        status: "available",
      },
      ""
    );
    const response = await request.send();
    console.log(response.body);
    expect(response.status).toBe(200);
  });
  test("Delete pet", async () => {
    const request = PetRequests.deletePet(10);
    const response = await request.send();
    expect(response.status).toBe(200);
  });
});
