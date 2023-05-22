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
  let activePlayer = document.querySelector('.playersTurn');

  // bind events
  cells.forEach((cell) => {
    cell.addEventListener('click', markBoard);
    log(cell);
  });

  function playersTurn() {
    if (turn % 2 === 0) {
      turn++;
      activePlayer.textContent = 'Turn: Player O';
      return player1.mark;
    } else {
      turn++;
      activePlayer.textContent = 'Turn: Player X';
      return player2.mark;
    }
  }

  function markBoard(e) {
    let boxValue = parseInt(e.target.dataset.index);
    let cell = cells[boxValue];
    log(boxValue);
    displayBoard.splice(boxValue, 0, displayBoard);
    boxValue = playersTurn();
    displayBoard.splice(displayBoard.indexOf(displayBoard), 1, boxValue);
    cell.textContent = boxValue;
    cell.classList.add('noMore');

    function checkWinner(array, element, indexes) {
      const occurrences = indexes.filter((index) => array[index] === element);

      return occurrences.length === 3;
    }
    log(displayBoard);
    const elementToCheck = 'X';
    const indexesToCheck = [
      [0, 1, 2],
      [0, 3, 6],
    ]; // Indexes to check for the element
    const hasThreeOccurrences = checkWinner(
      displayBoard,
      elementToCheck,
      indexesToCheck
    );

    console.log(hasThreeOccurrences); // Output: true
  }

  const checkWinner = (fieldIndex) => {
    const winConditions = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [3, 4, 5],
      [6, 7, 8],
    ];
  };

  return {
    // cell,
    // cells,
    // displayBoard,
    // render,
    // markBoard,
    // player1,
    // player2,
  };
})();

// restart button
