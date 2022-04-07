import React from "react";
import "./Property1Default82.css";

class Property1Default82 extends React.Component {
  render() {
    const { catholicCommunityServices, className } = this.props;

    return (
      <div className={`regional-access-point-v2-2 ${className || ""}`}>
        <div className="catholic-community-services roboto-medium-white-29px">{catholicCommunityServices}</div>
        <div className="overlap-group-71">
          <div className="click-for-details roboto-medium-white-21px">Click for Details</div>
        </div>
      </div>
    );
  }
}

export default Property1Default82;
