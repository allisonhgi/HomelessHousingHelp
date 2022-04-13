import React from "react";
import { Link } from "react-router-dom";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MoreResources from "../MoreResources";
import Property1Audio from "../Property1Audio";
import RegionalAccessPointsV2 from "../RegionalAccessPointsV2";
import "./VoucherToolV3RAP.css";

class VoucherToolV3RAP extends React.Component {
  render() {
    const { voucherTool, line1, regionalAccessPointsV2Props } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-rap screen">
          <div className="flex-row-4">
            <HomePageLink />
            <Logo />
            <MoreResources />
          </div>
          <div className="overlap-group5-2">
            <div className="voucher-tool-1 header-2">{voucherTool}</div>
            <img className="line-1-1" src={line1} />
          </div>
          <div className="flex-row-5">
            <Property1Audio />
            <RegionalAccessPointsV2
              regionalAccessPoin={regionalAccessPointsV2Props.regionalAccessPoin}
              property1Default21Props={regionalAccessPointsV2Props.property1Default21Props}
              property1Default22Props={regionalAccessPointsV2Props.property1Default22Props}
              property1Default23Props={regionalAccessPointsV2Props.property1Default23Props}
              property1Default24Props={regionalAccessPointsV2Props.property1Default24Props}
              property1Default25Props={regionalAccessPointsV2Props.property1Default25Props}
            />
          </div>
          <div className="tutorial-buttons-container-1">
            <Link to="/voucher-tool-v3-next-steps" className="align-self-flex-end">
              <img className="tutorial-buttons-8" src="/img/tutorial-buttons-10@2x.svg" />
            </Link>
            <Link to="/voucher-tool-v3-download-info">
              <img className="tutorial-buttons-9" src="/img/tutorial-buttons-11@2x.svg" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolV3RAP;
