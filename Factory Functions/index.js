const personFactory = (name, age) => {
  const sayHello = () => console.log("Hello " + name + "!");
  return { name, age, sayHello };
};

const jeff = personFactory("John", 33);
jeff.sayHello();
