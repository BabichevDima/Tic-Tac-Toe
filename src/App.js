import React, { Component } from "react";
import { useState } from "react";

function Header() {
  return <h1>Tic-Tac-Toe</h1>;
}

function Description({ handleRestartButtonClick, status, restartButtonText }) {
  return (
    <div>
      <h3>{status}</h3>

      <button className="button" onClick={handleRestartButtonClick}>
        {restartButtonText}
      </button>

      <div>Total Game: </div>
    </div>
  );
}

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ status, squares, handleClick }) {
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}

export default function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handleClick(i) {
    const nextSquares = squares.slice();

    if (squares[i] || calculateWinner(squares)) {
      return;
    } else if (xIsNext && !nextSquares[i]) {
      nextSquares[i] = "X";
      setXIsNext(!xIsNext);
    } else if (!xIsNext && !nextSquares[i]) {
      nextSquares[i] = "O";
      setXIsNext(!xIsNext);
    }

    setSquares(nextSquares);
  }

  function handleRestartButtonClick() {
    let isRestart = window.confirm("Are you sure you want to restart game?");
    if (isRestart) {
      setSquares(Array(9).fill(null));
      setXIsNext(true);
    } else {
      alert("Player '" + `${xIsNext ? "X" : "O"}` + "' your turn.");
    }
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(squares);
  let status;
  let restartButtonText;
  if (winner) {
    status = "Winner: " + winner;
    restartButtonText = "Next Game";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
    restartButtonText = "Restart Game";
  }

  return (
    <div className="game-1">
      <Header />
      <Description
        handleRestartButtonClick={handleRestartButtonClick}
        status={status}
        restartButtonText={restartButtonText}
      />
      <div className="game-board">
        <Board status={status} squares={squares} handleClick={handleClick} />
      </div>

      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}