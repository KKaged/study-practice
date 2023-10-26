const btn = document.querySelector("#test");

// onClick - Whenever the called on element is clicked, the function is executed.
btn.onclick = function () {
  alert("I was pressed");
};

// onmouseenter - when the mouse enters the area of the element, the function is executed
btn.onmouseenter = function () {
  btn.style.color = "blue";
};
