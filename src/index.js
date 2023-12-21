import "./styles.css";
import GameboardModule from "./gameboard";

const body = document.querySelector("body");
const test = document.createElement("div");
test.textContent = "Hello World!";
body.append(test);

const ships = [
  {
    shipLength: 1,
  },
  {
    shipLength: 2,
  },
  {
    shipLength: 3,
  },
  {
    shipLength: 4,
  },
];

// Two-players script
const playerOneBoard = GameboardModule();
playerOneBoard.createBoard();
playerOneBoard.createShips(ships);

const playerTwoBoard = GameboardModule();
playerTwoBoard.createBoard();
playerTwoBoard.createShips(ships);

// Testing script
// GameboardModule.createBoard();
// GameboardModule.createShips(ships);

// GameboardModule.ships[0].assignCoordinates([1, 1]);
// GameboardModule.ships[1].assignCoordinates([4, 5], [4, 6]);
// GameboardModule.receiveAttack([4, 4]);

// console.log(JSON.stringify(GameboardModule.ships));

// GameboardModule.receiveAttack([4, 5]);

// console.log(GameboardModule.ships);

// console.log(GameboardModule.allShipsSunk());