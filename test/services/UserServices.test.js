const UserService = require("../../app/services/UserService");

describe("Test for UserService", () => {
  const user = UserService.create(1, "jesus999", "Jesus");
  it("should ", () => {
    expect(user.userName).toBe("jesus999");
    expect(user.name).toBe("Jesus");
    expect(user.id).toBe(1);
    expect(user.bio).not.toBeUndefined();
  });
});
