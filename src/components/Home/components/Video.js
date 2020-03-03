import React from "react";
import styles from "./Video.module.css";

function Video() {
  return (
    <div
      className={`wow fadeIn ${styles.video}`}
      data-wow-duration="2s"
      data-wow-offset="100"
    >
      <p>Watch &amp; Learn</p>
      <h1>How It Works</h1>
      
      <div className={styles.play}>
        <a  href="#1">
          <i className="fas fa-play-circle"></i>
          <p>Play Video</p>
        </a>
      </div>

      <div className={styles.share}>
        <a href="#1">
          <i className="fas fa-share-alt"></i>
          <small>Sign it</small>
        </a>
      </div>
    </div>
  );
}

export default Video;
