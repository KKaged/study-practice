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
