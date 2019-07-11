var allSquares = document.querySelectorAll('.square')

// Top Row
var topLeftBox = document.querySelector('.box-top.top-left')
var topMidBox = document.querySelector('.box-top.top-middle')
var topRightBox = document.querySelector('.box-top.top-right')

// Middle Row
var midLeftBox = document.querySelector('.box-middle.mid-left')
var midCenterBox = document.querySelector('.box-middle.mid-mid')
var midRightBox = document.querySelector('.box-middle.mid-right')

// Bottom Row
var botLeftBox = document.querySelector('.box-bottom.bot-left')
var botMidBox = document.querySelector('.box-bottom.bot-mid')
var botRightBox = document.querySelector('.box-bottom.bot-right')

// Display Winner Functions 
p1Score = document.querySelector('.p1-games-won')
p2Score = document.querySelector('.p2-games-won')

whoWon = document.querySelector('.header-heading')

var originalH1 = function () {
  document.querySelector('.header-heading').textContent = 'Tic Tac Toe'
  document.querySelector('.header-heading').style.backgroundColor = 'mistyrose'
}

var displayPlayer1Win = function () {
  whoWon.textContent = 'Player 1 Wins'
  
  document.querySelector('.header-heading').style.backgroundColor = '#76DE76'
  setTimeout(originalH1, 1000);
}

var displayPlayer2Win = function () {
  whoWon.textContent = 'Player 2 Wins'
  document.querySelector('.header-heading').style.backgroundColor = '#76DE76'
  setTimeout(originalH1, 1000);
}

var displayDraw = function () {
  whoWon.textContent = 'Draw'
  document.querySelector('.header-heading').style.backgroundColor = '#fdfd96'
  setTimeout(originalH1, 1000);
}

// here I am going to create the reset part of the game by selecting all the boxes and putting them into a reset function 

var topRows = document.querySelectorAll('.box-top')
var midRows = document.querySelectorAll('.box-middle')
var botRows = document.querySelectorAll('.box-bottom')
var resetBtn = document.querySelector('.reset-button')
var newGameBtn = document.querySelector('.new-game')

var resetBoardBtn = function () {
  allSquares.forEach( function (square) {
    square.style.backgroundColor = '#fea5be'
    square.textContent = ''
  })
  counter = 0
}

var newGame = function () {
  allSquares.forEach( function (square) {
    square.style.backgroundColor = '#fea5be'
    square.textContent = ''
  })
  counter = 0
  p1Score.textContent = 0
  p2Score.textContent = 0
}

var resetBoard = function () {
  allSquares.forEach( function (square) {
    square.style.backgroundColor = '#fea5be'
    square.textContent = ''
  })
  counter = 0
}

// here I have added the winning combinations into an array as well as the rules

var board = document.querySelectorAll('.square')

var winCombinations = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

playersWinCombinations = []

counter = 0

var highlightWinCom = function (indexes) { // [0,1,2]

 indexes.forEach( function (index) {

  var squares = document.querySelectorAll('.square')
  squares[index].style.backgroundColor = '#76DE76'
 }) 
}

var highlightDraw = function () {
  allSquares.forEach( function (square) {
    square.style.backgroundColor = '#fdfd96'
  })
}

var checkWin = function () {
  // console.log("Hello darkness my old friend");
  winCombinations.forEach( function (winCombination) {
    // winCombination is referencing each index value of the arrays within the array in the winCombinations Variable and checking to see if it contains a X allowing me for future to add more winning combinations when i increase the arrays
    if (board[winCombination[0]].innerHTML === 'X' && 
    board[winCombination[1]].innerHTML === 'X' &&
    board[winCombination[2]].innerHTML === 'X'
    ) { 
      p1Score.textContent = Number(p1Score.textContent) + 1
      displayPlayer1Win()
      highlightWinCom(winCombination)
      setTimeout(resetBoard, 1000)
    } else if (board[winCombination[0]].innerHTML === 'O' &&
    board[winCombination[1]].innerHTML === 'O' &&
    board[winCombination[2]].innerHTML === 'O'
    ) { 
      p2Score.textContent = Number(p2Score.textContent) + 1
      displayPlayer2Win()
      highlightWinCom(winCombination)
      setTimeout(resetBoard, 1000)
    } 
  }) 
  if (counter === 9) {
    displayDraw()
    highlightDraw()
    setTimeout(resetBoard, 1000)
}
}

// these event listeners are for playing naughts or crosses

var turn = "X"

//  if (turn === 'X') {
//     document.querySelector('.player1').style.backgroundColor = '#76DE76'
//   } else if (turn === 'O') {
//     document.querySelector('.player2').style.backgroundColor = '#76DE76'
//   }


var playTurn = function (event) {
  // check if the box is empty
  if (event.target.textContent !== "") {
    return
  }
  counter += 1
  if (turn === 'X') {
    event.target.textContent = 'X'
    setTimeout(checkWin, 1000)
    turn = 'O'
  } else if (turn === 'O') {
    event.target.textContent = 'O'
    setTimeout(checkWin, 1000)
    turn = 'X'
  } 
}



topLeftBox.addEventListener('click', playTurn)

topMidBox.addEventListener('click', playTurn)

topRightBox.addEventListener('click', playTurn)

midLeftBox.addEventListener('click', playTurn)

midCenterBox.addEventListener('click', playTurn)

midRightBox.addEventListener('click', playTurn)

botLeftBox.addEventListener('click', playTurn)

botMidBox.addEventListener('click', playTurn)

botRightBox.addEventListener('click', playTurn)

// here is the event listeners for the buttons 

resetBtn.addEventListener('click', resetBoardBtn)
newGameBtn.addEventListener('click', newGame)

// function () {
//   if (turn === 'X') {
//     botRightBox.textContent = 'X'
//     setTimeout(checkWin, 1000)
//     turn = 'O'
//   } else if (turn === 'O') {
//     botRightBox.textContent = 'O'
//     setTimeout(checkWin, 1000)
//     turn = 'X'
//   }
// })