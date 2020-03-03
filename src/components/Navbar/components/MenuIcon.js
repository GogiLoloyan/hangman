import React from "react";

function MenuIcon(props) {
  return (
    <>
      <input
        type="checkbox"
        id="check"
        ref={props.iconRef}
        onClick={props.handleClick}
      />
      <label htmlFor="check" id="btn">
        <div id="div_1" />
        <div id="div_2" />
        <div id="div_3" />
      </label>
    </>
  );
}

export default MenuIcon;
