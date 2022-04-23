const UserView = require("../../app/services/UserView");

describe("Test for userView", () => {
  test("Return an error object when try to create a new user with a null payload", () => {
    const payload = null;
    const result = UserView.createUser(payload);
    expect(result.error).toMatch(/payload no existe/);
  });
  test("Return an error object when try to create a new user with a null payload with invalid properties", () => {
    const payload = { username: null, name: 12, id: "id" };
    const result = UserView.createUser(payload);
    expect(result.error).toMatch(/necesitan tener un valor valido/);
  });
  test("Create a user by a given valid payload", () => {
    const payload = { username: "username", name: "Uriel", id: 2 };
    const result = UserView.createUser(payload);
    expect(result.username).toBe("username");
    expect(result.name).toBe("Uriel");
    expect(result.id).toBe(2);
  });
});
