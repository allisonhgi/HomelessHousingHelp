import React from "react";
import "./Property1Default2.css";

class Property1Default2 extends React.Component {
  render() {
    const { trySeattle, search } = this.props;

    return (
      <div className="main-search-bar">
        <div className="overlap-group2-21">
          <div className="ant-designsearch-outlined">
            <img className="icon-search" src="/img/vector-8@2x.svg" />
          </div>
          <div className="try-seattle">{trySeattle}</div>
          <div className="overlap-group-67">
            <div className="search roboto-medium-white-30px">{search}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Property1Default2;
