import React from "react";
import { Link } from "react-router-dom";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MoreResources from "../MoreResources";
import Property1Audio from "../Property1Audio";
import Property1Welcome2 from "../Property1Welcome2";
import Property1BackToHome from "../Property1BackToHome";
import "./VoucherToolV3StartingScreen.css";

class VoucherToolV3StartingScreen extends React.Component {
  render() {
    const { voucherTool, line1, property1AudioProps, property1BackToHomeProps } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-starting-screen screen">
          <div className="flex-row-86">
            <HomePageLink />
            <Logo />
            <MoreResources />
          </div>
          <div className="overlap-group4-20">
            <div className="voucher-tool-32 header-2">{voucherTool}</div>
            <img className="line-1-32" src={line1} />
          </div>
          <div className="flex-row-87">
            <Property1Audio className={property1AudioProps.className} />
            <Property1Welcome2 />
          </div>
          <div className="tutorial-buttons-container-27">
            <Property1BackToHome className={property1BackToHomeProps.className} />
            <Link to="/voucher-tool-v3-tutorial-audio-button">
              <img className="tutorial-buttons-126" src="/img/tutorial-buttons-62@2x.svg" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolV3StartingScreen;
