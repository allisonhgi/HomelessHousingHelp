import React from "react";
import { Link } from "react-router-dom";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MoreResources from "../MoreResources";
import Property1Audio from "../Property1Audio";
import Property1Default4 from "../Property1Default4";
import "./VoucherToolV3Disqualifications.css";

class VoucherToolV3Disqualifications extends React.Component {
  render() {
    const { voucherTool, line1, property1Default4Props } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-disqualifications screen">
          <div className="flex-row-18">
            <HomePageLink />
            <Logo />
            <MoreResources />
          </div>
          <div className="overlap-group2-9">
            <div className="voucher-tool-7 header-2">{voucherTool}</div>
            <img className="line-1-7" src={line1} />
          </div>
          <div className="flex-row-19">
            <Property1Audio />
            <Property1Default4
              checkIfAnyOfThe={property1Default4Props.checkIfAnyOfThe}
              youreARegistered={property1Default4Props.youreARegistered}
            />
          </div>
          <div className="tutorial-buttons-container-6">
            <Link to="/voucher-tool-v3-eligibility-questions" className="align-self-flex-end">
              <img className="tutorial-buttons-24" src="/img/tutorial-buttons-22@2x.svg" />
            </Link>
            <Link to="/voucher-tool-v3-disqualifications-notice-page">
              <img className="tutorial-buttons-25" src="/img/tutorial-buttons-21@2x.svg" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolV3Disqualifications;
