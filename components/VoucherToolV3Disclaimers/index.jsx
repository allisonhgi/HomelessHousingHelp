import React from "react";
import { Link } from "react-router-dom";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MoreResources from "../MoreResources";
import Property1Audio from "../Property1Audio";
import "./VoucherToolV3Disclaimers.css";

class VoucherToolV3Disclaimers extends React.Component {
  render() {
    const { voucherTool, line1, spanText1, spanText2, spanText3, voucherApplying1 } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-disclaimers screen">
          <div className="flex-row-21">
            <HomePageLink />
            <Logo />
            <MoreResources />
          </div>
          <div className="overlap-group2-10">
            <div className="voucher-tool-8 header-2">{voucherTool}</div>
            <img className="line-1-8" src={line1} />
          </div>
          <div className="flex-row-22">
            <Property1Audio />
            <div className="tool-question-screen-1 border-1px-summer-green">
              <div className="overlap-group-20">
                <div className="obot librebaskerville-normal-black-35px">
                  <span className="librebaskerville-normal-black-35px">{spanText1}</span>
                  <span className="span1-4">{spanText2}</span>
                  <span className="librebaskerville-normal-black-35px">{spanText3}</span>
                </div>
                <img className="voucher-applying-1" src={voucherApplying1} />
              </div>
            </div>
          </div>
          <div className="tutorial-buttons-container-7">
            <img className="tutorial-buttons-26" src="/img/tutorial-buttons-24@2x.svg" />
            <Link to="/voucher-tool-v3-eligibility-questions">
              <img className="tutorial-buttons-27" src="/img/tutorial-buttons-23@2x.svg" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolV3Disclaimers;
