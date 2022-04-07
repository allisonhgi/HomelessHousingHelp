import React from "react";
import "./Property1Default6.css";

class Property1Default6 extends React.Component {
  render() {
    const { catholicCommunityServices, className } = this.props;

    return (
      <div className={`regional-access-point-default-1 ${className || ""}`}>
        <div className="catholic-community-services-2 roboto-medium-white-29px">{catholicCommunityServices}</div>
        <div className="view-on-map roboto-medium-white-23px">View on Map</div>
        <img className="icon-cursor" src="/img/vector-85@2x.svg" />
      </div>
    );
  }
}

export default Property1Default6;
