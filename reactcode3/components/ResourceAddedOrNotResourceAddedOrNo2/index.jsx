import React from "react";
import "./ResourceAddedOrNotResourceAddedOrNo2.css";

class ResourceAddedOrNotResourceAddedOrNo2 extends React.Component {
  render() {
    const { universityDistrictFoodBank, ourMissionIsToBu, linkToResource } = this.props;

    return (
      <div className="resource-section-9">
        <div className="overlap-group3-10">
          <a href="https://www.udistrictfoodbank.org/" target="_blank">
            <div className="rectangle-26-1"></div>
          </a>
          <div className="university-district-food-bank-2 roboto-medium-white-40px">{universityDistrictFoodBank}</div>
          <div className="our-mission-is-to-bu-2 librebaskerville-normal-white-25px">{ourMissionIsToBu}</div>
          <a href="https://www.udistrictfoodbank.org/" target="_blank">
            <div className="rectangle-27-2"></div>
          </a>
          <div className="link-to-resource-2 roboto-medium-midnight-blue-25px">{linkToResource}</div>
        </div>
      </div>
    );
  }
}

export default ResourceAddedOrNotResourceAddedOrNo2;