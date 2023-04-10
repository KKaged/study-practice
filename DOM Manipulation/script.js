const container = document.querySelector("#container");
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is my content!";
container.appendChild(content);

const p = document.createElement("p");
p.classList.add("p1");
p.textContent = "Hey I'm Red!";
container.appendChild(p);
p.style.color = "red";

const h3 = document.createElement("h3");
h3.classList.add("header-3");
h3.textContent = "I'm a blue h3!";
container.appendChild(h3);
h3.style.color = "blue";

const newDiv = document.createElement("div");
newDiv.classList.add("div1");
newDiv.style.color = "black";
newDiv.style.border = "1px solid black";
newDiv.style.backgroundColor = "pink";
container.appendChild(newDiv);

const h1 = document.createElement("h1");
h1.classList.add("header-1");
h1.textContent = "I am in a div!";
newDiv.appendChild(h1);

const p2 = document.createElement("p");
p2.classList.add("p2");
p2.textContent = "Me too!";
newDiv.appendChild(p2);
