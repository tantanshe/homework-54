import React from 'react';
import './Square.css';

interface SquareProps {
  hasItem: boolean;
  clicked: boolean;
  onClick: () => void;
}

const Square : React.FC<SquareProps> = ({hasItem, clicked, onClick}) => {
  const stylesSquare = ['square']

  if (clicked) {
    stylesSquare.push('clicked')
  }

  return (
    <div className={stylesSquare.join(' ')} onClick={clicked ? undefined : onClick}>
      {hasItem && clicked ? <span className="diamond">💎</span> : null}
    </div>
  );
};

export default Square;