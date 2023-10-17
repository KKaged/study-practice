// let randomNum = Math.floor(Math.random() * 10) + 1;
// let targetNum = Math.floor(Math.random() * 10) + 1;

// while (true) {
//     let targetNum = Math.floor(Math.random() * 10) + 1;
//     if (targetNum === randomNum) {
//         console.log(`Match Found! The correct numbers are ${randomNum} and ${targetNum}!`);
//         break;
//     } else {
//         console.log(`The numbers ${randomNum} and ${targetNum} do not match!`);
//     }
// }
//random loop that will run until a match is found. This is supposed to be a loop where I first learned about break statements.

// let maximum = parseInt(prompt("Enter the maximum number!"));
// while (!maximum) {
//   maximum = parseInt(prompt("Enter a valid number!"));
// }

// let attempts = 1;

// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum);
// let guess = parseInt(prompt("Enter your first guess:"));
// while (guess !== targetNum) {
//   attempts++;
//   if (guess > targetNum) {
//     guess = parseInt(prompt("Too high! Enter a new guess:"));
//   } else {
//     guess = parseInt(prompt("Too low! Enter a new guess:"));
//   }
// }
// console.log(
//   `You got it! The number was ${targetNum} you did it in ${attempts} Attempts!!`
// );

let question = prompt("What would you like to do?");
const list = ["Study JavaScript", "Call Naru"];

while (question !== "quit" && question !== "q") {
  if (question === "list") {
    console.log("List");
    console.log("*****");
    for (let i = 0; i < list.length; i++) {
      console.log(`${i}: ${list[i]}`);
    }
    console.log("*****");
  } else if (question === "new") {
    const newItem = prompt("What would you like to add?");
    list.push(newItem);
    console.log(`${newItem} was added to the list!`);
  } else if (question === "delete") {
    const remove = parseInt(
      prompt("Enter the index of the item you want to delete.")
    );
    if (!Number.isNaN(remove)) {
      console.log(`You removed "${list[remove]}"`);
      list.splice(remove, 1);
    } else {
      console.log("Unkown Index.");
    }
  }
  question = prompt("What would you like to do?");
}
console.log("You have ended the session.");
