// getElementById - Using this will let me 'get' an element from the HTML and prepare to modify it using JavaScript.
const mainHeader = document.getElementById("main-header");

//getElementByTagName - Using this will return an HTML collection of every element using the tag name that is inputted.
const image = document.getElementsByTagName("img"); //This will get every 'img' element using this tag name

// getElementByClassName - Allows you 'get' with the class you assigned it, preparing it to be modified.
const container = document.getElementsByClassName("container"); //I will now grab whatever has the class of 'container' assigned to it.

// querySelector -  Using this will find the first element of which you call on. You can also use this to grab class and ID's. Just use their respective symbols.
const firstP = document.querySelector("p"); //This grabs the first 'P' element.
const checkbox = document.querySelector("input[type=checkbox]"); // grabs the first input with the type of button.

// querySelectorAll - like tag name but you can use it to select everything of whichever you choose to identify. Can be used to grab classes and ID's. Just use their symbols.
const allP = document.querySelector("p"); // Grabs all 'p' elements.

// innerText - Allows you to modify the innerText of that object.
mainHeader.innerText = "I was modified in the JavaSript File!";

// innerHTML - if I wanted to add/change an element to whatever I want it to use this.
mainHeader.innerHTML = "<p>NEW HEADER!</p>"; // In this case, it replaced the current value

// .id attribute - Can use this to change the elements ID's name to whatever you choose for it to be.
mainHeader.id = "newID"; // The header's ID is 'newID'

// .styles attribute - This allows you to change the style of whatever you truly want. Everything is camelCase and in ''.
mainHeader.style.fontSize = "2rem"; //Changes the font size of the header.

// Getting all the computed styles of any element
window.getComputedStyle(mainHeader); //This gives us all of the styles set onto that element

// setAttribute , getAttribute - These methods allow you to get the elements attribute and set the attribute

allP.getAttribute(""); // Returns null since their is no class.

allP.setAttribute("class", "purple"); // sets a class and is named purple

// classList - allows you to mess with the class attribute within the element you have chosen
firstP.classList.add("lorems"); //adds the class

firstP.classList.remove("lorems"); //removes the class

firstP.classList.contains("lorems"); //Checks to see if it contains a class with the assigned name, returns a boolean

firstP.classList.toggle("lorems"); //When ran, it will 'toggle' the class by removing it and adding it, returns boolean

// parentElement - gives you the parent element of the element you originally called on.
const nav = firstP.parentElement; // returns the nav element

//children - gives you the children elements of said element
nav.children; //returns all the child elements in order

// nextElementSibling - gives you the sibling element that comes after
firstP.nextElementSibling; // Gives me the next P element

// previousElementSibling - gives you the element that came before the element you called on.
firstP.previousElementSibling; // returns the element before this P

// createElement - creates an element of any choice
const makeImg = document.createElement("img"); // creates an image element

makeImg.src =
  "https://images.unsplash.com/photo-1665342009088-6b0317d08053?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

makeImg.style.width = "20em";

document.body.appendChild(makeImg);
