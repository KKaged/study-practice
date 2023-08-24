class User {
  constructor(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
  }

  greetings() {
    console.log(
      `Hello ${this.name}, You are ${this.age} years old. You currently live in ${this.location}`
    );
  }
}

let user = new User("John", 21, "Los Angeles, California");
let user1 = new User("Jose", 37, "Moscow, Russia");
user.greetings();
user1.greetings();

class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (value.length < 4) {
      console.log("Name is too short");
      return;
    }
    return (this._name = value);
  }
}
let profile = new person("John");
console.log(profile.name);

class Car {
  drive() {
    console.log("You drive the car!");
  }
  brake() {
    console.log("You step on the break!");
  }
}

let car = new Car();

car.drive();
car.break();
