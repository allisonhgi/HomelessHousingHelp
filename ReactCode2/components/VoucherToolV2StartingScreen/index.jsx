import React from "react";
import { Link } from "react-router-dom";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MenuBar from "../MenuBar";
import Property1Audio from "../Property1Audio";
import Property1Welcome2 from "../Property1Welcome2";
import Property1BackToHome from "../Property1BackToHome";
import Property1SaveData from "../Property1SaveData";
import "./VoucherToolV2StartingScreen.css";

class VoucherToolV2StartingScreen extends React.Component {
  render() {
    const { voucherTool, line1, property1AudioProps, property1BackToHomeProps, property1SaveDataProps } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v2-starting-screen screen">
          <div className="flex-row-54">
            <HomePageLink />
            <Logo />
            <MenuBar />
          </div>
          <div className="overlap-group5-9">
            <div className="voucher-tool-17 header-2">{voucherTool}</div>
            <img className="line-1-17" src={line1} />
          </div>
          <div className="flex-row-55">
            <Property1Audio className={property1AudioProps.className} />
            <Property1Welcome2 />
          </div>
          <div className="tutorial-buttons-container-16">
            <Property1BackToHome className={property1BackToHomeProps.className} />
            <Property1SaveData className={property1SaveDataProps.className} />
            <Link to="/voucher-tool-v2-tutorial-audio-button">
              <img className="tutorial-buttons-97" src="/img/tutorial-buttons-17@2x.svg" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolV2StartingScreen;
