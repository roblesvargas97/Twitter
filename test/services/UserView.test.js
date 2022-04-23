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
    console.debug(payload);
    expect(result.error).toMatch(/necesitan tener un valor valido/);
  });
});
