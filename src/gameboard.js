/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
/* eslint-disable no-continue */
import ShipModule from "./ship";
import Graph from "./DS_Graph";
import DOMHandler from "./DOMHandler";

function GameboardModule() {
  const board = new Graph();
  const ships = [];
  const missingShots = [];
  const shots = [];

  // Create 10x10 cells as graph vertexes
  function createCells() {
    for (let i = 1; i < 11; i += 1) {
      for (let j = 1; j < 11; j += 1) {
        board.addVertex(i, j);
      }
    }
  }

  // Find the vertex object matching the given coordinates
  function findVertextObjectByCoordinates(coordinates) {
    // console.log(coordinates);
    const foundVertex = board.vertices.find(
      (vertex) =>
        JSON.stringify(vertex.coordinates) === JSON.stringify(coordinates),
    );

    if (foundVertex) {
      return foundVertex;
    }
    return null;
  }

  // Fill out adjacencyList for a vertex
  function addCellAdjacencies(vertex) {
    const y = vertex.coordinates[0];
    const x = vertex.coordinates[1];
    const potentialAdjacencies = [
      [y - 1, x - 1],
      [y - 1, x],
      [y - 1, x + 1],
      [y, x - 1],
      [y, x + 1],
      [y + 1, x - 1],
      [y + 1, x],
      [y + 1, x + 1],
    ];
    const adjacencies = [];
    potentialAdjacencies.forEach((adjacency) => {
      if (
        adjacency[0] > 0 &&
        adjacency[0] <= 10 &&
        adjacency[1] > 0 &&
        adjacency[1] <= 10
      ) {
        const adjacencyObject = findVertextObjectByCoordinates(adjacency);
        adjacencies.push(adjacencyObject);
      }
    });
    return adjacencies;
  }

  // Fill out adjacencyList for each cell vertex
  function createAdjacencies() {
    board.vertices.forEach((vertex) => {
      // eslint-disable-next-line no-param-reassign
      const adjacentVertices = addCellAdjacencies(vertex);
      adjacentVertices.forEach((adjacentVertex) => {
        board.addEdge(vertex, adjacentVertex);
      });
    });
  }

  // Fill the Board array
  function createBoard() {
    createCells();
    createAdjacencies();
  }

  // Fill the Ships array
  function createShips(shipsList) {
    const shipsTemplate = [
      {
        shipLength: 1,
        shipId: 0,
      },
      {
        shipLength: 1,
        shipId: 1,
      },
      {
        shipLength: 1,
        shipId: 2,
      },
      {
        shipLength: 2,
        shipId: 3,
      },
      {
        shipLength: 2,
        shipId: 4,
      },
      {
        shipLength: 3,
        shipId: 5,
      },
      {
        shipLength: 4,
        shipId: 6,
      },
      {
        shipLength: 3,
        shipId: 7,
      },
      {
        shipLength: 2,
        shipId: 8,
      },
      {
        shipLength: 1,
        shipId: 9,
      },
    ];

    // For tests
    let shipsConfig = null;
    if (shipsList) {
      shipsConfig = shipsList;
    } else {
      shipsConfig = shipsTemplate;
    }

    shipsConfig.forEach((element) => {
      const ship = ShipModule.createShip(element.shipLength, element.shipId);
      ships.push(ship);
    });
  }

  // Fill the missingShots array
  function recordMissingShot(coordinates) {
    const missedShotVertex = findVertextObjectByCoordinates(coordinates);
    if (!missingShots.includes(missedShotVertex.coordinates)) {
      missedShotVertex.missShot = true;
      missingShots.push(missedShotVertex.coordinates);
    }
  }

  // Fill the missingShots array
  function recordShot(coordinates) {
    const shotVertex = findVertextObjectByCoordinates(coordinates);
    if (!shots.includes(shotVertex.coordinates)) {
      shots.push(shotVertex.coordinates);
    }
  }

  // Find ship by shipId
  function findShipById(id) {
    let ship = null;
    ships.forEach((s) => {
      if (s.id === parseInt(id)) {
        ship = s;
      }
    });
    return ship;
  }

  function updateAdjacentCells(ship, playerBoardDiv) {
    ship.coordinates.forEach((coordinate) => {
      // console.log(ship);
      // console.log(ship.coordinates);
      // console.log(coordinate);
      const vertex = findVertextObjectByCoordinates(coordinate);
      // console.log(vertex);
      vertex.adjacencyList.forEach((adj) => {
        if (
          adj.missShot === false &&
          adj.missShotNeighbor === false &&
          !missingShots.includes(adj.coordinates) &&
          adj.occupiedByShip === false
        ) {
          adj.missShotNeighbor = true;
          const missedCellDiv = DOMHandler.findDivByCoordinates(
            `${adj.coordinates[0]},${adj.coordinates[1]}`,
            playerBoardDiv,
          );
          missedCellDiv.classList.add("miss-neigbour");
          recordMissingShot(adj.coordinates);
          recordShot(adj.coordinates);
        }
      });
    });
  }

  // Register and process attacks
  function receiveAttack(coordinates, playerBoardDiv) {
    recordShot(coordinates);
    let hitRegistered = false;
    ships.some((ship) => {
      if (
        JSON.stringify(ship.coordinates).includes(JSON.stringify(coordinates))
      ) {
        ship.hit();
        if (ship.isSunk()) {
          DOMHandler.updateSunkShips(ship.coordinates, playerBoardDiv);
          updateAdjacentCells(ship, playerBoardDiv);
        }
        hitRegistered = true;
        return hitRegistered;
      }
      hitRegistered = false;
      return hitRegistered;
    });
    if (!hitRegistered) {
      recordMissingShot(coordinates);
    }
    return hitRegistered;
  }

  // Check if all ships on a board have been sunk
  function allShipsSunk() {
    return ships.every((ship) => ship.isSunk());
  }

  function positionShips() {
    ships.sort((a, b) => b.length - a.length);
    ships.forEach((ship) => {
      const orientation = Math.floor(Math.random() * 2) === 0 ? "v" : "h";
      ship.position = orientation;

      const filteredBoard = board.vertices.filter(
        (obj) => obj.occupied === false,
      );

      if (filteredBoard.length > 0) {
        let positionFound = false;
        while (!positionFound) {
          // eslint-disable-next-line prefer-const
          let position = [];
          // eslint-disable-next-line prefer-const
          let positionCoordinates = [];
          const firstCellIndex = Math.floor(
            Math.random() * filteredBoard.length,
          );
          const firstCellObject = filteredBoard[firstCellIndex];
          positionCoordinates.push(firstCellObject.coordinates);
          position.push(firstCellObject);
          //   console.log(position);
          for (let i = 1; i < ship.length; i += 1) {
            const nextCellObjectCoordinates =
              ship.position === "v"
                ? [
                    firstCellObject.coordinates[0] + i,
                    firstCellObject.coordinates[1],
                  ]
                : [
                    firstCellObject.coordinates[0],
                    firstCellObject.coordinates[1] + i,
                  ];
            // console.log(nextCellObjectCoordinates);
            const nextCellObject = board.vertices.filter(
              (obj) =>
                JSON.stringify(obj.coordinates) ===
                JSON.stringify(nextCellObjectCoordinates),
            );
            // console.log(nextCellObject[0]);
            if (nextCellObject[0]) {
              if (nextCellObject[0].occupied === false) {
                positionCoordinates.push(nextCellObject[0].coordinates);
                position.push(nextCellObject[0]);
              } else {
                continue;
              }
            } else {
              continue;
            }
          }

          if (position.length === ship.length) {
            ship.assignCoordinates(...positionCoordinates);
            ship.setOrientation();

            position.forEach((p) => {
              p.occupied = true;
              p.occupiedByShip = true;
              p.adjacencyList.forEach((adj) => {
                adj.occupied = true;
              });
            });
            positionFound = true;
          }
        }
      }
    });
  }

  return {
    board,
    ships,
    missingShots,
    shots,
    createBoard,
    createShips,
    receiveAttack,
    allShipsSunk,
    positionShips,
    findVertextObjectByCoordinates,
    findShipById,
  };
}

export default GameboardModule;
