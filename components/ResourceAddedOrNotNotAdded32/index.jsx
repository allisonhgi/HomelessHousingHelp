import React from "react";
import "./ResourceAddedOrNotNotAdded32.css";

class ResourceAddedOrNotNotAdded32 extends React.Component {
  render() {
    const { affordableHousing, theLargestAndMost, linkToResource } = this.props;

    return (
      <div className="resource-section-housing">
        <div className="affordable-housing roboto-medium-white-40px">{affordableHousing}</div>
        <div className="overlap-group1-16">
          <div className="the-largest-and-most librebaskerville-normal-white-25px">{theLargestAndMost}</div>
          <div className="rectangle-27"></div>
          <div className="link-to-resource roboto-medium-midnight-blue-25px">{linkToResource}</div>
        </div>
      </div>
    );
  }
}

export default ResourceAddedOrNotNotAdded32;
