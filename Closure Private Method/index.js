var module = (function () {
  var privProp = "Hello World!";

  function privMethod() {
    console.log(privProp);
  }
  return {
    publicMethod: function () {
      privMethod();
    },
  };
})();
module.publicMethod(); // Output: "Hello World!"
console.log(module.privProp); // Undefined
module.privMethod(); // Error
