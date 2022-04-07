import React from "react";
import EvaarrowLeftFill from "../EvaarrowLeftFill";
import "./Property1Variant2.css";

class Property1Variant2 extends React.Component {
  render() {
    const { bedrooms, evaarrowLeftFillProps } = this.props;

    return (
      <div className="filter-button-1 border-1-5px-summer-green">
        <div className="bedrooms roboto-medium-summer-green-25px">{bedrooms}</div>
        <EvaarrowLeftFill className={evaarrowLeftFillProps.className} />
      </div>
    );
  }
}

export default Property1Variant2;
