import Square from '../Square/Square';
import { Item } from '../../types'
import React from 'react';
import './SquareBoard.css'

interface SquareBoardProps {
  items: Item[];
  onSquareClick: (index: number) => void;
}
const SquareBoard: React.FC<SquareBoardProps> = ({items, onSquareClick}) => {
  return (
    <div className="square-board">
      {items.map (({hasItem, clicked}, index) => (
        <Square key={index} hasItem={hasItem} clicked={clicked} onClick={() => onSquareClick(index)}/>
      ))}
    </div>
  );
};

export default SquareBoard;