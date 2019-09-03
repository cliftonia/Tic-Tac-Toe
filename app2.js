var allSquares = document.querySelectorAll(".square");

// Top Row
var topLeftBox = document.querySelector(".box-top.top-left");
var topMidBox = document.querySelector(".box-top.top-middle");
var topRightBox = document.querySelector(".box-top.top-right");

// Middle Row
var midLeftBox = document.querySelector(".box-middle.mid-left");
var midCenterBox = document.querySelector(".box-middle.mid-mid");
var midRightBox = document.querySelector(".box-middle.mid-right");

// Bottom Row
var botLeftBox = document.querySelector(".box-bottom.bot-left");
var botMidBox = document.querySelector(".box-bottom.bot-mid");
var botRightBox = document.querySelector(".box-bottom.bot-right");

// Input buttons
var player1Input = document.querySelector(".player1-input");
var player2Input = document.querySelector(".player2-input");

var player1Btn = document.querySelector(".change-player1-btn");
var player2Btn = document.querySelector(".change-player2-btn");

// Change Player functions
var player1Name = "Player 1";
var player2Name = "Player 2";

var changePlayer1Name = function() {
  player1Name = document.querySelector("h2.player1").textContent =
    player1Input.value;
};

var changePlayer2Name = function() {
  player2Name = document.querySelector("h2.player2").textContent =
    player2Input.value;
};

player1Btn.addEventListener("click", changePlayer1Name);
player2Btn.addEventListener("click", changePlayer2Name);

// Display Winner Functions and Draw Functions
p1Score = document.querySelector(".p1-games-won");
p2Score = document.querySelector(".p2-games-won");

whoWon = document.querySelector(".header-heading");

var originalH1 = function() {
  document.querySelector(".header-heading").textContent = "Tic Tac Toe";
  document.querySelector(".header-heading").style.backgroundColor = "mistyrose";
};

var displayPlayer1Win = function() {
  whoWon.textContent = player1Name + " Wins";
  whoWon.classList.add("animated", "flash");
  document.querySelector(".header-heading").style.backgroundColor = "#76DE76";
  setTimeout(originalH1, 1000);
};

var displayPlayer2Win = function() {
  whoWon.textContent = player2Name + " Wins";
  whoWon.classList.add("animated", "flash");
  document.querySelector(".header-heading").style.backgroundColor = "#76DE76";
  setTimeout(originalH1, 1000);
};

var displayDraw = function() {
  whoWon.textContent = "Draw";
  whoWon.classList.add("animated", "flash");
  document.querySelector(".header-heading").style.backgroundColor = "#fdfd96";
  setTimeout(originalH1, 1000);
};

// here I am going to create the reset part of the game by selecting all the boxes and putting them into a reset function

var topRows = document.querySelectorAll(".box-top");
var midRows = document.querySelectorAll(".box-middle");
var botRows = document.querySelectorAll(".box-bottom");
var resetBtn = document.querySelector(".reset-button");
var newGameBtn = document.querySelector(".new-game");

var resetBoardBtn = function() {
  allSquares.forEach(function(square) {
    square.style.backgroundColor = "#fea5be";
    square.textContent = "";
  });
  counter = 0;
};

var newGame = function() {
  allSquares.forEach(function(square) {
    square.style.backgroundColor = "#fea5be";
    square.textContent = "";
  });
  counter = 0;
  p1Score.textContent = 0;
  p2Score.textContent = 0;
  player1Name = document.querySelector("h2.player1").textContent = "Player1";
  player2Name = document.querySelector("h2.player2").textContent = "Player2";
};

var resetBoard = function() {
  allSquares.forEach(function(square) {
    square.style.backgroundColor = "#fea5be";
    square.textContent = "";
  });
  whoWon.classList.remove("animated", "flash");
  counter = 0;
};

// here I have added the winning combinations into an array as well as the rules

var board = document.querySelectorAll(".square");

var winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

playersWinCombinations = [];

counter = 0;

var plusCounter = function() {
  counter = counter + 1;
};

var checkDraw = function() {
  if (counter === 9) {
    displayDraw();
    highlightDraw();
    setTimeout(resetBoard, 1000);
  }
};

var checkWin = function() {
  // console.log("Hello darkness my old friend");
  winCombinations.forEach(function(winCombination) {
    // winCombination is referencing each index value of the arrays within the array in the winCombinations Variable and checking to see if it contains a X allowing me for future to add more winning combinations when i increase the arrays
    if (
      board[winCombination[0]].innerHTML === "X" &&
      board[winCombination[1]].innerHTML === "X" &&
      board[winCombination[2]].innerHTML === "X"
    ) {
      console.log("test");
      p1Score.textContent = Number(p1Score.textContent) + 1;
      displayPlayer1Win();
      highlightWinCom(winCombination);
      counter = 0;
      setTimeout(resetBoard, 1000);
    } else if (
      board[winCombination[0]].innerHTML === "O" &&
      board[winCombination[1]].innerHTML === "O" &&
      board[winCombination[2]].innerHTML === "O"
    ) {
      p2Score.textContent = Number(p2Score.textContent) + 1;
      displayPlayer2Win();
      highlightWinCom(winCombination);
      counter = 0;
      setTimeout(resetBoard, 1000);
    }
  });
  // setInterval(checkDraw,3000)
  if (counter === 9) {
    displayDraw();
    highlightDraw();
    setTimeout(resetBoard, 1000);
  }
};

// these event listeners are for playing naughts or crosses

var turn = "X";

var playTurn = function(event) {
  // check if the box is empty
  if (event.target.textContent !== "") {
    return;
  }
  // highlightWhosTurnItIs()
  counter += 1;
  // setTimeout(plusCounter, 100)

  if (turn === "X") {
    event.target.textContent = "X";
    highlightWhosTurnItIs();
    turn = "O";
  } else {
    event.target.textContent = "O";
    highlightWhosTurnItIs();
    turn = "X";
  }

  checkWin();
};

// here are all my animations
var highlightWhosTurnItIs = function() {
  if (turn === "X") {
    document.querySelector(".player1").style.backgroundColor = "#99DFDC";
    document.querySelector(".player2").style.backgroundColor = "#fdfd96";
  }
  if (turn === "O") {
    document.querySelector(".player2").style.backgroundColor = "#99DFDC";
    document.querySelector(".player1").style.backgroundColor = "#fdfd96";
  }
};

// initialise to show player 1 goes first
document.querySelector(".player2").style.backgroundColor = "#99DFDC";
document.querySelector(".player1").style.backgroundColor = "#fdfd96";

var highlightWinCom = function(indexes) {
  // [0,1,2]
  indexes.forEach(function(index) {
    var squares = document.querySelectorAll(".square");
    squares[index].style.backgroundColor = "#76DE76";
  });
};
var highlightDraw = function() {
  allSquares.forEach(function(square) {
    square.style.backgroundColor = "#fdfd96";
  });
};

// here are all my event listeners

topLeftBox.addEventListener("click", playTurn);

topMidBox.addEventListener("click", playTurn);

topRightBox.addEventListener("click", playTurn);

midLeftBox.addEventListener("click", playTurn);

midCenterBox.addEventListener("click", playTurn);

midRightBox.addEventListener("click", playTurn);

botLeftBox.addEventListener("click", playTurn);

botMidBox.addEventListener("click", playTurn);

botRightBox.addEventListener("click", playTurn);

// here is the event listeners for the buttons

resetBtn.addEventListener("click", resetBoardBtn);
newGameBtn.addEventListener("click", newGame);
