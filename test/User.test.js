const User = require("../models/User");

describe("Unit Test for user class", () => {
  test("Create an user object", () => {
    const user = new User(
      1,
      "roblesvargas",
      "Jesus Uriel Robles Vargas",
      "Bio"
    );
    expect(user.id).toBe(1);
    expect(user.userName).toBe("roblesvargas");
    expect(user.name).toBe("Jesus Uriel Robles Vargas");
    expect(user.bio).toBe("Bio");
    expect(user.dateCreated).not.toBeUndefined();
    expect(user.lastUpdated).not.toBeUndefined();
  });

  test('Add Getters', () => {
    const user = new User(
        1,
        "roblesvargas",
        "Jesus Uriel Robles Vargas",
        "Bio"
      );

      expect(user.getName()).toBe("Jesus Uriel Robles Vargas");
      expect(user.getBio()).toBe("Bio");
      expect(user.getDateCreated()).not.toBeUndefined();
      expect(user.getLastUpdated()).not.toBeUndefined();
  });
});
