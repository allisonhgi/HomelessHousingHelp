import React from "react";
import { Link } from "react-router-dom";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MenuBar from "../MenuBar";
import Property1Audio from "../Property1Audio";
import DisqualificationQuestions2 from "../DisqualificationQuestions2";
import Property1SaveData from "../Property1SaveData";
import "./VoucherToolV2Disqualifications.css";

class VoucherToolV2Disqualifications extends React.Component {
  render() {
    const { voucherTool, line1, property1AudioProps, property1SaveDataProps } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v2-disqualifications screen">
          <div className="flex-col-40">
            <div className="flex-row-72">
              <HomePageLink />
              <Logo />
              <MenuBar />
            </div>
            <div className="overlap-group3-28">
              <div className="voucher-tool-26 header-2">{voucherTool}</div>
              <img className="line-1-26" src={line1} />
            </div>
            <div className="flex-row-73">
              <Property1Audio className={property1AudioProps.className} />
              <DisqualificationQuestions2 />
            </div>
          </div>
          <div className="tutorial-buttons-container-23">
            <Link to="/voucher-tool-v2-eligibility-questions" className="align-self-flex-end">
              <img className="tutorial-buttons-115" src="/img/tutorial-buttons-31@2x.svg" />
            </Link>
            <Property1SaveData className={property1SaveDataProps.className} />
            <Link to="/voucher-tool-v3-required-paperwork-1">
              <img className="tutorial-buttons-116" src="/img/tutorial-buttons-30@2x.svg" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolV2Disqualifications;
