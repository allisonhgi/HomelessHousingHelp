import React from "react";
import { Link } from "react-router-dom";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MoreResources from "../MoreResources";
import Property1Audio from "../Property1Audio";
import DisqualificationQuestions2 from "../DisqualificationQuestions2";
import "./VoucherToolV3Disqualifications.css";

class VoucherToolV3Disqualifications extends React.Component {
  render() {
    const { voucherTool, line1, property1AudioProps } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-disqualifications screen">
          <div className="flex-row-64">
            <HomePageLink />
            <Logo />
            <MoreResources />
          </div>
          <div className="overlap-group2-39">
            <div className="voucher-tool-22 header-2">{voucherTool}</div>
            <img className="line-1-22" src={line1} />
          </div>
          <div className="flex-row-65">
            <Property1Audio className={property1AudioProps.className} />
            <DisqualificationQuestions2 />
          </div>
          <div className="tutorial-buttons-container-21">
            <Link to="/voucher-tool-v3-eligibility-questions" className="align-self-flex-end">
              <img className="tutorial-buttons-106" src="/img/tutorial-buttons-43@2x.svg" />
            </Link>
            <Link to="/voucher-tool-v3-required-paperwork">
              <img className="tutorial-buttons-107" src="/img/tutorial-buttons-42@2x.svg" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolV3Disqualifications;
