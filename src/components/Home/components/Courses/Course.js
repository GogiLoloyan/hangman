import React from "react";
import { Link } from "react-router-dom";

function Course(props) {
  const { row, back, fade } = props;
  return (
    <div className={row}>
      <div className={back}>{props.children}</div>
      <h1 ref={props.textRef} className={fade}>
        {props.text}
      </h1>
      <Link to="/" ref={props.linkRef} className={fade}>
        <p>Watch &amp; Learn {props.n} →</p>
      </Link>
    </div>
  );
}

export default Course;
