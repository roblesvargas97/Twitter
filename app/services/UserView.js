class UserView {
  static createUser(payload) {
    if (payload === null) {
      return {
        error: "payload no existe",
      };
    }
    if (
      payload.username === null ||
      payload.name === null ||
      payload.id === null
    ) {
      return {
        error: "necesitan tener un valor valido",
      };
    }
    if (!payload.username || !payload.name || !payload.id) {
      return {
        error: "necesitan tener las propiedades adecuadas",
      };
    }
  }
}

module.exports = UserView;
