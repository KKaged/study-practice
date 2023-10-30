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
