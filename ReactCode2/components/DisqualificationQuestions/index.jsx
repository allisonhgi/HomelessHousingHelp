import React from "react";
import { Link } from "react-router-dom";
import "./DisqualificationQuestions.css";

class DisqualificationQuestions extends React.Component {
  render() {
    const { checkIfAnyOfThe, youreARegistered } = this.props;

    return (
      <div className="disqualification-questions librebaskerville-normal-black-28px border-1px-black-2">
        <div className="check-if-any-of-the">{checkIfAnyOfThe}</div>
        <div className="flex-row-31">
          <div className="flex-col-21">
            <Link to="/voucher-tool-v2-disqualifications-notice-page">
              <div className="rectangle-24 border-2-5px-black"></div>
            </Link>
            <Link to="/voucher-tool-v2-disqualifications-notice-page">
              <img className="rectangle-23" src="/img/rectangle-23@2x.svg" />
            </Link>
            <Link to="/voucher-tool-v2-disqualifications-notice-page">
              <div className="rectangle-2 border-2-5px-black"></div>
            </Link>
            <Link to="/voucher-tool-v2-disqualifications-notice-page">
              <div className="rectangle-16-3 border-2-5px-black"></div>
            </Link>
            <Link to="/voucher-tool-v3-required-paperwork-1">
              <div className="rectangle-2 border-2-5px-black"></div>
            </Link>
          </div>
          <div className="youre-a-registered">{youreARegistered}</div>
        </div>
      </div>
    );
  }
}

export default DisqualificationQuestions;
