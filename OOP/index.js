const { AlertIcon } = require("@chakra-ui/react");

//You can make your own methods my editing the objects prototype -  You change the template of the prototype, You can add anything to any prototype
String.prototype.yell = function () {
  console.log(`IT'S ${this.toUpperCase()}!!! RUNNN`);
};

const who = "John Cena";

who.yell(); //Logs "IT'S JOHN CENA!!! RUNNN"

// __proto__ is a reference to the prototype

function hex(r, g, b) {
  console.log(
    "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1) //Makes hex color
  );
}
function rgb(r, g, b) {
  return `rgb(${r},${g},${b}`;
}

//Factory Function
//Next objects use the same 'recipe'
function makeColor(r, g, b) {
  const color = {}; //Object starts empty
  color.r = r;
  color.g = g; //Properties, gettings data from arguements
  color.b = b;
  color.rgb = function () {
    const { r, g, b } = this; //Method
    console.log(`rgb(${r},${g},${b})`);
  };
  color.hex = function () {
    const { r, g, b } = this;
    console.log(
      "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1) //Method
    );
  };
  return color; //Returns Object
}
const firstColor = makeColor(12, 255, 72);
firstColor.rgb();
firstColor.hex();

//Constructor

function CreateColor(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

CreateColor.prototype.rgb = function () {
  //Accessing and changing the original prototype and adding the rgb method
  const { r, g, b } = this; //Method
  console.log(`rgb(${r},${g},${b})`);
};

CreateColor.prototype.hex = function () {
  const { r, g, b } = this; //Referencing anything to the left side of the dot
  console.log(
    "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1) //Method
  );
};

CreateColor.prototype.rgba = function (a = 1.0) {
  const { r, g, b } = this;
  console.log(`rgba(${r},${g},${b},${a})`);
};

const red = new CreateColor(255, 0, 0);
console.log(red.rgb);
