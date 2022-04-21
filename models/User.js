class User {
  constructor(id, userName, name, bio) {
    this.id = id;
    this.userName = userName;
    this.name = name;
    this.bio = bio;
    this.dateCreated = new Date();
    this.lastUpdated = new Date();
  }
  getName() {
    return this.name;
  }
  getBio() {
    return this.bio;
  }
  getDateCreated() {
    return this.dateCreated;
  }
  getLastUpdated() {
    return this.lastUpdated;
  }
}

module.exports = User;
