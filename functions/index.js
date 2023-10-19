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
const myFamily = ["Antonio", "Josh", "Martha", "Ann"];
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

// // Higher Order Function

// function callTwice(func) {
//   func();
//   func();
// }

// function rollDie() {
//   const roll = Math.floor(Math.random() * 6) + 1;
//   console.log(roll);
// }

// callTwice(rollDie);

//return functions

function makeMysteryFunc() {
  const rand = Math.random();
  if (rand > 0.5) {
    return function () {
      console.log("Congrats, I am a good function!");
    };
  } else {
    return function () {
      alert("You have been infected with a computer virus.");
    };
  }
}

const isChild = makeBetweenFunc(0, 18);
const isAdult = makeBetweenFunc(19, 64);
const isSenior = makeBetweenFunc(64, 100);

function makeBetweenFunc(min, max) {
  return function (num) {
    return num <= max && num >= min;
  };
}

// Creating Function Methods

const math = {
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  add: function (x, y) {
    return x + y;
  },
};
math.add(1, 8); // 9
math.multiply(3, 2); //6
math.divide(6, 2); //3
//Shorthand
const greetings = {
  morning(name) {
    return "Good Morning, " + name;
  },
  afternoon(name) {
    return "Good Afternoon, " + name;
  },
  night(name) {
    return "Good Evening, " + name;
  },
};

//Learning about 'this'

const human = {
  name: "John Smith",
  age: 47,
  nation: "United States of America",
  intro() {
    console.log(
      `Hello, my name is ${this.name}. I am ${this.age} and I am from ${this.nation}`
    );
  },
};
human.intro();

// Try / Catch

try {
  greetings.christmas("John"); // This should return an error and run to catch.
} catch (e) {
  console.log(`Apologies, the function ${e} or does not exist.`);
}

// forEach

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 22, 53, 6, 877, 346, 96];

nums.forEach(function (num) {
  if (num % 2 === 0) {
    console.log(num);
  }
});
// Should return everything that is divisible by 2

nums.forEach(function (n) {
  console.log(n * 2);
});
// Returns everything multiplied by 2

// Map

const series = ["F1", "F2", "F3"];

const lowerSeries = series.map(function (s) {
  return s.toLowerCase(); // Creates a new array, everything is stored into 'lowerSeries'
});

console.log(lowerSeries);

// Arrow Functions

const rollDie = () => {
  const num = Math.floor(Math.random() * 6) + 1;
  console.log(num);
};

rollDie();

//Implicit Return

const implicitRollDie = () => Math.floor(Math.random() * 6) + 1;
// One line implicit return. Notice now return is gone and so are the curly brackets and paranthesis.
//Only for a single expression. Not multiple

const add = (x, y) => x + y;

// setTimeout / setInterval

setTimeout(() => {
  console.log("You are patient!");
}, 4000); // Notice how long it took for the code to run in the Output in VS Code, atleast 4.8 seconds!

const id = setInterval(() => {
  Math.floor(Math.random() * 5) + 1;
}, 300);

clearInterval(id);

// Filter

const number = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const pick2 = number.filter((n) => {
  return n % 2 === 1; // Filters out everything that is false and places everything that is true into a new array , "pick2"
});
console.log(pick2); //[1,  3,  5,  7,  9, 11, 13, 15, 17, 19]

// Every
const words = ["dog", "cat", "deer", "tiger"];

const all = words.every((word) => {
  // Checks if the first letter of each item in the array starts with a "d", if one is different, it will return false. If all are starting with "d" then it returns true
  return word[0] === "d";
});
console.log(all);

const scores = [81, 77, 12, 61, 85, 34, 97];
const pass = scores.every((score) => {
  return score >= 10;
});
console.log(pass); // True

// Some

const passSome = scores.some((score) => {
  return score >= 70;
});
console.log(passSome); // True
