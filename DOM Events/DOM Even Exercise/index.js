const mainTitle = document.querySelector(".main-head");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  const newColor = randomColor();
  document.body.style.backgroundColor = newColor;
  mainTitle.innerText = newColor;
  randomColor();
});

const randomColor = () => {
  let rand1 = Math.floor(Math.random() * 255);
  let rand2 = Math.floor(Math.random() * 255);
  let rand3 = Math.floor(Math.random() * 255);
  return `rgb(${rand1}, ${rand2}, ${rand3})`;
};
