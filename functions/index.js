// function throwDice(num) {
//   console.log(` You threw a ${Math.floor(Math.random() * num) + 1}!`);
// }

// throwDice(999);

//Everything under her is about scope

let global = `I'm a global variable!`;
function private() {
  let priv = `I'm a private variable!`;
  console.log(priv);
}
private(); //Output is "I'm a private variable"
console.log(global); //Output is "I'm a global variable"

console.log(priv); //Undefined
