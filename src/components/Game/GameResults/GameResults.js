import React from 'react';
import Guess from './Guess/Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../../constants';

function GameResults({ guesses }) {
  return <div className="guess-results" style={{ justifyContent: 'flex-start', width: '440px', maxWidth: '100%' }}>
    {Array.from({
      length: NUM_OF_GUESSES_ALLOWED > guesses.length ? guesses.length : NUM_OF_GUESSES_ALLOWED
    }).map((val, index) => {
      const guess = guesses?.[index];
      return <Guess key={guess.id} guess={guess} />;
    })}

  </div>;
}

export default GameResults;
