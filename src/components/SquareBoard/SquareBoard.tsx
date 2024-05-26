import Square from '../Square/Square';
import { Item } from '../../types'
import React from 'react';

interface SquareBoardProps {
  items: Item[]
}
const SquareBoard: React.FC<SquareBoardProps> = ({items}) => {
  return (
    <div>
      {items.map (({hasItem, clicked}, index) => (
        <Square key={index} hasItem={hasItem} clicked={clicked} />
      ))}
    </div>
  );
};

export default SquareBoard;