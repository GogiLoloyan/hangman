import React from "react";

const HangmanNavBar = ({ mistake }) => (
  <div className="Hangman-navbar">
    <a href="/">
      Hangman. <small>Do (or) Die</small>
    </a>
    <p>Guessed wrongf: {mistake}</p>
  </div>
);

export default HangmanNavBar;
