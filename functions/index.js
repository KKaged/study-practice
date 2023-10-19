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
