import React from "react";
import "./ResourceAddedOrNotResourceAddedOrNo2.css";

class ResourceAddedOrNotResourceAddedOrNo2 extends React.Component {
  render() {
    const { universityDistrictFoodBank, ourMissionIsToBu, linkToResource } = this.props;

    return (
      <div className="resource-section-1">
        <div className="overlap-group3-3">
          <a href="https://www.udistrictfoodbank.org/" target="_blank">
            <div className="rectangle-26-1"></div>
          </a>
          <div className="university-district-food-bank roboto-medium-white-40px">{universityDistrictFoodBank}</div>
          <div className="our-mission-is-to-bu librebaskerville-normal-white-25px">{ourMissionIsToBu}</div>
          <a href="https://www.udistrictfoodbank.org/" target="_blank">
            <div className="rectangle-27-4"></div>
          </a>
          <div className="link-to-resource-4 roboto-medium-midnight-blue-25px">{linkToResource}</div>
        </div>
      </div>
    );
  }
}

export default ResourceAddedOrNotResourceAddedOrNo2;
