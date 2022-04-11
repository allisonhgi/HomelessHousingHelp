import React from "react";
import "./ResourceAddedOrNotNotAdded.css";

class ResourceAddedOrNotNotAdded extends React.Component {
  render() {
    return (
      <div className="resource-section">
        <div className="housing-choice-vouchers-1 roboto-medium-white-40px">Housing Choice Vouchers</div>
        <div className="the-housing-choice-v-1 librebaskerville-normal-white-25px">
          The Housing Choice Voucher program (formerly Section 8), helps low-income families, individuals, seniors and
          people with disabilities pay their monthly rent in privately owned apartments or houses.
        </div>
        <div className="overlap-group1-46">
          <div className="add-to-my-resources roboto-medium-midnight-blue-25px">+ Add to My Resources</div>
        </div>
      </div>
    );
  }
}

export default ResourceAddedOrNotNotAdded;
