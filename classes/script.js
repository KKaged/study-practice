//Classes are "blueprints" for creating objects.
//             Define properties and/or methods.
// Getters/Setters are a way to get/set the properties of an object
//Secures better data quality
class User {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  set first(value) {
    this.firstName = value.toUpperCase();
  }
  set last(value) {
    this.lastName = value.toUpperCase();
  }
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

let user = new User("John", "Smith");
console.log(user.fullName);

class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  } //Constructor used to make new objects
  drive() {
    console.log("You drive the car!");
  }
  brake() {
    console.log("You step on the break!");
  } //Methods
}

let car1 = new Car("Lamborghini", "Urus", 2022, "White"); //Using constructor to create a new car
let car2 = new Car("Mercedes", "AMG GT", 2021, "Black");

car1.drive();
car2.brake();
console.log(car1.make);
