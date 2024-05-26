import React from 'react';
import './Attempts.css'

interface AttemptsProps {
  count: number;
}
const Attempts: React.FC<AttemptsProps> = ({count}) => {
  return (
    <div className="attempts">
      Attempts: {count}
    </div>
  );
};

export default Attempts;