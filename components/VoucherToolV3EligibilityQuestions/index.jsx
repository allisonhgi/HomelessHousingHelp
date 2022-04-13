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
    const { voucherTool, line1, property1AudioProps, selectionsDefaultProps } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-eligibility-questions screen">
          <div className="flex-row-29">
            <HomePageLink />
            <Logo />
            <MoreResources />
          </div>
          <div className="overlap-group4-4">
            <div className="voucher-tool-12 header-2">{voucherTool}</div>
            <img className="line-1-12" src={line1} />
          </div>
          <div className="flex-row-30">
            <Property1Audio className={property1AudioProps.className} />
            <SelectionsDefault
              spanText1={selectionsDefaultProps.spanText1}
              spanText2={selectionsDefaultProps.spanText2}
              homelessAtRiskOf={selectionsDefaultProps.homelessAtRiskOf}
            />
          </div>
          <div className="tutorial-buttons-container-9">
            <Link to="/voucher-tool-v3-disclaimers" className="align-self-flex-end">
              <img className="tutorial-buttons-34" src="/img/tutorial-buttons-20@2x.svg" />
            </Link>
            <Link to="/voucher-tool-v3-disqualifications">
              <img className="tutorial-buttons-35" src="/img/tutorial-buttons-19@2x.svg" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolV3EligibilityQuestions;
