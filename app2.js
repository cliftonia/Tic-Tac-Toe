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
}

var displayPlayer1Win = function () {
  whoWon.textContent = 'Player 1 Wins'
  setTimeout(originalH1, 1000);
}

var displayPlayer2Win = function () {
  whoWon.textContent = 'Player 2 Wins'
  setTimeout(originalH1, 1000);
}

// here I am going to create the reset part of the game by selecting all the boxes and putting them into a reset function 

var topRows = document.querySelectorAll('.box-top')
var midRows = document.querySelectorAll('.box-middle')
var botRows = document.querySelectorAll('.box-bottom')
var resetBtn = document.querySelector('.reset-button')

var resetBoardBtn = function () {
  topRows.forEach( function (row) { row.textContent = ''}) 
  midRows.forEach( function (row) { row.textContent = ''}) 
  botRows.forEach( function (row) { row.textContent = ''})
}

var resetBoard = function () {
  topRows.forEach( function (row) { row.textContent = ''}) 
  midRows.forEach( function (row) { row.textContent = ''}) 
  botRows.forEach( function (row) { row.textContent = ''})
}

// here I have added the winning combinations into an array as well as the rules

var board = document.querySelectorAll('.square')

var winCombo = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]


var checkWin = function () {
  winCombo.forEach( function (winCom) {
    if (board[winCom[0]].innerHTML === 'X' && // winCom is referencing each index value of the arrays within the array in the winCombo Variable and checking to see if it contains a X allowing me for future to add more winning combinations when i increase the arrays
    board[winCom[1]].innerHTML === 'X' &&
    board[winCom[2]].innerHTML === 'X'
    ) { 
      displayPlayer1Win()
      p1Score.textContent = Number(p1Score.textContent) + 1
      resetBoard()
    } else if (board[winCom[0]].innerHTML === 'O' &&
    board[winCom[1]].innerHTML === 'O' &&
    board[winCom[2]].innerHTML === 'O'
    ) { 
      displayPlayer2Win()
      p2Score.textContent = Number(p2Score.textContent) + 1
      resetBoard()
    } 
  }) 
}

// these event listeners are for playing naughts or crosses

var turn = "X"

topLeftBox.addEventListener('click', function () {
  if (turn === 'X') {
    topLeftBox.textContent = 'X'
    setTimeout(checkWin, 1000)
    turn = 'O'
  } else if (turn === 'O') {
    topLeftBox.textContent = 'O'
    setTimeout(checkWin, 1000)
    turn = 'X'
  }
})

topMidBox.addEventListener('click', function () {
  if (turn === 'X') {
    topMidBox.textContent = 'X'
    setTimeout(checkWin, 1000)
    turn = 'O'
  } else if (turn === 'O') {
    topMidBox.textContent = 'O'
    setTimeout(checkWin, 1000)
    turn = 'X'
  }
})

topRightBox.addEventListener('click', function () {
  if (turn === 'X') {
    topRightBox.textContent = 'X'
    setTimeout(checkWin, 1000)
    turn = 'O'
  } else if (turn === 'O') {
    topRightBox.textContent = 'O'
    setTimeout(checkWin, 1000)
    turn = 'X'
  }
})

midLeftBox.addEventListener('click', function () {
  if (turn === 'X') {
    midLeftBox.textContent = 'X'
    setTimeout(checkWin, 1000)
    turn = 'O'
  } else if (turn === 'O') {
    midLeftBox.textContent = 'O'
    setTimeout(checkWin, 1000)
    turn = 'X'
  }
})

midCenterBox.addEventListener('click', function () {
  if (turn === 'X') {
    midCenterBox.textContent = 'X'
    setTimeout(checkWin, 1000)
    turn = 'O'
  } else if (turn === 'O') {
    midCenterBox.textContent = 'O'
    setTimeout(checkWin, 1000)
    turn = 'X'
  }
})

midRightBox.addEventListener('click', function () {
  if (turn === 'X') {
    midRightBox.textContent = 'X'
    setTimeout(checkWin, 1000)
    turn = 'O'
  } else if (turn === 'O') {
    midRightBox.textContent = 'O'
    setTimeout(checkWin, 1000)
    turn = 'X'
  }
})

botLeftBox.addEventListener('click', function () {
  if (turn === 'X') {
    botLeftBox.textContent = 'X'
    setTimeout(checkWin, 1000)
    turn = 'O'
  } else if (turn === 'O') {
    botLeftBox.textContent = 'O'
    setTimeout(checkWin, 1000)
    turn = 'X'
  }
})

botMidBox.addEventListener('click', function () {
  if (turn === 'X') {
    botMidBox.textContent = 'X'
    setTimeout(checkWin, 1000)
    turn = 'O'
  } else if (turn === 'O') {
    botMidBox.textContent = 'O'
    setTimeout(checkWin, 1000)
    turn = 'X'
  }
})

botRightBox.addEventListener('click', function () {
  if (turn === 'X') {
    botRightBox.textContent = 'X'
    setTimeout(checkWin, 1000)
    turn = 'O'
  } else if (turn === 'O') {
    botRightBox.textContent = 'O'
    setTimeout(checkWin, 1000)
    turn = 'X'
  }
})

// here is the event listeners for the buttons 

resetBtn.addEventListener('click', resetBoardBtn)