import React from "react";

import Main from "./components/Main";
import Video from "./components/Video";
import Courses from "./components/Courses";
import CommnetsSlide from "./components/CommentsSlide";
import styles from '../../common.module.css'

import WOW from "wowjs";

class Home extends React.Component {
  

  componentDidMount() {
    new WOW.WOW({
      live: false
    }).init();
  }

  render() {
    return (
      <div className={styles.common}>
        <Main />
        <Video />
        <Courses />
        <CommnetsSlide />
      </div>
    );
  }
}

export default Home;
