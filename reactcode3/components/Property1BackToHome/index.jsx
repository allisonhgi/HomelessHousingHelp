import React from "react";
import { Link } from "react-router-dom";
import "./Property1BackToHome.css";

class Property1BackToHome extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`tutorial-buttons-72 ${className || ""}`}>
        <div className="back-to-home roboto-medium-white-30px">Back to Home</div>
      </div>
    );
  }
}

export default Property1BackToHome;
