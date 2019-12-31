import React, { Component } from "react";
import Images from "../images/images";
import GameImage from "./GameImage";
import GameButtons from "./GameButtons";

class HangmanGame extends Component {
  static defaultProps = {
    maxWrong: 6,
    images: Images
  };

  render() {
    const { mistake, answer, images, guessedWord, resetButton } = this.props;
    const gameOver = mistake >= this.props.maxWrong;
    const altText = `${mistake}/${this.props.maxWrong} wrong guesses`;
    const isWinner = guessedWord().join("") === answer;
    let gameStat = this.props.generateButtons();

    if (isWinner) {
      gameStat = "YOU WON";
    }
    if (gameOver) {
      gameStat = "YOU LOST";
    }

    return (
      <>
        <GameImage
          images={images}
          mistake={mistake}
          altText={altText}
          gameOver={gameOver}
          guessedWord={guessedWord}
          answer={answer}
        />
        <GameButtons gameStat={gameStat} resetButton={resetButton} />
      </>
    );
  }
}

export default HangmanGame;
