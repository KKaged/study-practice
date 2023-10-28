const p1Display = document.querySelector("#p1Score");
const p2Display = document.querySelector("#p2Score");
const addP1 = document.querySelector("#addP1");
const addP2 = document.querySelector("#addP2");
const reset = document.querySelector("#reset");
const playTo = document.querySelector("#playTo");

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;
playTo.value = winningScore;

playTo.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  resetGame();
});

addP1.addEventListener("click", function () {
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score === winningScore) {
      p1Display.classList.add("winner");
      p2Display.classList.add("loser");
      isGameOver = true;
    }
    p1Display.innerText = p1Score;
  }
});
addP2.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === winningScore) {
      ///
      p2Display.classList.add("winner");
      p1Display.classList.add("loser");
      isGameOver = true;
    }
    p2Display.innerText = p2Score;
  }
});

reset.addEventListener("click", resetGame);

function resetGame() {
  isGameOver = false;
  p1Score = 0;
  p1Display.innerText = p1Score;
  p2Score = 0;
  p2Display.innerHTML = p2Score;
  p2Display.classList.remove("winner", "loser");
  p1Display.classList.remove("loser", "winner");
}
