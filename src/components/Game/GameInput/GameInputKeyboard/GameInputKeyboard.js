import React, { useMemo } from 'react';

function GameInputKeyboard({ keyPressedHandler, value, guesses, answer }) {
  const characterStatuses = useMemo(() => {
    const output = {};
    for(const guess of guesses){
      for(const charResult of guess.result){
        output[charResult.letter] = charResult.status;
      }
    }
    return output;
  }, [guesses]);

  return <div className="game-input-keyboard">
    <div className="keyboard-row">
      {['Q', 'W', 'E', 'R', 'T', 'Z', 'U', 'I', 'O', 'P'].map(char =>
        <button className={`keyboard-char ${characterStatuses[char]}`} key={char} onClick={event => {
          event.preventDefault();
          if (keyPressedHandler) {
            keyPressedHandler(char);
          }
        }}>
          {char}
        </button>
      )}
    </div>

    <div className="keyboard-row">
      {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map(char =>
        <button className={`keyboard-char ${characterStatuses[char]}`} key={char} onClick={event => {
          event.preventDefault();
          if (keyPressedHandler) {
            keyPressedHandler(char);
          }
        }}>
          {char}
        </button>
      )}
    </div>

    <div className="keyboard-row">
      <button className="keyboard-char" disabled={value?.length !== 5} onClick={event => {
        event.preventDefault();
        if (keyPressedHandler) {
          keyPressedHandler('ENTER');
        }
      }}>
        ENTER
      </button>

      {['Y', 'X', 'C', 'V', 'B', 'N', 'M'].map(char =>
        <button className={`keyboard-char ${characterStatuses[char]}`} key={char} onClick={event => {
          event.preventDefault();
          if (keyPressedHandler) {
            keyPressedHandler(char);
          }
        }}>
          {char}
        </button>
      )}

      <button className="keyboard-char" disabled={!value.length} onClick={event => {
        event.preventDefault();
        if (keyPressedHandler) {
          keyPressedHandler('BACK');
        }
      }}>
        BACK
      </button>
    </div>
  </div>;
}

export default GameInputKeyboard;
