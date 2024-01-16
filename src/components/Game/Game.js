import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GameInput from './GameInput/GameInput';
import GameResults from './GameResults';
import GameOverBanner from './GameOverBanner';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Game() {

  // Pick a random word on every pageload.
  const [answer, setAnswer] = useState(() => sample(WORDS));

  // To make debugging easier, we'll log the solution in the console.
  // console.info({ answer });

  const [guesses, setGuesses] = useState([]);

  const submitGuess = (value) => {
    const guess = {
      id: Math.random(),
      value: value,
      result: checkGuess(value, answer)
    };
    setGuesses([...guesses, guess]);
  }

  const reset = () => {
    setGuesses([]);
    setAnswer(sample(WORDS));
  }

  let result;
  if(guesses?.length){
    if(guesses?.[guesses.length - 1] === answer){
      result = 'success';
    } else if (guesses.length >= NUM_OF_GUESSES_ALLOWED){
      result = 'fail';
    }
  }

  return <div className="game-wrapper" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    <GameResults guesses={guesses}></GameResults>
    <GameOverBanner result={result} answer={answer} reset={reset}></GameOverBanner>
    {!result && <GameInput guesses={guesses} answer={answer} submitGuess={submitGuess}></GameInput>}
  </div>;
}

export default Game;
