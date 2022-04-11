import React from "react";
import "./Property1Variant3.css";

class Property1Variant3 extends React.Component {
  render() {
    const { moreFilters } = this.props;

    return (
      <div className="filter-button-2 border-1-5px-summer-green">
        <div className="more-filters roboto-medium-summer-green-25px">{moreFilters}</div>
        <div className="evaarrow-left-fill-23">
          <img className="vector-124" src="/img/vector-10@2x.svg" />
        </div>
      </div>
    );
  }
}

export default Property1Variant3;
