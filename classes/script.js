class User {
  constructor(name) {
    this.name = name;
  }

  greetings() {
    console.log(this.name);
  }
}

let user = new User("John");
user.greetings();
