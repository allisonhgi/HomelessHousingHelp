import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

class Logo extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <Link to="/home-page-v3" className="align-self-flex-end">
        <div className={`logo ${className || ""}`}>
          <div className="overlap-group">
            <img className="icon-home" src="/img/vector-2@2x.svg" />
            <div className="hvh roboto-medium-summer-green-50px">HVH</div>
          </div>
        </div>
      </Link>
    );
  }
}

export default Logo;
