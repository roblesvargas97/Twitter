const User = require("../../models/User");

class UserService {
  static create(id, userName, name) {
    return new User(id, userName, name, "Sin Bio");
  }

  static getInfo(user) {
    const { id, userName, name, bio } = user;
    return [id, userName, name, bio];
  }

  static updateUsername(user, newName) {
    return (user.userName = newName);
  }

  static getAllUserNames(array) {
    const arrayNames = array.map((user) => user.userName);
    return arrayNames;
  }
}

module.exports = UserService;
