import React, { useState } from "react";
import "./styles.css"; // Importing CSS for styling

const TicTacToe: React.FC = () => {
  // State for the board, initializing with 9 empty cells
  const [board, setBoard] = useState<string[]>(Array(9).fill(""));
  // State to track whose turn it is (X or O)
  const [isXNext, setIsXNext] = useState(true);

  // Calculate the winner (if any) by passing the board to the function
  const winner = calculateWinner(board);

  // Handle the click event when a player makes a move
  const handleClick = (index: number) => {
    // If the cell is already filled or there's already a winner, return early
    if (board[index] || winner) return;

    // Create a copy of the board and update the clicked cell with the current player's symbol
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);

    // Switch to the next player's turn
    setIsXNext(!isXNext);
  };

  // Function to reset the game to its initial state
  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setIsXNext(true); // Start with player X
  };

  return (
    <div className="ttt-container">
      <h2>Tic Tac Toe</h2>
      {/* Render the Tic Tac Toe board */}
      <div className="ttt-board">
        {board.map((value, idx) => (
          <div
            key={idx}
            className={`ttt-cell ${value}`} // Add class based on the value of the cell
            onClick={() => handleClick(idx)} // Handle cell click
          >
            {value} {/* Display X or O */}
          </div>
        ))}
      </div>
      {/* Display the status of the game */}
      <div className="ttt-status">
        {winner ? (
          <h3>{winner} wins! </h3> // If there's a winner, show the winner
        ) : board.every((cell) => cell !== "") ? (
          <h3>It is a Draw! </h3> // If all cells are filled, it's a draw
        ) : (
          <h3>Next Player: {isXNext ? "X" : "O"}</h3> // Show whose turn is next
        )}
      </div>
      {/* Button to reset the game */}
      <button className="ttt-reset" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
};

// Function to calculate the winner by checking all winning lines
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

  // Check each line to see if it's a winning line (all values are the same and not empty)
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // Return the winner (either 'X' or 'O')
    }
  }
  return null; // No winner found
}

export default TicTacToe;
