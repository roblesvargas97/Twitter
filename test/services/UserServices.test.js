const UserService = require("../../app/services/UserService");

describe("Test for UserService", () => {
  const user = UserService.create(1, "jesus999", "Jesus");
  test("Create a new user Using the UserService ", () => {
    expect(user.userName).toBe("jesus999");
    expect(user.name).toBe("Jesus");
    expect(user.id).toBe(1);
    expect(user.bio).not.toBeUndefined();
  });

  test(" Get all user data in list", () => {
    const user = UserService.create(1, "jesus999", "Jesus");
    const userInfoList = UserService.getInfo(user);
    expect(userInfoList[0]).toBe(1);
    expect(userInfoList[1]).toBe("jesus999");
    expect(userInfoList[2]).toBe("Jesus");
    expect(userInfoList[3]).toBe("Sin Bio");
  });

  test(" Update UserName", () => {
    const user = UserService.create(1, "jesus999", "Jesus");
    UserService.updateUsername(user, "jesus888");
    expect(user.userName).toBe("jesus888");
  });
});
