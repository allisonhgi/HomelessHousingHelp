import React from "react";
import { Link } from "react-router-dom";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MoreResources from "../MoreResources";
import Property1Audio from "../Property1Audio";
import "./VoucherToolV3DisqualificationsNotic.css";

class VoucherToolV3DisqualificationsNotic extends React.Component {
  render() {
    const { voucherTool, line1, spanText1, spanText2, spanText3, spanText4, spanText5, spanText6 } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-disqualifications-notice-page screen">
          <div className="flex-row-12">
            <HomePageLink />
            <Logo />
            <MoreResources />
          </div>
          <div className="overlap-group2-8">
            <div className="voucher-tool-5 header-2">{voucherTool}</div>
            <img className="line-1-5" src={line1} />
          </div>
          <div className="flex-row-13">
            <Property1Audio />
            <div className="text-info-3 border-1px-black-2">
              <div className="theres-a-possibilit librebaskerville-normal-black-30px">
                <span className="librebaskerville-normal-black-30px">{spanText1}</span>
                <span className="librebaskerville-bold-black-30px">{spanText2}</span>
                <span className="librebaskerville-normal-black-30px">{spanText3}</span>
                <span className="librebaskerville-bold-black-30px">{spanText4}</span>
                <span className="librebaskerville-normal-black-30px">{spanText5}</span>
                <span className="librebaskerville-normal-black-30px">{spanText6}</span>
              </div>
            </div>
          </div>
          <div className="tutorial-buttons-container-4">
            <Link to="/voucher-tool-v3-disqualifications" className="align-self-flex-end">
              <img className="tutorial-buttons-20" src="/img/tutorial-buttons-7@2x.svg" />
            </Link>
            <Link to="/voucher-tool-v3-required-paperwork">
              <img className="tutorial-buttons-21" src="/img/tutorial-buttons-6@2x.svg" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolV3DisqualificationsNotic;
