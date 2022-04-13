import React from "react";
import "./SelectionsDefault.css";

class SelectionsDefault extends React.Component {
  render() {
    const { spanText1, spanText2, homelessAtRiskOf } = this.props;

    return (
      <div className="eligibility-questions border-1px-summer-green">
        <div className="overlap-group3-8">
          <div className="overlap-group2-14">
            <div className="in-order-to-be-eligi librebaskerville-normal-black-28px">
              <span className="span0-2 librebaskerville-normal-black-28px">{spanText1}</span>
              <span className="span1-5 librebaskerville-normal-black-28px">{spanText2}</span>
            </div>
            <div className="homeless-at-risk-of librebaskerville-normal-black-30px">{homelessAtRiskOf}</div>
            <div className="rectangle-12 border-2-5px-black"></div>
            <div className="rectangle-13 border-2-5px-black"></div>
            <div className="rectangle-14 border-2-5px-black"></div>
            <div className="rectangle-15 border-2-5px-black"></div>
          </div>
          <div className="rectangle-16-1 border-2-5px-black"></div>
          <div className="rectangle-17 border-2-5px-black"></div>
        </div>
        <div className="rectangle-18 border-2-5px-black"></div>
      </div>
    );
  }
}

export default SelectionsDefault;
