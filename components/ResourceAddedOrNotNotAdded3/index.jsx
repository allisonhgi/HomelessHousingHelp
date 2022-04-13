import React from "react";
import "./ResourceAddedOrNotNotAdded3.css";

class ResourceAddedOrNotNotAdded3 extends React.Component {
  render() {
    const { housingChoiceVouchers, theHousingChoiceV } = this.props;

    return (
      <div className="resource-section-2">
        <div className="overlap-group1-17">
          <a href="https://lihi.org/rosies-village/" target="_blank">
            <div className="rectangle-26-2"></div>
          </a>
          <div className="housing-choice-vouchers-2 roboto-medium-white-40px">{housingChoiceVouchers}</div>
          <div className="the-housing-choice-v-2 librebaskerville-normal-white-25px">{theHousingChoiceV}</div>
        </div>
      </div>
    );
  }
}

export default ResourceAddedOrNotNotAdded3;
