import React from 'react';
import './ResetButton.css';

interface ResetButtonProps {
  onClick: () => void;
}
const ResetButton: React.FC<ResetButtonProps> = ({onClick}) => {
  return (
    <button className="reset-button" onClick={onClick}>
      Reset
    </button>
  );
};

export default ResetButton;