import React from "react";
import { Link } from "react-router-dom";

function SocialMedia(props) {
  return (
    <ul id="social-media">
      <li>
        <Link to="/">
          <i className="fab fa-facebook-f"></i>
        </Link>
      </li>
      <li>
        <Link to="/">
          <i className="fab fa-vimeo-v"></i>
        </Link>
      </li>
      <li>
        <Link to="/">
          <i className="fab fa-youtube"></i>
        </Link>
      </li>
      <li>
        <Link to="/">
          <i className="fab fa-twitter"></i>
        </Link>
      </li>
      <li>
        <Link to="/">
          <i className="fab fa-linkedin-in"></i>
        </Link>
      </li>
    </ul>
  );
}

export default SocialMedia;
