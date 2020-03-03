import React from "react";
import MenuList from "./components/MenuList";
import SocialMedia from "./components/SocialMedia";
import MenuIcon from "./components/MenuIcon";
import "./navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleMenu: false
    };
    this.iconRef = React.createRef();
    this.menuRef = React.createRef();
    this.backRef = React.createRef();
    this.handleClickMenuIcon = this.handleClickMenuIcon.bind(this);
  }

  handleClickMenuIcon({ currentTarget: t }) {
    if (t.tagName !== "A" || window.location.pathname !== t.pathname) {
      const visible = this.state.visibleMenu;

      this.iconRef.current.checked = !visible;
      this.menuRef.current.style.width = visible ? "70px" : "530px";

      Object.assign(this.backRef.current.style,{
        opacity: visible ? 0 : 0.9,
        visibility: visible ? "hidden" : "visible"
      })
      
      this.setState({ visibleMenu: !visible });
    }
  }

  render() {
    return (
      <>
        <div ref={this.menuRef} className="navbar">
          <MenuIcon
            iconRef={this.iconRef}
            handleClick={this.handleClickMenuIcon}
          />
          <MenuList handleClick={this.handleClickMenuIcon} />
          <SocialMedia />
        </div>
        <div ref={this.backRef} className="background"></div>
      </>
    );
  }
}

export default NavBar;
