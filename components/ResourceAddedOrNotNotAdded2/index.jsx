import React from "react";
import "./ResourceAddedOrNotNotAdded2.css";

class ResourceAddedOrNotNotAdded2 extends React.Component {
  render() {
    const { housingChoiceVouchers, theHousingChoiceV, linkToResource } = this.props;

    return (
      <div className="resource-section">
        <div className="overlap-group2-5">
          <a href="https://www.seattlehousing.org/housing/housing-choice-vouchers" target="_blank">
            <div className="rectangle-26"></div>
          </a>
          <div className="housing-choice-vouchers-1 roboto-medium-white-40px">{housingChoiceVouchers}</div>
          <div className="the-housing-choice-v-1 librebaskerville-normal-white-25px">{theHousingChoiceV}</div>
          <a href="https://www.seattlehousing.org/housing/housing-choice-vouchers" target="_blank">
            <div className="rectangle-27-3"></div>
          </a>
          <div className="link-to-resource-3 roboto-medium-midnight-blue-25px">{linkToResource}</div>
        </div>
      </div>
    );
  }
}

export default ResourceAddedOrNotNotAdded2;
