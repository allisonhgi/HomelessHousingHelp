import React from "react";
import UserMenuPopUpLoggedIn2 from "../UserMenuPopUpLoggedIn2";
import "./UserMenuPopUpLoggedIn.css";

class UserMenuPopUpLoggedIn extends React.Component {
  render() {
    const { userMenuPopUpLoggedIn2Props } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="user-menu-pop-up-logged-in screen">
          <UserMenuPopUpLoggedIn2 {...userMenuPopUpLoggedIn2Props} />
        </div>
      </div>
    );
  }
}

export default UserMenuPopUpLoggedIn;
