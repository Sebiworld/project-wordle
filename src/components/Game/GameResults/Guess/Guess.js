import React from 'react';

function Guess({ guess }) {
  return <p className="guess">
    {Array.from({ length: 5 }).map((val, index) => {
      const result = guess.result?.[index];
      const character = result?.letter || '';
      const className = result?.status || '';
      return <span className={`cell ${className}`} key={index}>{character}</span>
    }
    )}
  </p>;
}

export default Guess;
