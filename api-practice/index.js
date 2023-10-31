// const req = new XMLHttpRequest();
// req.onload = function () {
//   console.log("It worked.");
//   const data = JSON.parse(this.responseText);
//   console.log(data.conversion_rate);
//   return data;
// };
// req.onerror = function () {
//   console.log("The request failed.");
// };

// req.open(
//   "GET",
//   "https://v6.exchangerate-api.com/v6/421cf9898b649f8594231bfd/pair/USD/JPY"
// );
// req.send();

// // This is old, cannot use promises and more.

// fetch(
//   "https://v6.exchangerate-api.com/v6/421cf9898b649f8594231bfd/pair/USD/JPY"
// )
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data.conversion_rate);
//   })
//   .catch((e) => {
//     console.log("The Resest did not go through.");
//   });

//This is new and will work better as expected

// Using an async func

const USDtoJPYreq = async (crncy1, crncy2) => {
  try {
    const req = await fetch(
      `https://v6.exchangerate-api.com/v6/421cf9898b649f8594231bfd/pair/${crncy1}/${crncy2}`
    );
    const thisData = await req.json();
    console.log(thisData.conversion_rate);
  } catch (e) {
    console.log("There seems to be an error.", e);
  }
};
USDtoJPYreq("USD", "MXN");

// Using Axios

axios
  .get(
    "https://v6.exchangerate-api.com/v6/421cf9898b649f8594231bfd/pair/USD/JPY"
  )
  .then((res) => {
    console.log(res.data.conversion_rate);
  })
  .catch((e) => {
    console.log("Error: ", e);
  });

const axioscrncy = async () => {
  try {
    const getting = await axios.get(
      "https://v6.exchangerate-api.com/v6/421cf9898b649f8594231bfd/pair/USD/JPY"
    );
    const crntRate = getting.data.conversion_rate + "bruh";
    console.log(crntRate);
  } catch (err) {
    console.log("error: ", err);
  }
};
axioscrncy();

// Using axios to change API headers

// const getDadJoke = async () => {
//   const config = { headers: { Accept: "application/json" } };
//   const res = await axios.get("https://icanhazdadjoke.com/", config);
//   dadHeader.inner = res.data.joke;
// };

//Using DOM Manipulation

const dadButton = document.querySelector("#dadButton");
const dadHeader = document.querySelector("#dadHeader");

dadButton.addEventListener(
  "click",
  (dadJokeText = async () => {
    const jokeText = await getDadJoke();
    dadHeader.innerHTML = jokeText;
  })
);

getDadJoke = async () => {
  const config = { headers: { Accept: "application/json" } };
  const res = await axios.get("https://icanhazdadjoke.com/", config);
  return res.data.joke;
};
