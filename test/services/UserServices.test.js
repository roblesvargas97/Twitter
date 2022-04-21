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

  test("Given a list of users give me the list of usernames", () => {
    const user = UserService.create(1, "jesus999", "Jesus");
    const user2 = UserService.create(1, "jesus9991", "Jesus");
    const user3 = UserService.create(1, "jesus9992", "Jesus");
    const userNames = UserService.getAllUserNames([user, user2, user3]);
    expect(userNames).toContain("jesus999");
    expect(userNames).toContain("jesus9991");
    expect(userNames).toContain("jesus9992");
  });
});
