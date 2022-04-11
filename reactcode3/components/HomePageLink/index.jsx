import React from "react";
import { Link } from "react-router-dom";
import "./HomePageLink.css";

class HomePageLink extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`home-page-link ${className || ""}`}>
        <img className="vector" src="/img/vector-6@2x.svg" />
        <Link to="/home-page-v3">
          <div className="home-page roboto-normal-summer-green-25px">Home Page</div>
        </Link>
      </div>
    );
  }
}

export default HomePageLink;
