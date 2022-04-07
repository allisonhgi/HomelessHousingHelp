import React from "react";
import { Link } from "react-router-dom";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MenuBar from "../MenuBar";
import Property1Audio from "../Property1Audio";
import Property1SaveData from "../Property1SaveData";
import "./VoucherToolV2DisqualificationsNotic.css";

class VoucherToolV2DisqualificationsNotic extends React.Component {
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
      property1AudioProps,
      property1SaveDataProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v2-disqualifications-notice-page screen">
          <div className="flex-col-28">
            <div className="flex-row-46">
              <HomePageLink />
              <Logo />
              <MenuBar />
            </div>
            <div className="overlap-group3-20">
              <div className="voucher-tool-13 header-2">{voucherTool}</div>
              <img className="line-1-13" src={line1} />
            </div>
            <div className="flex-row-47">
              <Property1Audio className={property1AudioProps.className} />
              <div className="text-info-4 border-1px-black-2">
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
          </div>
          <div className="tutorial-buttons-container-12">
            <Link to="/voucher-tool-v2-disqualifications" className="align-self-flex-end">
              <img className="tutorial-buttons-89" src="/img/tutorial-buttons-16@2x.svg" />
            </Link>
            <Property1SaveData className={property1SaveDataProps.className} />
            <Link to="/voucher-tool-v3-required-paperwork-1">
              <img className="tutorial-buttons-90" src="/img/tutorial-buttons-15@2x.svg" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolV2DisqualificationsNotic;
