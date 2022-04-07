import React from "react";
import { Link } from "react-router-dom";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MoreResources from "../MoreResources";
import Property1Audio from "../Property1Audio";
import "./VoucherToolV3Disclaimers.css";

class VoucherToolV3Disclaimers extends React.Component {
  render() {
    const { voucherTool, line1, spanText1, spanText2, spanText3, voucherApplying1, property1AudioProps } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-disclaimers screen">
          <div className="flex-row-68">
            <HomePageLink />
            <Logo />
            <MoreResources />
          </div>
          <div className="overlap-group2-40">
            <div className="voucher-tool-23 header-2">{voucherTool}</div>
            <img className="line-1-23" src={line1} />
          </div>
          <div className="flex-row-69">
            <Property1Audio className={property1AudioProps.className} />
            <div className="tool-question-screen-5 border-1px-summer-green">
              <div className="overlap-group-84">
                <div className="obot-2 librebaskerville-normal-black-35px">
                  <span className="librebaskerville-normal-black-35px">{spanText1}</span>
                  <span className="librebaskerville-bold-black-35px">{spanText2}</span>
                  <span className="librebaskerville-normal-black-35px">{spanText3}</span>
                </div>
                <img className="voucher-applying-1-1" src={voucherApplying1} />
              </div>
            </div>
          </div>
          <div className="tutorial-buttons-container-22">
            <Link to="/voucher-tool-v3-starting-screen" className="align-self-flex-end">
              <img className="tutorial-buttons-108" src="/img/tutorial-buttons-45@2x.svg" />
            </Link>
            <Link to="/voucher-tool-v3-eligibility-questions">
              <img className="tutorial-buttons-109" src="/img/tutorial-buttons-44@2x.svg" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolV3Disclaimers;
