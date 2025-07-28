import { useState } from "react";
import Gameboard from "./components/Gameboard";
import Header from "./components/Header";
import Player from "./components/Player";
import Log from "./components/Log";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");
  const playerToggle = (i, j) => {
    setActivePlayer((val) => (val === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let currentPlayer = "X";
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }
      const updatedTurns = [
        { square: { row: i, column: j }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  };
  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              name="Player 1"
              symbol="X"
              activePlayer={activePlayer === "X"}
            />
            <Player
              name="Player 2"
              symbol="O"
              activePlayer={activePlayer === "O"}
            />
          </ol>
          <Gameboard
            gameTurns={gameTurns}
            activePlayer={activePlayer}
            playerToggle={playerToggle}
          />
        </div>
      </main>
      <Log />
    </>
  );
}

export default App;
