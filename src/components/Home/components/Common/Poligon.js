import React from "react";

export default function Polygon({ style, point, handleClick }) {
  return (
    <svg className={style} onClick={handleClick}>
      <polygon
        className={point}
        points="67.5,0 66,1.5 75,10 0,10 0,12 75,12 66,20.5 67.5,22 79,11 "
      ></polygon>
    </svg>
  );
}
