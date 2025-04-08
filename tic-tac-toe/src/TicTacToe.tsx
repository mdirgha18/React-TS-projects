import React, { useState } from "react";
import "./styles.css";

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<string[]>(Array(9).fill(""));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(board);

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setIsXNext(true);
  };

  return (
    <div className="ttt-container">
      <h2>Tic Tac Toe</h2>
      <div className="ttt-board">
        {board.map((value, idx) => (
          <div
            key={idx}
            className={`ttt-cell ${value}`}
            onClick={() => handleClick(idx)}
          >
            {value}
          </div>
        ))}
      </div>
      <div className="ttt-status">
        {winner ? (
          <h3>{winner} wins!</h3>
        ) : board.every((cell) => cell !== "") ? (
          <h3>It's a Draw!</h3>
        ) : (
          <h3>Next Player: {isXNext ? "X" : "O"}</h3>
        )}
      </div>
      <button className="ttt-reset" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
};

function calculateWinner(squares: string[]): string | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];

  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

export default TicTacToe;
