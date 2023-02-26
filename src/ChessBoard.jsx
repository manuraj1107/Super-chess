import React, { useState } from 'react';
import bishopDark from "./assets/bishop_dark.svg"
import bishopLight from "./assets/bishop_light.svg"
import kingDark from "./assets/king_dark.svg"
import kingLight from "./assets/king_light.svg"
import queenDark from "./assets/queen_dark.svg"
import queenLight from "./assets/queen_light.svg"
import pawnDark from "./assets/pawn_dark.svg"
import pawnLight from "./assets/pawn_light.svg"
import knightDark from "./assets/knight_dark.svg"
import knightLight from "./assets/knight_light.svg"
import rookDark from "./assets/rook_dark.svg"
import rookLight from "./assets/rook_light.svg"
import './chessboard.css'

function ChessBoard() {

  const [selectedCell, setSelectedCell] = useState(null);
  const [highlightedCells, setHighlightedCells] = useState([]);

  const [cells] = useState(Array(64).fill(null));
  
  function handleClick(index) {
    setSelectedCell(index);
    console.log(index)
    const possibleMoves = calculatePossibleMoves(index);
    setHighlightedCells(possibleMoves);
    console.log(possibleMoves)
  }


  const calculatePossibleMoves = (index) => {
    const moves = [];
    const row = Math.floor(index/8);
    const col = index % 8;

    const offsets = [
      [-2, -1], [-2, 1], [-1, -2], [-1, 2],
      [1, -2], [1, 2], [2, -1], [2, 1]
    ];

    offsets.forEach(([rowOffset, colOffset]) => {
      const newRow = row + rowOffset;
      const newCol = col + colOffset;
      if(newRow >= 0  && newRow < 8 && newCol >=0  && newCol < 8){
        moves.push(newRow * 8 + newCol);
      }
    });

    return moves;
  }


  
  const cellElements = cells.map((cell, index) => {
    const isBlack = (index + Math.floor(index/8)) % 2 === 1;
    const classColor = isBlack ? 'black' : 'white';
    

    let piece = null;
    if (index === 0 || index === 7) {
        piece = <img src={rookDark} alt="rook-dark" />;
      }
      else if (index === 63 || index === 56) {
        piece = <img src={rookLight} alt="rook-light" />;
      }
      
      else if (index === 1 || index === 6) {
        piece = <img src={knightDark} alt="knight-dark" />;
      }
      else if (index === 62 || index === 57) {
          piece = <img src={knightLight} alt="knight-light" />;
      }

      else if (index === 2 || index === 5) {
        piece = <img src={bishopDark} alt="bishop-dark" />;
      }
      else if (index === 61 || index === 58) {
        piece = <img src={bishopLight} alt="bishop-light" />;}
      else if (index === 3) {
        piece = <img src={queenDark} alt="queen-dark" />;
      }
      else if (index === 59) {
        piece = <img src={queenLight} alt="queen-light" />;
      }
      else if (index === 4) {
        piece = <img src={kingDark} alt="king-dark" />;
      }
      else if (index === 60) {
        piece = <img src={kingLight} alt="king-light" />;
      }
      
      else if (index >= 8 && index <= 15) {
        piece = <img src={pawnDark} alt="pawn" />;
      } 
      
      else if (index >= 48 && index <= 55) {
        piece = <img src={pawnLight} alt="pawn" />;
      }
    
      const isSelected = index === selectedCell;
      const isHighlighted = highlightedCells.includes(index);
      console.log("Calculating possible moves for cell", index);
      console.log("Possible moves:", highlightedCells);


    return (
      <div
        key={index}
        className={`cell ${classColor}  ${isSelected ? 'selected': ''} ${isHighlighted ? 'highlighted': ''}`}
        onClick={() => handleClick(index)}>
        {piece}

      </div>
    );
  });
  
  return (
    <div className="chessboard">
      {cellElements}
    </div>
  );
}
export default ChessBoard;
