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

var displayPlayer1Win = function () {
  whoWon = whoWon.textContent = 'Player 1 Wins'
}

var displayPlayer2Win = function () {
  whoWon = whoWon.textContent = 'Player 2 Wins'
}

// Here is where I will create an timeOut function
counter = 0
var timer = document.querySelector('.timer')

var updateDisply = function () {
  // console.log(counter)
  timer.textContent = counter
  counter = counter + 1 
  if (counter > 8) {
    alert('you have run out of time')
    clearInterval(1)
    timer.textContent = 0
  }
}

var startTimer = function () {
  setInterval(updateDisply, 1000);
}

// Buttons
var resetBtn = document.querySelector('.reset-button')

// here I am going to create the reset part of the game by selecting all the boxes and putting them into a reset function 

var topRows = document.querySelectorAll('.box-top')
var midRows = document.querySelectorAll('.box-middle')
var botRows = document.querySelectorAll('.box-bottom')

var resetBoard = function () {
  topRows.forEach( function (row) { row.textContent = ''}) 
  midRows.forEach( function (row) { row.textContent = ''}) 
  botRows.forEach( function (row) { row.textContent = ''})
  crossWinToprow = 0
  crossWinLeftColumn = 0
  crossWinDiagLeft = 0
  crossWinDiagRight = 0
  crossWinBotRow = 0
  crossWinRightColumn = 0
  crossWinMidColumn = 0
  naughtWinTopRow = 0
  naughtWinLeftColumn = 0
  naughtWinDiagLeft = 0
  naughtWinBotRow = 0
  naughtWinRightColumn = 0
  naughtWinMidColumn = 0 
}

var resetBoardBtn = function () {
  topRows.forEach( function (row) { row.textContent = ''}) 
  midRows.forEach( function (row) { row.textContent = ''}) 
  botRows.forEach( function (row) { row.textContent = ''})
  crossWinToprow = 0
  crossWinLeftColumn = 0
  crossWinDiagLeft = 0
  crossWinDiagRight = 0
  crossWinBotRow = 0
  crossWinRightColumn = 0
  crossWinMidColumn = 0
  naughtWinTopRow = 0
  naughtWinLeftColumn = 0
  naughtWinDiagLeft = 0
  naughtWinBotRow = 0
  naughtWinRightColumn = 0
  naughtWinMidColumn = 0 
  document.querySelector('.header-heading').textContent = 'Tic Tac Toe'
}


// Now creating the Functions for the naughts

var turn = 'X'

var naughtArr = []
var crossArr = []

// here I have added a number count to create a winner
var crossWinToprow = 0
var crossWinMidRow = 0
var crossWinBotRow = 0

var crossWinLeftColumn = 0
var crossWinRightColumn = 0
var crossWinMidColumn = 0

var crossWinDiagLeft = 0
var crossWinDiagRight = 0

var naughtWinTopRow = 0
var naughtWinMidRow = 0
var naughtWinBotRow = 0

var naughtWinLeftColumn = 0
var naughtWinMidColumn = 0
var naughtWinRightColumn = 0

var naughtWinDiagLeft = 0
var naughtWinDiagRight = 0

var gameRules = function () {
  if (crossWinToprow === 3) {
    alert('winner')
    resetBoard()
  } else if (crossWinLeftColumn === 3) {
    alert('winner')
    resetBoard()
  } else if (crossWinDiagLeft === 3) {
    alert('winner')
    resetBoard()
  } else if (crossWinBotRow === 3) {
    alert('winner')
    resetBoard()
  } else if (crossWinRightColumn === 3) {
    alert('winner')
    resetBoard()
  } else if (crossWinMidColumn === 3) {
    alert('winner')
    resetBoard()
  } else if (naughtWinTopRow === 3) {
    alert('winner')
    resetBoard()
  } else if (naughtWinLeftColumn === 3) {
    alert('winner')
    resetBoard()
  } else if (naughtWinDiagLeft === 3) {
    alert('winner')
    resetBoard()
  } else if (naughtWinBotRow === 3) {
    alert('winner')
    resetBoard()
  } else if (naughtWinRightColumn === 3) {
    alert('winner')
    resetBoard()
  } else if (naughtWinMidColumn === 3) {
    alert('winner')
    resetBoard()
  }
}

// Here where all my Listen for events are placed

// store all the divs inside of an array for the ai to play
// topLeftBox = push('x1')
// TopRowWinComb = ['x1','x2','x3']
// TopRowWinComb.length = 3 || ['x1','x2','x3'].join()


// these event listeners are for playing naughts or crosses

topLeftBox.addEventListener('click', function () {
  if (turn === 'X') {
    topLeftBox.textContent = 'X'
    crossArr.push('x1')
    crossWinToprow += 1
    crossWinLeftColumn += 1
    crossWinDiagLeft += 1
    if (crossWinToprow === 3) {
      displayPlayer1Win()
      p1Score.textContent = Number(p1Score.textContent) + 1
      resetBoard()
    } else if (crossWinLeftColumn === 3) {
      displayPlayer1Win()
      p1Score.textContent = Number(p1Score.textContent) + 1
      resetBoard()
    } else if (crossWinDiagLeft === 3) {
      displayPlayer1Win()
      p1Score.textContent = Number(p1Score.textContent) + 1
      resetBoard()
    }
    turn = 'O'
  } else if (turn === 'O') {
    topLeftBox.textContent = 'O'
    naughtArr.push('O1')
    naughtWinTopRow += 1
    naughtWinLeftColumn += 1
    naughtWinDiagLeft += 1
    if (naughtWinTopRow === 3) {
      displayPlayer2Win()
      p2Score.textContent = Number(p2Score.textContent) + 1
      resetBoard()
    } else if (naughtWinLeftColumn === 3) {
      displayPlayer2Win()
      p2Score.textContent = Number(p2Score.textContent) + 1
      resetBoard()
    } else if (naughtWinDiagLeft === 3) {
      displayPlayer2Win()
      p2Score.textContent = Number(p2Score.textContent) + 1
      resetBoard()
    }
    turn = 'X'
  }
})

topMidBox.addEventListener('click', function () {
  if (turn === 'X') {
    topMidBox.textContent = 'X'
    crossArr.push('x2')
    crossWinToprow += 1
    crossWinMidColumn += 1
    if (crossWinToprow === 3) {
      displayPlayer1Win()
      p1Score.textContent = Number(p1Score.textContent) + 1
      resetBoard()
    } else if (crossWinMidColumn === 3) {
      displayPlayer1Win()
      p1Score.textContent = Number(p1Score.textContent) + 1
      resetBoard()
    } 
    turn = 'O'
  } else if (turn === 'O') {
    topMidBox.textContent = 'O'
    naughtArr.push('O2')
    naughtWinTopRow += 1
    naughtWinMidColumn += 1
    if (naughtWinTopRow === 3) {
      displayPlayer2Win()
      p2Score.textContent = Number(p2Score.textContent) + 1
      resetBoard()
    } else if (naughtWinMidColumn === 3) {
      displayPlayer2Win()
      p2Score.textContent = Number(p2Score.textContent) + 1
      resetBoard()
    }
    turn = 'X'
  }
})

topRightBox.addEventListener('click', function () {
  if (turn === 'X') {
    topRightBox.textContent = 'X'
    crossArr.push('x3')
    crossWinToprow += 1
    crossWinRightColumn += 1
    crossWinDiagRight += 1
    if (crossWinToprow === 3) {
      displayPlayer1Win()
      p1Score.textContent = Number(p1Score.textContent) + 1
      resetBoard()
    } else if (crossWinRightColumn === 3) {
      displayPlayer1Win()
      p1Score.textContent = Number(p1Score.textContent) + 1
      resetBoard()
    } else if (crossWinDiagRight === 3) {
      displayPlayer1Win()
      p1Score.textContent = Number(p1Score.textContent) + 1
      resetBoard()
    }
    turn = 'O'
  } else if (turn === 'O') {
    topRightBox.textContent = 'O'
    naughtArr.push('O3')
    naughtWinTopRow += 1
    naughtWinRightColumn += 1
    naughtWinDiagRight += 1
    if (naughtWinTopRow === 3) {
      displayPlayer2Win()
      p2Score.textContent = Number(p2Score.textContent) + 1
      resetBoard()
    } else if (naughtWinRightColumn === 3) {
      displayPlayer2Win()
      p2Score.textContent = Number(p2Score.textContent) + 1
      resetBoard()
    } else if (naughtWinDiagRight === 3) {
      displayPlayer2Win()
      p2Score.textContent = Number(p2Score.textContent) + 1
      resetBoard()
    }
    turn = 'X'
  }
})

midLeftBox.addEventListener('click', function () {
  if (turn === 'X') {
    midLeftBox.textContent = 'X'
    crossArr.push('x4')
    crossWinLeftColumn += 1
    crossWinMidRow +=1
    if (crossWinLeftColumn === 3) {
      displayPlayer1Win()
      p1Score.textContent = Number(p1Score.textContent) + 1
      resetBoard()
    } 
    turn = 'O'
  } else if (turn === 'O') {
    midLeftBox.textContent = 'O'
    naughtArr.push('O4')
    naughtWinLeftColumn += 1
    naughtWinMidRow += 1
    if (naughtWinLeftColumn === 3) {
      displayPlayer2Win()
      p2Score.textContent = Number(p2Score.textContent) + 1
      resetBoard()
    } else if (crossWinMidRow === 3) {
      displayPlayer2Win()
      p1Score.textContent = Number(p1Score.textContent) + 1
      resetBoard()
    } else if (naughtWinMidRow === 3) {
      displayPlayer2Win()
      p2Score.textContent = Number(p2Score.textContent) + 1
      resetBoard()
    }
    turn = 'X'
  }
})

midCenterBox.addEventListener('click', function () {
  if (turn === 'X') {
    midCenterBox.textContent = 'X'
    crossArr.push('x5')
    crossWinDiagLeft += 1
    crossWinMidRow += 1
    crossWinMidColumn += 1
    crossWinDiagRight += 1
    if (crossWinDiagLeft === 3) {
      displayPlayer1Win()
      p1Score.textContent = Number(p1Score.textContent) + 1
      resetBoard()
    } else if (crossWinMidColumn === 3) {
      displayPlayer1Win()
      p1Score.textContent = Number(p1Score.textContent) + 1
      resetBoard()
    } else if (crossWinDiagRight === 3) {
      displayPlayer1Win()
      p1Score.textContent = Number(p1Score.textContent) + 1
      resetBoard()
    } else if (crossWinMidRow === 3) {
      displayPlayer1Win()
      p1Score.textContent = Number(p1Score.textContent) + 1
      resetBoard()
    }
    turn = 'O'
  } else if (turn === 'O') {
    midCenterBox.textContent = 'O'
    naughtArr.push('O5')
    naughtWinMidRow += 1
    naughtWinDiagLeft += 1
    naughtWinMidColumn += 1
    naughtWinDiagRight += 1
    if (naughtWinDiagLeft === 3) {
      displayPlayer2Win()
      p2Score.textContent = Number(p2Score.textContent) + 1
      resetBoard()
    } else if (naughtWinMidColumn === 3) {
      displayPlayer2Win()
      p2Score.textContent = Number(p2Score.textContent) + 1
      resetBoard()
    } else if (naughtWinDiagRight === 3) {
      displayPlayer2Win()
      p2Score.textContent = Number(p2Score.textContent) + 1
      resetBoard()
    } else if (naughtWinMidRow === 3) {
      displayPlayer2Win()
      p2Score.textContent = Number(p2Score.textContent) + 1
      resetBoard()
    }
    turn = 'X'
  }
})

midRightBox.addEventListener('click', function () {
  if (turn === 'X') {
    midRightBox.textContent = 'X'
    crossArr.push('x6')
    crossWinRightColumn += 1
    crossWinMidRow +=1
    if (crossWinRightColumn === 3) {
      displayPlayer1Win()
      p1Score.textContent = Number(p1Score.textContent) + 1
      resetBoard()
    } else if (crossWinMidRow === 3) {
      displayPlayer1Win()
      p1Score.textContent = Number(p1Score.textContent) + 1
      resetBoard()
    }
    turn = 'O'
  } else if (turn === 'O') {
    midRightBox.textContent = 'O'
    naughtArr.push('O6')
    naughtWinRightColumn += 1
    naughtWinMidRow += 1
    if (naughtWinRightColumn === 3) {
      displayPlayer2Win()
      p2Score.textContent = Number(p2Score.textContent) + 1
      resetBoard()
    } else if (naughtWinMidRow === 3) {
      displayPlayer2Win()
      p2Score.textContent = Number(p2Score.textContent) + 1
      resetBoard()
    }
    turn = 'X'
  }
})

botLeftBox.addEventListener('click', function () {
  if (turn === 'X') {
    botLeftBox.textContent = 'X'
    crossArr.push('x7')
    crossWinLeftColumn += 1
    crossWinBotRow += 1
    crossWinDiagRight += 1
    if (crossWinLeftColumn === 3) {
      displayPlayer1Win()
      p1Score.textContent = Number(p1Score.textContent) + 1
      resetBoard()
    } else if (crossWinBotRow === 3) {
      displayPlayer1Win()
      p1Score.textContent = Number(p1Score.textContent) + 1
      resetBoard()
    } else if (crossWinDiagRight === 3) {
      displayPlayer1Win()
      p1Score.textContent = Number(p1Score.textContent) + 1
      resetBoard()
    }
    turn = 'O'
  } else if (turn === 'O') {
    botLeftBox.textContent = 'O'
    naughtArr.push('O7')
    naughtWinLeftColumn += 1
    naughtWinBotRow += 1
    naughtWinDiagRight += 1
    if (naughtWinLeftColumn === 3) {
      displayPlayer2Win()
      p2Score.textContent = Number(p2Score.textContent) + 1
      resetBoard()
    } else if (naughtWinBotRow === 3) {
      displayPlayer2Win()
      p2Score.textContent = Number(p2Score.textContent) + 1
      resetBoard()
    } else if (naughtWinDiagRight === 3) {
      displayPlayer2Win()
      p2Score.textContent = Number(p2Score.textContent) + 1
      resetBoard()
    }
    turn = 'X'
  }
})

botMidBox.addEventListener('click', function () {
  if (turn === 'X') {
    botMidBox.textContent = 'X'
    crossArr.push('x8')
    crossWinBotRow += 1
    crossWinMidRow += 1
    crossWinMidColumn += 1
    if (crossWinBotRow === 3) {
      displayPlayer1Win()
      p1Score.textContent = Number(p1Score.textContent) + 1
      resetBoard()
    } else if (crossWinMidColumn === 3) {
      displayPlayer1Win()
      p1Score.textContent = Number(p1Score.textContent) + 1
      resetBoard()
    }
    turn = 'O'
  } else if (turn === 'O') {
    botMidBox.textContent = 'O'
    naughtArr.push('O8')
    naughtWinBotRow += 1
    naughtWinMidColumn += 1
    if (naughtWinBotRow === 3) {
      displayPlayer2Win()
      p2Score.textContent = Number(p2Score.textContent) + 1
      resetBoard()
    } else if (naughtWinMidColumn === 3) {
      displayPlayer2Win()
      p2Score.textContent = Number(p2Score.textContent) + 1
      resetBoard()
    }
    turn = 'X'
  }
})

botRightBox.addEventListener('click', function () {
  if (turn === 'X') {
    botRightBox.textContent = 'X'
    crossArr.push('x9')
    crossWinBotRow += 1
    crossWinDiagLeft += 1
    crossWinRightColumn += 1
    if (crossWinDiagLeft === 3) {
      displayPlayer1Win()
      p1Score.textContent = Number(p1Score.textContent) + 1
      resetBoard()
    } else if (crossWinBotRow === 3) {
      displayPlayer1Win()
      p1Score.textContent = Number(p1Score.textContent) + 1
      resetBoard()
    } else if (crossWinRightColumn === 3) {
      displayPlayer1Win()
      p1Score.textContent = Number(p1Score.textContent) + 1
      resetBoard()
    }
    turn = 'O'
  } else if (turn === 'O') {
    botRightBox.textContent = 'O'
    naughtArr.push('O9')
    naughtWinBotRow += 1
    naughtWinDiagLeft += 1
    naughtWinRightColumn += 1
    if (naughtWinDiagLeft === 3) {
      displayPlayer2Win()
      p2Score.textContent = Number(p2Score.textContent) + 1
      resetBoard()
    } else if (naughtWinBotRow === 3) {
      displayPlayer2Win()
      p2Score.textContent = Number(p2Score.textContent) + 1
      resetBoard()
    } else if (naughtWinRightColumn === 3) {
      displayPlayer2Win()
      p2Score.textContent = Number(p2Score.textContent) + 1
      resetBoard()
    }
    turn = 'X'
  }
})

// below are my event listeners for the buttons 

resetBtn.addEventListener('click', resetBoardBtn)
