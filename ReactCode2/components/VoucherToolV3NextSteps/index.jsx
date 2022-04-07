import React from "react";
import { Link } from "react-router-dom";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MoreResources from "../MoreResources";
import Property1Audio from "../Property1Audio";
import "./VoucherToolV3NextSteps.css";

class VoucherToolV3NextSteps extends React.Component {
  render() {
    const {
      voucherTool,
      line1,
      spanText1,
      spanText2,
      spanText3,
      spanText4,
      spanText5,
      spanText6,
      spanText7,
      spanText8,
      givingVoucher1,
      property1AudioProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-next-steps screen">
          <div className="flex-col-22">
            <div className="flex-row-33">
              <HomePageLink />
              <Logo />
              <MoreResources />
            </div>
            <div className="overlap-group3-13">
              <div className="voucher-tool-10 header-2">{voucherTool}</div>
              <img className="line-1-10" src={line1} />
            </div>
          </div>
          <div className="flex-row-34">
            <div className="tutorial-buttons-container-9">
              <Property1Audio className={property1AudioProps.className} />
              <Link to="/voucher-tool-v3-required-paperwork">
                <img className="tutorial-buttons-82" src="/img/tutorial-buttons-20@2x.svg" />
              </Link>
            </div>
            <div className="overlap-group2-30">
              <div className="text-info-3 border-1px-black-2">
                <div className="if-youre-connected librebaskerville-normal-black-30px">
                  <span className="librebaskerville-normal-black-30px">{spanText1}</span>
                  <span className="librebaskerville-bold-black-30px">{spanText2}</span>
                  <span className="librebaskerville-normal-black-30px">{spanText3}</span>
                  <span className="librebaskerville-bold-black-30px">{spanText4}</span>
                  <span className="librebaskerville-normal-black-30px">{spanText5}</span>
                  <span className="librebaskerville-normal-black-29px">{spanText6}</span>
                  <span className="librebaskerville-bold-black-29px">{spanText7}</span>
                  <span className="librebaskerville-normal-black-29px">{spanText8}</span>
                </div>
              </div>
              <img className="giving-voucher-1" src={givingVoucher1} />
            </div>
            <Link to="/voucher-tool-v3-rap">
              <img className="tutorial-buttons-83" src="/img/tutorial-buttons-19@2x.svg" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolV3NextSteps;
