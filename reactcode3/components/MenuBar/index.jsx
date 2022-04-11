import React from "react";
import { Link } from "react-router-dom";
import "./MenuBar.css";

class MenuBar extends React.Component {
  render() {
    return (
      <div className="menu-bar">
        <Link to="/resources-v2">
          <div className="more-resources roboto-normal-summer-green-25px">More Resources</div>
        </Link>
        <div className="overlap-group1-35">
          <Link to="/account-page-alt-v2">
            <div className="my-account roboto-normal-summer-green-25px">My Account</div>
          </Link>
          <img className="line-5" src="/img/line-5@2x.svg" />
        </div>
        <a href="javascript:ShowOverlay('user-menu-pop-up-logged-in', 'animate-appear');">
          <div className="icround-account-circle">
            <img className="vector-37" src="/img/vector-1@2x.svg" />
          </div>
        </a>
        <a href="javascript:ShowOverlay('user-menu-pop-up-logged-in', 'animate-appear');">
          <div className="evaarrow-left-fill">
            <img className="vector-38" src="/img/vector-13@2x.svg" />
          </div>
        </a>
      </div>
    );
  }
}

export default MenuBar;
