import React from "react";
import "./ResourceAddedOrNotNotAdded4.css";

class ResourceAddedOrNotNotAdded4 extends React.Component {
  render() {
    const { housingChoiceVouchers, theHousingChoiceV } = this.props;

    return (
      <div className="resource-section-10">
        <div className="overlap-group1-51">
          <a href="https://lihi.org/rosies-village/" target="_blank">
            <div className="rectangle-26-2"></div>
          </a>
          <div className="housing-choice-vouchers-9 roboto-medium-white-40px">{housingChoiceVouchers}</div>
          <div className="the-housing-choice-v-9 librebaskerville-normal-white-25px">{theHousingChoiceV}</div>
        </div>
      </div>
    );
  }
}

export default ResourceAddedOrNotNotAdded4;
