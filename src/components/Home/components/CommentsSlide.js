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

    this.cI = null;
    this.commentRef = React.createRef();
  }

  componentWillMount() {
    this.cI = setInterval(() => this.changeSlide("next"), 7000);
  }

  changeSlide = (atr, e) => {
    if (e) {
      clearInterval(this.cI);
      this.cI = setInterval(() => this.changeSlide("next"), 7000);
    }

    const classList = this.commentRef.current.classList;
    let index = this.state.index;
    switch (atr) {
      case "prev":
        index = index === Data.length - 1 ? 0 : index + 1;
        break;
      case "next":
        index = index === 0 ? Data.length - 1 : index - 1;
        break;
    }

    classList.toggle(styles[`info_${atr}`]);
    setTimeout(() => {
      this.setState({
        index,
        text: Data[index]
      });
      classList.toggle(styles[`info_${atr}`]);
    }, 700);
  };

  render() {
    const { description, user } = this.state.text;
    const {
      main,
      slide_header,
      slide_h1,
      slide_p,
      slide,
      svg,
      point,
      reverse,
      info
    } = styles;
    return (
      <div className={main}>
        <p className={slide_header}>
          300 INSPIRING LIFE QUOTES THAT WILL MOVE YOU
        </p>
        <div className={slide}>
          <Polygon
            handleClick={this.changeSlide.bind(this, "prev")}
            point={point}
            style={`${reverse} ${svg}`}
          />
          <div ref={this.commentRef} className={info}>
            <h1 className={slide_h1}>{description}</h1>
            <p className={slide_p}>{user}</p>
          </div>
          <Polygon
            handleClick={this.changeSlide.bind(this, "next")}
            point={point}
            style={svg}
          />
        </div>
      </div>
    );
  }
}

export default CommnetsSlide;
