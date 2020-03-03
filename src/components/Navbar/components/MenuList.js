import React from "react";
import { Link } from "react-router-dom";

function MenuList({handleClick}) {
  return (
    <div id="menu-list">
      <nav>
        <Link to="/"                  onClick={handleClick}>Home</Link>
        <Link to="/video-courses"     onClick={handleClick}>Video Courses</Link>
        <Link to="/private-sessions"  onClick={handleClick}>Private Sessions</Link>
        <Link to="/faq"               onClick={handleClick}>FAQ</Link>
        <Link to="/contact"           onClick={handleClick}>Contact</Link>
      </nav>
    </div>
  );
}

export default MenuList;
