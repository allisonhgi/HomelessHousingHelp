import React from "react";
import { Link } from "react-router-dom";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MenuBar from "../MenuBar";
import Property1Audio from "../Property1Audio";
import RegionalAccessPointsV2 from "../RegionalAccessPointsV2";
import Property1SaveData from "../Property1SaveData";
import "./VoucherToolV2RAP.css";

class VoucherToolV2RAP extends React.Component {
  render() {
    const { voucherTool, line1, property1AudioProps, regionalAccessPointsV2Props, property1SaveDataProps } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v2-rap screen">
          <div className="flex-col-26">
            <div className="flex-row-43">
              <HomePageLink />
              <Logo />
              <MenuBar />
            </div>
            <div className="overlap-group5-9">
              <div className="voucher-tool-13 header-2">{voucherTool}</div>
              <img className="line-1-13" src={line1} />
            </div>
            <div className="flex-row-44">
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
          </div>
          <div className="tutorial-buttons-container-11">
            <Link to="/voucher-tool-v2-next-steps" className="align-self-flex-end">
              <img className="tutorial-buttons-90" src="/img/tutorial-buttons-36@2x.svg" />
            </Link>
            <Property1SaveData className={property1SaveDataProps.className} />
            <Link to="/voucher-tool-v2-download-info">
              <img className="tutorial-buttons-91" src="/img/tutorial-buttons-24@2x.svg" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolV2RAP;
