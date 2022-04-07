import React from "react";
import "./ResourceAddedOrNotResourceAddedOrNo2.css";

class ResourceAddedOrNotResourceAddedOrNo2 extends React.Component {
  render() {
    const { universityDistrictFoodBank, ourMissionIsToBu } = this.props;

    return (
      <div className="resource-section-12">
        <div className="university-district-food-bank-2 roboto-medium-white-40px">{universityDistrictFoodBank}</div>
        <div className="our-mission-is-to-bu-2 librebaskerville-normal-white-25px">{ourMissionIsToBu}</div>
      </div>
    );
  }
}

export default ResourceAddedOrNotResourceAddedOrNo2;
