import React from "react";
import Data from "./Common/CommentData";
import styles from "./CommentsSlide.module.css";
import Polygon from "./Common/Poligon";

class CommnetsSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      text: Data[0]
    };
    this.ref = React.createRef();
    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }
  prevSlide() {
    const index =
      this.state.index === Data.length - 1 ? 0 : this.state.index + 1;
    this.setState({
      index,
      text: Data[index]
    });
  }
  nextSlide() {
    const index =
      this.state.index === 0 ? Data.length - 1 : this.state.index - 1;
    this.setState({
      index,
      text: Data[index]
    });
  }
  render() {
    const { description, user } = this.state.text;
    return (
      <div className={styles.main}>
        <p class={styles.slide_header}>
          300 INSPIRING LIFE QUOTES THAT WILL MOVE YOU
        </p>
        <div className={styles.slide}>
          <Polygon
            handleClick={this.prevSlide}
            point={styles.point}
            style={styles.reverse + " " + styles.svg}
          />
          <div className={styles.info}>
            <h1 className={styles.slide_h1}>{description}</h1>
            <p className={styles.slide_p}>{user}</p>
          </div>
          <Polygon
            handleClick={this.nextSlide}
            point={styles.point}
            style={styles.svg}
          />
        </div>
      </div>
    );
  }
}

export default CommnetsSlide;
