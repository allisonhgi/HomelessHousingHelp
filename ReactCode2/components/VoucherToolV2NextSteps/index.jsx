import React from "react";
import { Link } from "react-router-dom";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MenuBar from "../MenuBar";
import Property1Audio from "../Property1Audio";
import Property1SaveData from "../Property1SaveData";
import "./VoucherToolV2NextSteps.css";

class VoucherToolV2NextSteps extends React.Component {
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
      property1SaveDataProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v2-next-steps screen">
          <div className="flex-col-34">
            <div className="flex-row-56">
              <HomePageLink />
              <Logo />
              <MenuBar />
            </div>
            <div className="overlap-group3-23">
              <div className="voucher-tool-18 header-2">{voucherTool}</div>
              <img className="line-1-18" src={line1} />
            </div>
          </div>
          <div className="flex-row-57">
            <div className="tutorial-buttons-container-17">
              <Property1Audio className={property1AudioProps.className} />
              <Link to="/voucher-tool-v3-required-paperwork-1">
                <img className="tutorial-buttons-98" src="/img/tutorial-buttons-25@2x.svg" />
              </Link>
            </div>
            <div className="overlap-group5-10">
              <Property1SaveData className={property1SaveDataProps.className} />
              <div className="overlap-group4-15">
                <div className="text-info-7 border-1px-black-2">
                  <div className="if-youre-connected-1 librebaskerville-normal-black-30px">
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
                <img className="giving-voucher-1-1" src={givingVoucher1} />
              </div>
            </div>
            <Link to="/voucher-tool-v2-rap">
              <img className="tutorial-buttons-99" src="/img/tutorial-buttons-24@2x.svg" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolV2NextSteps;
