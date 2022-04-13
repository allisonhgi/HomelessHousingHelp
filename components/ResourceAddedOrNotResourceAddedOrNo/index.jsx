import React from "react";
import "./ResourceAddedOrNotResourceAddedOrNo.css";

class ResourceAddedOrNotResourceAddedOrNo extends React.Component {
  render() {
    const { name, kchaHelpsRentersI, linkToResource } = this.props;

    return (
      <div className="resource-section-housing-1">
        <div className="name roboto-medium-white-40px">{name}</div>
        <div className="overlap-group2-3">
          <div className="kcha-helps-renters-i librebaskerville-normal-white-25px">{kchaHelpsRentersI}</div>
          <a href="https://www.kcha.org/housing/vouchers/search" target="_blank">
            <div className="rectangle-27-1"></div>
          </a>
          <div className="link-to-resource-1">{linkToResource}</div>
        </div>
      </div>
    );
  }
}

export default ResourceAddedOrNotResourceAddedOrNo;
