const User = require("../../src/db/models/user");

jest.mock("../../src/db/models/user.js");

describe("UserController", () => {
  afterEach(async () => {
    jest.clearAllMocks();
  });

  test("create user", async () => {
    try {
      User.create.mockResolvedValue({ id: 1, name: "name", email: "email" });

      const user = await User.create({
        name: "name",
        email: "email",
        password: "password",
      });

      expect(User.create).toHaveBeenCalledWith({
        name: "name",
        email: "email",
        password: "password",
      });
      expect(user).toEqual({ id: 1, name: "name", email: "email" });
    } catch (error) {
      console.error(error);
    }
  });

  test("find user by pk", async () => {
    const id = 1;
    User.findByPk.mockResolvedValue({ id: id, name: "name", email: "email" });

    const user = await User.findByPk(id);

    expect(User.findByPk).toHaveBeenCalledWith(id);
    expect(user).toEqual({ id: id, name: "name", email: "email" });
  });
});
