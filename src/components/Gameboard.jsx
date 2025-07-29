import { useState } from "react";
let board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const Gameboard = ({ gameTurns, activePlayer, playerToggle }) => {
  gameTurns.length > 0 &&
    gameTurns.forEach((val) => {
      board[val.square["row"]][val.square["column"]] = val.player;
    });

  return (
    <ol id="game-board">
      {board.map((row, i) => {
        return (
          <li key={i}>
            <ol>
              {row.map((val, j) => (
                <li key={j}>
                  <button onClick={() => playerToggle(i, j)}>{val}</button>
                </li>
              ))}
            </ol>
          </li>
        );
      })}
    </ol>
  );
};

export default Gameboard;
