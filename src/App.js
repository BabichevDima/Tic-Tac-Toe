import React, { useState, useEffect } from "react";
import { Board } from "./Components/Board";
import { Title } from "./Components/Title";
import { ConfirmDialog } from "./Components/ConfirmDialog";
import { Info } from "./Components/Info";

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

//   useEffect(() => {
//     debugger;
//     alert("Game");
//   }, []);

    function handlePlay(nextSquares) {
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
    }

    function handleRestartButtonClick() {
      setCurrentMove(0);
      setHistory([Array(9).fill(null)]);
    }

  return (
    <div>
      <Title currentMove={currentMove} />
      <ConfirmDialog handleRestartButtonClick={handleRestartButtonClick} />
      <div className="game">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        <Info history={history} setCurrentMove={setCurrentMove} />
      </div>
    </div>
  );
}
