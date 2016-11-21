// Start with a fresh board - 3 rows; 3 tiles per row. 
// See whose turn it is to play.
// Check to see which tiles have been clicked each round. 
    // If the tile that is being clicked has already been selected, alert player
// If the tile has not been selected, render the move
// Check to see if win condition is met each round.
    // Win conditions can be met vertically, horizontally, or diagonally
    // Ties also need to be checked 
    // If win condition is met, alert player
// Make a reset board function 


console.log('loaded...baked potato');

// empty array to hold all game objects 
var gameBoard = function() {}; 

// This is the winner (x or o) as determined by isWon function
var winner;
// This sets the game as not having been won yet - allowing the players' click functions to fire 
var gameWon = false; 
// This sets the game to begin with the player (and not the computer)
var playerOneTurn = true; 

// This function adds a handler to the game board to address moves. 
gameBoard.moveHandler = function (tile) {
  var scope = this;
  // When the player clicks on a tile (td)
  $('td').on('click', function(e) {
    e.preventDefault();
    // look at the tile that was clicked. Check to see if the tile is empty - if it is and the game has not been won, kick an alert
    var tile = $(e.target);
    if ((tile.text() !== '') && (gameWon == false)) { 
      alert("Oops! Choose again - that tile has already been taken");
      // if the tile is empty and the game has not been won, register the move and allow the computer some time for its move.
    } else if ((tile.text() == '') && (gameWon == false)) {  
      scope.renderMove(tile);
      setTimeout(scope.randomizeMove, 800);
    };
  });
}

// This function handles the computer logic. Which at this point is stupid. 
gameBoard.randomizeMove = function () {
  // Sets a number no higher than the number of the empty tiles so we have something to draw on
  var emptytiles = $('.tile').not('.marked').length;
  // Randomizes the number
  var randomNum = Math.floor(Math.random () * emptytiles);
  // Grabs the tile that matches that random number
  var randomtile = $('.tile').not('.marked').eq(randomNum);
  // If the game has not yet been won and it is not Player One's turn...
  if ( (gameWon == false) && (playerOneTurn == false) ) {
    // register the move by adding the text 
    randomtile.text('O').addClass('marked o');
    // kick the turn over to the player
    playerOneTurn = true;
    // see if anyone has won yet 
    gameBoard.checkGameStatus();
  };
};

// This function puts the moves on the page. 
gameBoard.renderMove = function (tile) {
  // If it's Player One's turn, add an X + the marked class
  if (playerOneTurn == true) {
    tile.append('X').addClass('marked x');
    // switch over to the computer
    playerOneTurn = false;
    // Check to see if anyone has won yet
    this.checkGameStatus();
  };
};

// This function checks to see if anyone has won yet & alerts the lucky player
gameBoard.checkGameStatus = function (turn) {
  this.isWon();
    // if the game has been won by X, alert
    if (gameWon == true && (winner == 'X')) {
      alert("You are so good at this!");
    // else, the computer (O) has won, alert 
    } else if (gameWon == true && (winner == 'O')) {
      alert("Why did you let the computer win?")
    };
};

// win conditions. This checks each individual tile to see if the text in each matches 
gameBoard.isWon = function () { 
  // These are the tiles
  var tile1 = $('#sq0').text();
  var tile2 = $('#sq1').text();
  var tile3 = $('#sq2').text();
  var tile4 = $('#sq3').text();
  var tile5 = $('#sq4').text();
  var tile6 = $('#sq5').text();
  var tile7 = $('#sq6').text();
  var tile8 = $('#sq7').text();
  var tile9 = $('#sq8').text();

  // Checks the rows to see if there is a winner
  if ((tile1 !== '') && (tile1==tile2) && (tile2==tile3)) { 
    winner = tile1; 
    gameWon = true; 
  } else if ((tile4 !== '') && (tile4==tile5) && (tile5==tile6)) { 
    winner = tile4; 
    gameWon = true; 
  } else if ((tile7 !== '') && (tile7==tile8) && (tile8==tile9)) { 
    winner = tile7; 
    gameWon = true; 
    // Checks the columns to see if there is a winner
  } else if ((tile1 !== '') && (tile1==tile4) && (tile4==tile7)) { 
    winner = tile1; 
    gameWon = true; 
  } else if ((tile2 !== '') && (tile2==tile5) && (tile5==tile8)) { 
    winner = tile2; 
    gameWon = true; 
  } else if ((tile3 !== '') && (tile3==tile6) && (tile6==tile9)) { 
    winner = tile3; 
    gameWon = true; 
    // Checks the diagonals to see if there is a winner
  } else if ((tile1 !== '') && (tile1==tile5) && (tile5==tile9)) { 
    winner = tile1; 
    gameWon = true; 
  } else if ((tile3 !== '') && (tile3==tile5) && (tile5==tile7)) { 
    winner = tile3; 
    gameWon = true; 
    // What to do if there is a tie
  } else if (($('.tile.marked').length == 9) && gameWon == false) { 
    alert("Miracle of all miracles -- It's a tie!!"); 
    winner = ''; 
    gameWon = true;
    // if no win or tie states have been reached, keep playing! 
  } else { 
    winner = ''; 
    gameWon = false; 
  };
};

// This function clears the board at the click of the button 
gameBoard.clearBoard = function () {
  var scope = this;
  // When you click the button, remove the marked classes from each tile and empty text
  $('button').on('click', function() {
    $('td').empty().removeClass('marked x o');
    // set the game as not being won and the player as Player One
    gameWon = false;
    if (playerOneTurn == false) {
      playerOneTurn = true;
    };
  });
};

// This function initializes the game and sets the game start up
gameBoard.init =function () {
  this.moveHandler();
  this.clearBoard();
}

// ************
// Calls initialize the game board on load
$(function() {
gameBoard.init();
});
