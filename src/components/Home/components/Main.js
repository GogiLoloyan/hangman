import React from "react";
import styles from "./Main.module.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 50
    };
    this.myRef = React.createRef();
  }

  componentDidMount() {
    const radius = this.myRef.current;
    let x = 0xedcbc2;

    setInterval(() => {
      radius.classList.toggle(styles.toggle);
    }, 3000);

    setInterval(() => {
      radius.style.backgroundColor = "#" + (x += 150).toString(16);
    }, 50);
  }

  onMouseMove = e => {
    const width = this.refs.header_text.clientWidth;
    const height = this.refs.header_text.clientHeight;
    const oX = (e.nativeEvent.offsetX / width) * 100;
    const oY = (e.nativeEvent.offsetY / height) * 100;

    this.setState({
      x: oX,
      y: oY
    });
  };

  _onMouseOut = () => {
    this.setState({
      x: 0,
      y: 50
    });
  };

  render() {
    const { x, y } = this.state;
    const maskStyle = {
      "--maskX": x,
      "--maskY": y
    };
    return (
      <div className={styles.main}>
        <div
          className={`wow fadeInRight ${styles.radius}`}
          data-wow-duration="1.5s"
          data-wow-delay=".5s"
          ref={this.myRef}
        ></div>
        <div
          className={`wow fadeInLeft ${styles.triangle}`}
          data-wow-duration="1.5s"
          data-wow-delay=".5s"
          
        ></div>
        <div
          className={`wow fadeInUp ${styles.header_text_div}`}
          data-wow-duration="1.5s"
          data-wow-offset="-50"
          onMouseMove={this.onMouseMove}
          onMouseOut={this._onMouseOut}
        >
          <h1 className={`${styles.header_text}`}>Speak with<br/> Confidence</h1>
          <h1
            className={`${styles.header_text} ${styles.header_text_wrapper}`}
            style={maskStyle}
            ref="header_text"
          >
            Speak with<br/> Confidence
          </h1>
        </div>
        <p
          className={`wow fadeInUp ${styles.p}`}
          data-wow-delay=".5s"
          data-wow-duration="1.5s"
        >
          I'm a paragraph. Click here to add your own text and edit me. I’m a
          great place for you to tell a story and let your users know a little
          more about you.
        </p>
      </div>
    );
  }
}

export default Main;
