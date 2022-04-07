import React from "react";
import "./SelectionsDefault.css";

class SelectionsDefault extends React.Component {
  render() {
    return (
      <div className="eligibility-questions border-1px-summer-green">
        <div className="overlap-group3-9">
          <div className="overlap-group2-23">
            <div className="in-order-to-be-eligi librebaskerville-normal-black-28px">
              <span className="span0-1 librebaskerville-normal-black-28px">
                In order to be eligible for an emergency housing voucher, you must be experiencing one of the following.
                <br />
              </span>
              <span className="span1-1 librebaskerville-normal-black-28px">
                <br />
                Please select all that apply to you.
              </span>
            </div>
            <div className="homeless-at-risk-of librebaskerville-normal-black-30px">
              Homeless&nbsp;&nbsp;
              <br />
              At Risk of Homelessness
              <br />
              Fleeing or attempting to flee domestic violence
              <br />
              Dating violence
              <br />
              Sexual assault
              <br />
              Stalking or human trafficking
              <br />
              None of the above apply to me
            </div>
            <div className="rectangle-12 border-2-5px-black"></div>
            <div className="rectangle-13 border-2-5px-black"></div>
            <div className="rectangle-14 border-2-5px-black"></div>
            <div className="rectangle-15 border-2-5px-black"></div>
          </div>
          <div className="rectangle-16 border-2-5px-black"></div>
          <div className="rectangle-17 border-2-5px-black"></div>
        </div>
        <div className="rectangle-18 border-2-5px-black"></div>
      </div>
    );
  }
}

export default SelectionsDefault;
