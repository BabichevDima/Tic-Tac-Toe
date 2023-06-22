import React from "react";

export function Info(props) {
  function jumpTo(nextMove) {
    props.setCurrentMove(nextMove);
  }

  const moves = props.history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      return;
    }
    return (
      <li key={move} className="listHistory">
        <button className="button" onClick={() => jumpTo(move)}>
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="game-info">
      <h2>{moves.length > 1 ? "History:" : null}</h2>
      <ol>{moves}</ol>
    </div>
  );
}
