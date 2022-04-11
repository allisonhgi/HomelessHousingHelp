import React from "react";
import "./ResourceAddedOrNotNotAdded3.css";

class ResourceAddedOrNotNotAdded3 extends React.Component {
  render() {
    const { housingChoiceVouchers, theHousingChoiceV, linkToResource } = this.props;

    return (
      <div className="resource-section-8">
        <div className="overlap-group2-25">
          <a href="https://www.seattlehousing.org/housing/housing-choice-vouchers" target="_blank">
            <div className="rectangle-26"></div>
          </a>
          <div className="housing-choice-vouchers-8 roboto-medium-white-40px">{housingChoiceVouchers}</div>
          <div className="the-housing-choice-v-8 librebaskerville-normal-white-25px">{theHousingChoiceV}</div>
          <a href="https://www.seattlehousing.org/housing/housing-choice-vouchers" target="_blank">
            <div className="rectangle-27-1"></div>
          </a>
          <div className="link-to-resource-1 roboto-medium-midnight-blue-25px">{linkToResource}</div>
        </div>
      </div>
    );
  }
}

export default ResourceAddedOrNotNotAdded3;
