import React from "react";
import "./ResourceAddedOrNotNotAdded3.css";

class ResourceAddedOrNotNotAdded3 extends React.Component {
  render() {
    const { housingChoiceVouchers, theHousingChoiceV, className } = this.props;

    return (
      <div className={`resource-section-8 ${className || ""}`}>
        <div className="housing-choice-vouchers-8 roboto-medium-white-40px">{housingChoiceVouchers}</div>
        <div className="the-housing-choice-v-8 librebaskerville-normal-white-25px">{theHousingChoiceV}</div>
      </div>
    );
  }
}

export default ResourceAddedOrNotNotAdded3;
