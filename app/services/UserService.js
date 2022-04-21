const User = require("../../models/User");

class UserService {
  static create(id, userName, name) {
    return new User(id, userName, name, "Sin Bio");
  }
}

module.exports = UserService;