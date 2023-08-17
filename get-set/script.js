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

user.fullName = "John Bradshaw";

console.log(user.name);
console.log(user.surname);
