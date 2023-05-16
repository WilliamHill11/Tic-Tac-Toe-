// player object

let log = console.log;

// gameBoard object
const gameBoard = (function () {
  let displayBoard = [];

  //cache DOM
  const cells = document.querySelectorAll('.cell');
  const dataAttribute = document.querySelectorAll(['data-index']);
  log(dataAttribute);

  //render
  function render() {
    displayBoard.push(cells);
    cellOne = displayBoard[0][0];
    cellOne.textContent = 'o';
    log(displayBoard);
  }

  //bind events
  // cells.forEach((button) => {
  //   button.addEventListener('click', markBoard);
  // });

  // function markBoard(e) {
  //   cells.indexOf(e.dataset.index);
  // }

  return {
    cells,
    displayBoard,
    render,
  };
})();

gameBoard.render();

// render function

// gameBoard.cells.forEach((e) => {
//   console.log(e.dataset.index);
// });

// console.log(gameBoard.displayBoard);

// restart button
