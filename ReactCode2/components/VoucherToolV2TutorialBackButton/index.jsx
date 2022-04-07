import React from "react";
import { Link } from "react-router-dom";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MenuBar from "../MenuBar";
import Property1Audio from "../Property1Audio";
import TipTypeBackButton2 from "../TipTypeBackButton2";
import Property1SaveData from "../Property1SaveData";
import "./VoucherToolV2TutorialBackButton.css";

class VoucherToolV2TutorialBackButton extends React.Component {
  render() {
    const { voucherTool, line1, tipTypeBackButton2Props, property1SaveDataProps } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v2-tutorial-back-button screen">
          <div className="flex-col-42">
            <div className="flex-row-90">
              <HomePageLink />
              <Logo />
              <MenuBar />
            </div>
            <div className="overlap-group4-21">
              <div className="voucher-tool-33 header-2">{voucherTool}</div>
              <img className="line-1-33" src={line1} />
            </div>
            <Property1Audio />
          </div>
          <div className="flex-row-91">
            <div className="overlap-group3-30">
              <TipTypeBackButton2 thisButtonWillTak={tipTypeBackButton2Props.thisButtonWillTak} />
              <Link to="/voucher-tool-v2-tutorial-audio-button">
                <img className="tutorial-buttons-127" src="/img/tutorial-buttons-41@2x.svg" />
              </Link>
            </div>
            <Property1SaveData className={property1SaveDataProps.className} />
            <Link to="/voucher-tool-v2-tutorial-save-data-button">
              <img className="tutorial-buttons-128" src="/img/tutorial-buttons-40@2x.svg" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolV2TutorialBackButton;
