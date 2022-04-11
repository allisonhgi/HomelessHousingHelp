import React from "react";
import "./ResourceAddedOrNotResourceAddedOrNo3.css";

class ResourceAddedOrNotResourceAddedOrNo3 extends React.Component {
  render() {
    const { name, kchaHelpsRentersI, linkToResource } = this.props;

    return (
      <div className="resource-section-housing-1">
        <div className="name-5 roboto-medium-white-40px">{name}</div>
        <div className="overlap-group2-47">
          <div className="kcha-helps-renters-i librebaskerville-normal-white-25px">{kchaHelpsRentersI}</div>
          <a href="https://www.kcha.org/housing/vouchers/search" target="_blank">
            <div className="rectangle-27-4"></div>
          </a>
          <div className="link-to-resource-4 roboto-medium-hippie-blue-25px">{linkToResource}</div>
        </div>
      </div>
    );
  }
}

export default ResourceAddedOrNotResourceAddedOrNo3;
