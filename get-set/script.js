let person = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};

console.log(person.fullName);

let user = {
  name: "George",
  surname: "Lopez",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
};
console.log(user.fullName); //Output is "George Lopez"

user.fullName = "John Bradshaw"; //Sets the fullname to "John Bradshaw" with the set funciton
console.log(user.fullName); //Output is "John Bradshaw"

console.log(user.name); //Output is "John"
console.log(user.surname); //Output is "Bradshaw"
