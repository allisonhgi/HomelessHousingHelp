import React from "react";
import "./ResourceAddedOrNotNotAdded5.css";

class ResourceAddedOrNotNotAdded5 extends React.Component {
  render() {
    const { affordableHousing, theLargestAndMost, linkToResource } = this.props;

    return (
      <div className="resource-section-housing">
        <div className="affordable-housing roboto-medium-white-40px">{affordableHousing}</div>
        <div className="overlap-group1-60">
          <div className="the-largest-and-most librebaskerville-normal-white-25px">{theLargestAndMost}</div>
          <a href="https://www.affordablehousing.com/" target="_blank">
            <div className="rectangle-27-3"></div>
          </a>
          <div className="link-to-resource-3 roboto-medium-midnight-blue-25px">{linkToResource}</div>
        </div>
      </div>
    );
  }
}

export default ResourceAddedOrNotNotAdded5;
