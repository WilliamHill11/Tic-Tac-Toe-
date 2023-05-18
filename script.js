let log = console.log;

// player object
function playerX(name) {
  let player = {
    mark: 'X',
    name,
    turn: true,
  };
  return player;
}

function playerO(name) {
  let player = {
    mark: 'O',
    name,
    turn: false,
  };
  return player;
}

// gameBoard object
const gameBoard = (function () {
  let displayBoard = [];

  const player1 = playerX('Player X');
  log(player1.mark);
  log(player1.name);

  const player2 = playerO('Player O');
  log(player2.mark);
  log(player2.name);

  //cache DOM
  const cells = document.querySelectorAll('[data-index]');

  //render
  // function render() {
  //   cellOne = displayBoard[0][0];
  //   cellOne.textContent = player1.mark;
  //   log(displayBoard);

  // }

  // bind events
  cells.forEach((box) => {
    box.addEventListener('click', markBoard);
    log(box);
  });

  function whichPlayersTurn() {}

  function markBoard(e) {
    let unMarkedBox = '';
    let boxClicked = e.target.dataset.index;
    displayBoard.push(boxClicked);
    log(displayBoard);
    let cellTwo = cells[boxClicked];
    displayBoard.splice(displayBoard.indexOf(displayBoard), 1, player1.mark);
    boxClicked = player1.mark;
    cellTwo.textContent = boxClicked;
    log(cellTwo);
  }

  // function winCondition() {
  //   if (null === ['x', 'x', 'x',
  //                 'o', 'o', 'o'])
  // }

  return {
    // cells,
    // displayBoard,
    // render,
    // markBoard,
    // player1,
    // player2,
  };
})();

// gameBoard.render();

// render function

// gameBoard.cells.forEach((e) => {
//   console.log(e.dataset.index);
// });

// console.log(gameBoard.displayBoard);

// restart button
