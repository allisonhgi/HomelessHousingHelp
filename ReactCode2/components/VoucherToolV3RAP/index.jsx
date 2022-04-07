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
    const { voucherTool, line1, property1AudioProps, regionalAccessPointsV2Props } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-rap screen">
          <div className="flex-row-15">
            <HomePageLink />
            <Logo />
            <MoreResources />
          </div>
          <div className="overlap-group5-2">
            <div className="voucher-tool-5 header-2">{voucherTool}</div>
            <img className="line-1-5" src={line1} />
          </div>
          <div className="flex-row-16">
            <Property1Audio className={property1AudioProps.className} />
            <RegionalAccessPointsV2
              regionalAccessPoin={regionalAccessPointsV2Props.regionalAccessPoin}
              property1Default81Props={regionalAccessPointsV2Props.property1Default81Props}
              property1Default82Props={regionalAccessPointsV2Props.property1Default82Props}
              property1Default83Props={regionalAccessPointsV2Props.property1Default83Props}
              property1Default84Props={regionalAccessPointsV2Props.property1Default84Props}
              property1Default85Props={regionalAccessPointsV2Props.property1Default85Props}
            />
          </div>
          <div className="tutorial-buttons-container-4">
            <Link to="/voucher-tool-v3-next-steps" className="align-self-flex-end">
              <img className="tutorial-buttons-72" src="/img/tutorial-buttons-9@2x.svg" />
            </Link>
            <Link to="/voucher-tool-v3-download-info">
              <img className="tutorial-buttons-73" src="/img/tutorial-buttons-10@2x.svg" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolV3RAP;
