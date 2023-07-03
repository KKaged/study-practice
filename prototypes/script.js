function character(name, age, power) {
  this.name = name;
  this.age = age;
  this.power = power;
}
let main1 = new character("kage", 21, "Infinity Stones");
Object.getPrototypeOf(main1); //Tells us where they inherited its values/properties

character.prototype.greet = function () {
  return `Hello, My name is ${this.name}.`;
};

main1.greet();
