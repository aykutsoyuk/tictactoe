const restartBtn = document.querySelector(".restart");
const board = document.querySelector(".board");
const cells = document.querySelectorAll(".cell");
const easyBtn = document.querySelector("#easyBtn");
const hardBtn = document.querySelector("#hardBtn");
const startButton = document.querySelector("#startBtn");

let userActive = true;
let compActive = true;

const winning = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

startButton.addEventListener("click", function (e) {
  e.target.style.display = "none";
  document.querySelector(".chose-difficulty").style.display = "none";
  easyBtn.style.display = "none";
  hardBtn.style.display = "none";
  cells.forEach((cell) => cell.classList.remove("invisible"));
  restartBtn.classList.remove("invisible");
  newGame();
});

function newGame() {
  if (hardBtn.classList.contains("active")) {
    hardGameBegin();
  } else {
    easyGameBegin();
  }
}

hardBtn.addEventListener("click", function () {
  hardBtn.classList.add("active");
  easyBtn.classList.remove("active");
});
easyBtn.addEventListener("click", function () {
  easyBtn.classList.add("active");
  hardBtn.classList.remove("active");
});

restartBtn.addEventListener("click", function () {
  cells.forEach((cell) => (cell.textContent = ""));
  document.querySelector("#result").removeAttribute("class");
  document.querySelector("#result").innerHTML = "";
  compActive = true;
});

function hardGameBegin() {
  cells.forEach((cell) =>
    cell.addEventListener("click", function (e) {
      if (userActive && e.target.textContent === "") {
        e.target.innerHTML = "X";
        userActive = false;
        result();
        compActive ? setTimeout(compChoiceHard, 400) : false;
      }
    })
  );
}

function easyGameBegin() {
  cells.forEach((cell) =>
    cell.addEventListener("click", function (e) {
      if (userActive && e.target.textContent === "") {
        e.target.innerHTML = "X";
        userActive = false;
        result();
        compActive ? setTimeout(compChoiceEasy, 400) : false;
      }
    })
  );
}

function userWins() {
  document.querySelector("#result").classList.add("result-win");
  document.querySelector("#result").innerHTML = "You win :)";
  compActive = false;
  userActive = true;
}

function compWins() {
  document.querySelector("#result").classList.add("result-lose");
  document.querySelector("#result").innerHTML = "You lose :(";
  compActive = false;
  userActive = true;
}

function draw() {
  document.querySelector("#result").classList.add("result-draw");
  document.querySelector("#result").innerHTML = "Its a draw!!";
  compActive = false;
  userActive = true;
}

function result() {
  winning[0].every((arr) => cells[arr].textContent === "O")
    ? compWins()
    : winning[1].every((arr) => cells[arr].textContent === "O")
    ? compWins()
    : winning[2].every((arr) => cells[arr].textContent === "O")
    ? compWins()
    : winning[3].every((arr) => cells[arr].textContent === "O")
    ? compWins()
    : winning[4].every((arr) => cells[arr].textContent === "O")
    ? compWins()
    : winning[5].every((arr) => cells[arr].textContent === "O")
    ? compWins()
    : winning[6].every((arr) => cells[arr].textContent === "O")
    ? compWins()
    : winning[7].every((arr) => cells[arr].textContent === "O")
    ? compWins()
    : winning[0].every((arr) => cells[arr].textContent === "X")
    ? userWins()
    : winning[1].every((arr) => cells[arr].textContent === "X")
    ? userWins()
    : winning[2].every((arr) => cells[arr].textContent === "X")
    ? userWins()
    : winning[3].every((arr) => cells[arr].textContent === "X")
    ? userWins()
    : winning[4].every((arr) => cells[arr].textContent === "X")
    ? userWins()
    : winning[5].every((arr) => cells[arr].textContent === "X")
    ? userWins()
    : winning[6].every((arr) => cells[arr].textContent === "X")
    ? userWins()
    : winning[7].every((arr) => cells[arr].textContent === "X")
    ? userWins()
    : Object.values(cells).every((cell) => cell.textContent != "") 
    ? draw() 
    : false;
}

