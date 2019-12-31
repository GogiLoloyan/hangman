import React from "react";

const GameImage = ({
  images,
  mistake,
  altText,
  gameOver,
  guessedWord,
  answer
}) => (
  <>
    <p className="center">
      <img src={images[mistake]} alt={altText} />
    </p>
    <p className="center" style={{color: "#f8f9fa"}}>Guess the Programming Language ?</p>
    <p className="Hangman-word">{!gameOver ? guessedWord() : answer}</p>
  </>
);

export default GameImage;
