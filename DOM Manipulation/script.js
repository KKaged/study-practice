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
const allP = document.querySelectorAll("p"); // Grabs all 'p' elements.

// innerText - Allows you to modify the innerText of that object.
mainHeader.innerText = "I was modified in the JavaSript File!";

// innerHTML - if I wanted to add/change an element to whatever I want it to use this.
mainHeader.innerHTML = "<p>NEW HEADER!</p>"; // In this case, it replaced the current value
