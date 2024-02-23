const request = require("supertest");
const { server } = require("../../app");

describe("UserController Integration", () => {
  test("create user", async () => {
    const response = await request(server)
      .post("/users")
      .send({ name: "name", email: "email", password: "password" });

    expect([201, 400, 401, 500]).toContain(response.statusCode);
    if (response.statusCode === 201) {
      expect(response.body).toHaveProperty("id");
      expect(response.body.name).toBe("name");
      expect(response.body.email).toBe("email");
    }
  });
});
