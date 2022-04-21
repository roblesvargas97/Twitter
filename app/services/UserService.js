const User = require("../../models/User");

class UserService {
  static create(id, userName, name) {
    return new User(id, userName, name, "Sin Bio");
  }

  static getInfo(user) {
    const { id, userName, name, bio } = user;
    return [id, userName, name, bio];
  }
}

module.exports = UserService;
