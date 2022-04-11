import React from "react";
import { Link } from "react-router-dom";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MoreResources from "../MoreResources";
import Property1Audio from "../Property1Audio";
import SelectionsDefault from "../SelectionsDefault";
import "./VoucherToolV3EligibilityQuestions.css";

class VoucherToolV3EligibilityQuestions extends React.Component {
  render() {
    const { voucherTool, line1, property1AudioProps } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-eligibility-questions screen">
          <div className="flex-row-74">
            <HomePageLink />
            <Logo />
            <MoreResources />
          </div>
          <div className="overlap-group4-19">
            <div className="voucher-tool-27 header-2">{voucherTool}</div>
            <img className="line-1-27" src={line1} />
          </div>
          <div className="flex-row-75">
            <Property1Audio className={property1AudioProps.className} />
            <SelectionsDefault />
          </div>
          <div className="tutorial-buttons-container-24">
            <Link to="/voucher-tool-v3-disclaimers" className="align-self-flex-end">
              <img className="tutorial-buttons-117" src="/img/tutorial-buttons-51@2x.svg" />
            </Link>
            <Link to="/voucher-tool-v3-disqualifications">
              <img className="tutorial-buttons-118" src="/img/tutorial-buttons-50@2x.svg" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolV3EligibilityQuestions;
