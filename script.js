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
  let turn = 0;

  const player1 = playerX('Player X');
  log(player1.mark);
  log(player1.name);

  const player2 = playerO('Player O');
  log(player2.mark);
  log(player2.name);

  //cache DOM
  let cells = document.querySelectorAll('[data-index]');

  // render
  // function render() {}

  // pass a parameter in markboard so it knows its this players turn

  // bind events
  cells.forEach((cell) => {
    cell.addEventListener('click', markBoard);
    log(cell);
  });

  function playersTurn() {
    if (turn % 2 === 0 && cells !== player1.mark) {
      turn++;
      return player1.mark;
    } else {
      turn++;
      return player2.mark;
    }
  }

  function markBoard(e) {
    let boxValue = e.target.dataset.index;
    let cell = cells[boxValue];
    displayBoard.push(boxValue);
    boxValue = playersTurn();
    displayBoard.splice(displayBoard.indexOf(displayBoard), 1, boxValue);
    cell.textContent = boxValue;

    // checkWinner();
    log(displayBoard);
    log(cell);
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
