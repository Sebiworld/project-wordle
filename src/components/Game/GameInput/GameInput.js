import React, { useState } from 'react';
import GameInputKeyboard from './GameInputKeyboard';

function GameInput({ submitGuess, guesses, answer }) {
  const [value, setValue] = useState('');

  const keyPressedHandler = (char) => {
    if (char === 'ENTER') {
      submit();
      return;
    }

    if (char === 'BACK') {
      if(value.length){
        setValue(value => value.substring(0, value.length - 1));
      }

      return;
    }

    setValue(value => (`${value}${char}`).substring(0, 5));
  };

  const submit = () => {
    if (!value || value.length !== 5) {
      console.error('WRONG INPUT FORMAT');
      return;
    }
    submitGuess(value);
    setValue('');
  }

  return <div className="game-input">
    <form className="guess-input-wrapper" onSubmit={(event) => {
      event.preventDefault();
      submit();
    }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" pattern="[A-Z]{5}" value={value} onChange={event => {
        if (!event?.target?.value || typeof event.target.value !== 'string') {
          setValue('');
          return;
        }
        setValue(event.target.value.toUpperCase().substring(0, 5));
      }} />
    </form>

    <GameInputKeyboard value={value} guesses={guesses} answer={answer} keyPressedHandler={keyPressedHandler}></GameInputKeyboard>
  </div>;
}

export default GameInput;