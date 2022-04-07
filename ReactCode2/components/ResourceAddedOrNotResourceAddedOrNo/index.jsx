import React from "react";
import "./ResourceAddedOrNotResourceAddedOrNo.css";

class ResourceAddedOrNotResourceAddedOrNo extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`resource-section-3 ${className || ""}`}>
        <div className="university-district-food-bank roboto-medium-white-40px">University District Food Bank</div>
        <div className="our-mission-is-to-bu librebaskerville-normal-white-25px">
          Our mission is to build a hunger-free Northeast Seattle by providing our neighbors with reliable access to
          healthy food and life-changing resources.
        </div>
        <div className="overlap-group3-6">
          <div className="add-to-my-resources-3 roboto-medium-midnight-blue-25px">+ Add to My Resources</div>
        </div>
      </div>
    );
  }
}

export default ResourceAddedOrNotResourceAddedOrNo;
