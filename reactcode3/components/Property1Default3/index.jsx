import React from "react";
import EvaarrowLeftFill from "../EvaarrowLeftFill";
import "./Property1Default3.css";

class Property1Default3 extends React.Component {
  render() {
    const { homeType } = this.props;

    return (
      <div className="filter-button border-1-5px-summer-green">
        <div className="home-type roboto-medium-summer-green-25px">{homeType}</div>
        <EvaarrowLeftFill />
      </div>
    );
  }
}

export default Property1Default3;
