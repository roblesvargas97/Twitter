class User {
  constructor(id, userName, name, bio) {
    this.id = id;
    this.userName = userName;
    this.name = name;
    this.bio = bio;
    this.dateCreated = new Date();
    this.lastUpdated = new Date();
  }
  get getName() {
    return this.name;
  }
  get getBio() {
    return this.bio;
  }
  get getDateCreated() {
    return this.dateCreated;
  }
  get getLastUpdated() {
    return this.lastUpdated;
  }
  set setUserName(newUserName) {
    this.userName = newUserName;
  }
  set setBio(newBio) {
    this.bio = newBio;
  }
}

module.exports = User;
