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
