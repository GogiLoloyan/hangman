import React, { Component } from "react";
import HangmanNavBar from "./HangmanNavBar/HangmanNavBar";
import HangmanGame from "./HangmanGame/HangmanGame";
import randomWord from "./words";

class Hangman extends Component {
  state = {
    mistake: 0,
    guessed: new Set(),
    answer: randomWord()
  };

  componentWillMount() {
    document.addEventListener("keydown", this.onKeyPressed);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyPressed);
  }

  guessedWord = () =>
    this.state.answer
      .split("")
      .map(bingo => (this.state.guessed.has(bingo) ? bingo : "_"));

  onKeyPressed = ({ key: letter }) => {
    letter === "Enter" && this.resetButton();
    this.guessedWord().join("") !== this.state.answer &&
      this.state.mistake < 6 &&
      "abcdefghijklmnopqrstuvwxyz".includes(letter) &&
      this.setState(st => ({
        guessed: st.guessed.add(letter),
        mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1)
      }));
  };

  handleGuess = е => {
    let letter = е.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(letter),
      mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1)
    }));
  };

  generateButtons = () =>
    "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
      <button
        key={letter}
        value={letter}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(letter)}
      >
        {letter}
      </button>
    ));

  resetButton = () => {
    this.setState({
      mistake: 0,
      guessed: new Set(),
      answer: randomWord()
    });
  };

  render() {
    const { mistake, answer } = this.state;

    return (
      <div className="Hangman">
        <HangmanNavBar mistake={mistake} />

        <HangmanGame
          mistake={mistake}
          answer={answer}
          guessedWord={this.guessedWord}
          generateButtons={this.generateButtons}
          resetButton={this.resetButton}
        />
      </div>
    );
  }
}

export default Hangman;
