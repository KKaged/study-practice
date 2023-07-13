const personFactory = (name, age) => {
  const sayHello = () => console.log("Hello " + name + "!");
  return { name, age, sayHello };
};

const jeff = personFactory("John", 33);
jeff.sayHello();

const color = "red";
const number = 707;
const food = "rames";

console.log({ color, number, food });

const greetings = (name) => {
  const sayName = () => {
    console.log(`Hello! My name is ${name}`);
  };
  return { sayName };
};

const Jose = greetings("Jose");

Jose.sayName();
