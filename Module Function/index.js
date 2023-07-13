const calculator = (() => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return {
    add,
    sub,
    mul,
    div,
  };
})();
console.log(calculator.add(3, 7));
console.log(calculator.sub(7, 2));
console.log(calculator.mul(7, 3));
console.log(calculator.div(14, 2));
