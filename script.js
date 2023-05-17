let log = console.log;

// player object
function playerX(name) {
  let player = {
    mark: 'X',
    name,
  };
  return player;
}

function playerO(name) {
  let player = {
    mark: 'O',
    name,
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
  function render(e) {
    displayBoard.push(cells);
    cellOne = displayBoard[0][0];
    cellOne.textContent = 'o';
    log(displayBoard);
    log(cells);
  }

  // bind events
  cells.forEach((button) => {
    button.addEventListener('click', markBoard);
    log(button);
  });

  function markBoard(e) {
    let unMarkedBox = '';
    let boxClicked = e.target.dataset.index;
    log(boxClicked);
    if (boxClicked.clicked) {
      return (boxClicked.innerHTML = player2.mark);
    }
  }

  return {
    cells,
    displayBoard,
    render,
    markBoard,
    player1,
    player2,
  };
})();

gameBoard.render();

// render function

// gameBoard.cells.forEach((e) => {
//   console.log(e.dataset.index);
// });

// console.log(gameBoard.displayBoard);

// restart button
