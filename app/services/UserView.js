class UserView {
  static createUser(payload) {
    if (payload === null) {
      return {
        error: "payload no existe",
      };
    }
    if (payload.username === null || payload.name === null || id === null) {
      return {
        error: "necesitan tener un valor valido",
      };
    }
  }
}

module.exports = UserView;
