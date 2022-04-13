import React from "react";
import { Link } from "react-router-dom";
import "./Property1BackToHome.css";

class Property1BackToHome extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <Link to="/home-page-v3">
        <div className="tutorial-buttons-7">
          <div className="back-to-home roboto-medium-white-30px">{children}</div>
        </div>
      </Link>
    );
  }
}

export default Property1BackToHome;
