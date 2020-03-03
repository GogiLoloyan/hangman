import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  const handleOnclick = () => alert("oops");
  return (
    <div className={styles.logo}>
      <Link to="/">
        <img
          className={styles.img}
          alt="logo"
          onClick={handleOnclick}
          src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png"
        />
      </Link>
      <div className={styles.user}>
        <Link to="/" className={styles.user_image}>
          <i className="fas fa-user-circle"></i>
        </Link>
        <div className={styles.user_info}>
          <i className="fas fa-angle-down"></i>
        </div>
      </div>
    </div>
  );
}

export default Logo;
