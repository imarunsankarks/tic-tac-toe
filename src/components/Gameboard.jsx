import { useState } from "react";
const board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const Gameboard = () => {
  const [boardVal, setBoardVal] = useState(board);
  const [change, setChange] = useState(true);
  const updateBoard = (i, j) => {
    const newBoard = boardVal.map((row) => [...row]);
    if (!newBoard[i][j]) {
      if (change) {
        newBoard[i][j] = "X";
      } else {
        newBoard[i][j] = "O";
      }
      setBoardVal(newBoard);
      setChange((val) => !val);
    }
  };
  return (
    <ol id="game-board">
      {boardVal.map((row, i) => {
        return (
          <li key={i}>
            <ol>
              {row.map((val, j) => (
                <li key={j}>
                  <button onClick={() => updateBoard(i, j)}>{val}</button>
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
