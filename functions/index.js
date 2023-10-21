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

const scoreßs = [81, 77, 12, 61, 85, 34, 97];
const pass = scores.every((score) => {
  return score >= 10;
});
console.log(pass); // True

// Some

const passSome = scores.some((score) => {
  return score >= 70;
});
console.log(passSome); // True

// Reduce

const total = scores.reduce((total, current) => {
  return total + current; // Returns the total value the array
});
console.log(total);

// Default

function defaultDie(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1; //When calling thi function,
}
console.log(defaultDie());

// Spread

const lotsOfNums = [1, 24, 6, 4, 2, 23, 678, 43, 212];
console.log(Math.max(...lotsOfNums));
// "..." allows any iterable item to "expand" where more arguments are expected. (think of filling the rest of what you should write down)

//Spread for Arrays

const dogBreeds = ["PitBull", "German Sheperd", "Doberman"];
const catBreeds = ["Siamese", "Main Coon", "Somali"];

const dogAndCat = [...dogBreeds, ...catBreeds];

console.log(dogAndCat);

//You can also spread strings
const hello = [..."hello"];
console.log(hello);

// Spread in Objects

const canine = {
  family: "Caninae",
  furry: true,
};
const dog = { ...canine, isFriendly: true };
console.log(dog); // Order does matter, if there are two properties with the same name, the one that comes in second or last, will overtake the previous value.

// Arguments

function numbers() {
  console.log(arguments);
}
numbers(1, 25, 61); // This will return whichever arguments are inside the function, acting like an array

// Rest

function addition(...add) {
  console.log(add);
}
addition(12, 12, 12, 12, 12, 12, 12, 44, 2, 4, 124, 24, 24, 5, 86, 6); // allows a function to accept and indefinite ammount of arguements as an array ; an array-like Object

// Destructing Arrays

const raceResults = [
  "Max Verstappen",
  "Sergio Perez",
  "Lewis Hamilton",
  "Fernando Alonso",
  "Carlos Sainz Jr",
];

const [p1, p2, p3, ...restOfGrid] = raceResults;
//console.log(p1, p2, p3);

console.log(restOfGrid);

// Destructing Objects

const driver = {
  name: "Sergio 'Checo' Perez",
  country: "Mexico",
  numberID: 11,
  team: "Red Bull Racing",
};

const { name, numberID, team } = driver; // Singled them out into their own respective variable, it still exist in the array
console.log(name);

const { team: currentTeam } = driver; // Adding a colon will let me change the name of the variable to anything
console.log(currentTeam);

const { signedYear = 2021 } = driver; // This allows me to add a variable / fallBack / default to said object
console.log(signedYear);

// Parameter Destructing

const fullDriverID = ({ name, numberID }) => {
  return `${name}, ${numberID}`;
};

const mercDriver1 = {
  name: "Lewis Hamilton",
  country: "Great Britian",
  numberID: 44,
  team: "Mercedes-AMG Petronas F1 Team",
};
console.log(fullDriverID(mercDriver1));
