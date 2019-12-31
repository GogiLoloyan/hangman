import React from "react";

const GameButtons = ({ gameStat, resetButton }) => (
  <>
    <p className="Hangman-buttons">{gameStat}</p>
    <div>
      <div className="center">
        <button className="Hangman-reset" onClick={resetButton}>
          Reset
        </button>
      </div>
    </div>
  </>
);

export default GameButtons;
