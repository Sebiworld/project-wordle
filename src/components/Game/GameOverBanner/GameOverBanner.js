import React from 'react';

function GameOverBanner({ result, answer, reset }) {
  if(!result){
    return;
  }

  let className;
  if(result === 'success'){
    className = 'happy';
  }else if(result === 'fail'){
    className = 'sad';
  }

  return <div className={`banner ${className}`}>
    {result === 'success' && <p>
      <strong>Congratulations!</strong> Got it in
      <strong>3 guesses</strong>.
    </p>}
    {result === 'fail' && <p>
      Sorry, the correct answer is <strong>{answer}</strong>.
    </p>}
    <button className="btn" onClick={() => reset()}>Restart</button>
  </div>;
}

export default GameOverBanner;
