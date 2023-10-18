// function throwDice(num) {
//   console.log(` You threw a ${Math.floor(Math.random() * num) + 1}!`);
// }

// throwDice(999);

//Everything under here is about scope

// let global = `I'm a global variable!`;
// function private() {
//   let priv = `I'm a private variable!`;
//   console.log(priv);
// }
// private(); //Output is "I'm a private variable"
// console.log(global); //Output is "I'm a global variable"

// console.log(priv); //Undefined

// //Lexical Scopes
// function family() {
//   const myFamily = ["Antonio", "Josh", "Martha", "Ann"];
//   function hello() {
//     for (let members of myFamily) {
//       console.log(`Hello, ${members}`);
//     }
//   }
//   hello();
// }
// family();

// // Function Expression

// const square = function (num) {
//   return Math.pow(num, 2);
// };

// Higher Order Function

function callTwice(func) {
  func();
  func();
}

function rollDie() {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}

callTwice(rollDie);
