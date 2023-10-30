// Callbacks -  Calllbacks inside callbacks are a very common practice.
const delayedColorChange = (setColor, delay, doNext) => {
  setTimeout(() => {
    document.body.style.backgroundColor = setColor;
    doNext && doNext();
  }, delay);
};

delayedColorChange("red", 1000, () => {
  delayedColorChange("green", 1000, () => {
    delayedColorChange("blue", 1000);
  });
});

const myfakeURL = (myurl) => {
  return new Promise((resolve, reject) => {
    const lag = Math.random();
    if (lag < 0.8) {
      resolve("bruh");
    }
    reject(`rejected ${myurl}`);
  });
};

myfakeURL("youtube.com").then((acc) => {
  console.log(acc);
}); /// If myfakeURL is resolved, then it will log ('bruh) which is the data that resolve has returned

// async - a function that creats a promise
const login = async (username, password) => {
  if (username !== "John Doe") throw "Wrong Credentials"; // throws an error into the console
  if (username === "John Doe" && password === "usaisbest") return "Welcome!";
};

login("John Doe", "usaisbest")
  .then((data) => {
    console.log("logged in!");
    console.log(data);
  })
  .catch((error) => {
    console.log("Error:");
    console.log(error);
  });
