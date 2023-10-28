const btn = document.querySelector("#test");

// onClick - Whenever the called on element is clicked, the function is executed.
btn.onclick = function () {
  alert("I was pressed");
};

// onmouseenter - when the mouse enters the area of the element, the function is executed
btn.onmouseenter = function () {
  btn.style.color = "blue";
};

// addEventListener
const btn2 = document.querySelector("#test2");

btn2.addEventListener("dblclick", function () {
  alert("You pressed the second button!");
});

// {once : true} - if the function is ran once then the event listener is removed completely.
const btn3 = document.querySelector("#test3");
const scream = () => {
  alert("AAAAAAAAAAAH");
};
btn3.addEventListener("click", scream, { once: true }); // On the second press, no event listener is ran

// Keyboard events

const input = document.querySelector("#input");
input.addEventListener("keydown", function (e) {
  console.log(e.key);
});

//Form Events and PreventDefault
const form = document.querySelector("#shelterForm");
const formInput = document.querySelector("#formInput");

form.addEventListener("submit", function (f) {
  //Whenever You submit the form, the function runs
  f.preventDefault();
  console.log(`You Submitted "${formInput.value}"`);
  onSubmit();
  formInput.value = "";
});

function onSubmit() {
  //This runs because of the eventListener above.
  const createP = document.createElement("p");
  createP.innerText = formInput.value;
  document.body.appendChild(createP);
}

// Input & Change

input.addEventListener("input", function () {
  // Runs whenever the input value is changed.
  console.log(input.value);
});

input.addEventListener("change", function () {
  console.log(input.value); // Runs when you "loose focus on the input"
});

// stopPropagation
// Event Bubbling and how to deal with it
//Should alert when I press the button by alerting that I pressed the selected element and the container

const container = document.querySelector(".container");
const h2 = document.querySelector("#eventProp");
const bubbleInput = document.querySelector("#bubbleInput");
const bubbleButt = document.querySelector("#bubbleButt");

container.addEventListener("click", function (z) {
  alert("You pressed the container!");
  z.stopPropagation();
});

h2.addEventListener("click", function (z) {
  alert("You pressed the h2");
  z.stopPropagation();
});

bubbleInput.addEventListener("click", function (z) {
  alert("You pressed the input!");
  z.stopPropagation();
});

bubbleButt.addEventListener("click", function (z) {
  alert("You pressed the button!");
  z.stopPropagation();
});

// Event Delegation
const textInput = document.querySelector("#textInput");
const textButton = document.querySelector("#textButton");
const textUL = document.querySelector("#textUL");

textButton.addEventListener("click", function () {
  const newElement = document.createElement("li");
  newElement.innerText = textInput.value;
  textUL.appendChild(newElement);
  textInput.value = "";
});

textUL.addEventListener("click", function (e) {
  console.log(e.target); // logs the clicked target
  e.target.remove(); // Removes the targeted element
});
