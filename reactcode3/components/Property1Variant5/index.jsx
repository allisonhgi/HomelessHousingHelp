import React from "react";
import "./Property1Variant5.css";

class Property1Variant5 extends React.Component {
  render() {
    const { proofOfIncome, className } = this.props;

    return (
      <div className={`document-button ${className || ""}`}>
        <div className="proof-of-income roboto-medium-white-30px">{proofOfIncome}</div>
        <div className="overlap-group-82">
          <div className="click-for-details-3 roboto-medium-white-21px">Click for Details</div>
        </div>
      </div>
    );
  }
}

export default Property1Variant5;
