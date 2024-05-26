import React, {CSSProperties} from 'react';

interface SquareProps {
  hasItem: boolean;
  clicked: boolean;
}

const Square : React.FC<SquareProps> = ({hasItem, clicked}) => {
  const stylesSquare: CSSProperties = {display: "block"}
  return (
    <div style={stylesSquare}>
      {hasItem},
      {clicked}
    </div>
  );
};

export default Square;