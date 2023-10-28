/* 
   Filename: complex_program.js
   Description: This program demonstrates a complex and elaborate solution for solving a Sudoku puzzle using backtracking algorithm. It solves the puzzle by filling in the empty cells one by one and checking for valid placements.
*/

// Define the Sudoku board
const board = [
  [7, 8, 0, 4, 0, 0, 1, 2, 0],
  [6, 0, 0, 0, 7, 5, 0, 0, 9],
  [0, 0, 0, 6, 0, 1, 0, 7, 8],
  [0, 0, 7, 0, 4, 0, 2, 6, 0],
  [0, 0, 1, 0, 5, 0, 9, 3, 0],
  [9, 0, 4, 0, 6, 0, 0, 0, 5],
  [0, 7, 0, 3, 0, 0, 0, 1, 2],
  [1, 2, 0, 0, 0, 7, 4, 0, 0],
  [0, 4, 9, 2, 0, 6, 0, 0, 7]
];

// Function to find empty cells
function findEmptyCell() {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0)
        return [row, col];
    }
  }
  return null;
}

// Function to check if a value is valid for a specific cell
function isValid(num, row, col) {
  // Check row
  for (let i = 0; i < 9; i++) {
    if (board[i][col] === num && i !== row)
      return false;
  }

  // Check column
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === num && i !== col)
      return false;
  }

  // Check box
  const boxRow = Math.floor(row / 3) * 3;
  const boxCol = Math.floor(col / 3) * 3;
  for (let i = boxRow; i < boxRow + 3; i++) {
    for (let j = boxCol; j < boxCol + 3; j++) {
      if (board[i][j] === num && i !== row && j !== col)
        return false;
    }
  }
  
  return true;
}

// Function to solve the Sudoku puzzle
function solveSudoku() {
  const emptyCell = findEmptyCell();
  
  if (!emptyCell)
    return true;
  
  const [row, col] = emptyCell;
  
  for (let num = 1; num <= 9; num++) {
    if (isValid(num, row, col)) {
      board[row][col] = num;

      if (solveSudoku())
        return true;

      board[row][col] = 0;
    }
  }
  
  return false;
}

// Solve the Sudoku puzzle
if (solveSudoku()) {
  console.log("Sudoku Solved:");
  console.log(board);
} else {
  console.log("No solution exists for the given Sudoku puzzle.");
}