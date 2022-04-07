import React from "react";
import { Link } from "react-router-dom";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MenuBar from "../MenuBar";
import Property1Audio from "../Property1Audio";
import Property1SaveData from "../Property1SaveData";
import TipTypeSaveData from "../TipTypeSaveData";
import "./VoucherToolV2TutorialSaveDataButton.css";

class VoucherToolV2TutorialSaveDataButton extends React.Component {
  render() {
    const { voucherTool, line1, property1AudioProps, property1SaveDataProps, tipTypeSaveDataProps } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v2-tutorial-save-data-button screen">
          <div className="flex-row-80">
            <HomePageLink />
            <Logo />
            <MenuBar />
          </div>
          <div className="overlap-group4-18">
            <div className="voucher-tool-29 header-2">{voucherTool}</div>
            <img className="line-1-29" src={line1} />
          </div>
          <Property1Audio className={property1AudioProps.className} />
          <div className="flex-row-81">
            <Link to="/voucher-tool-v2-tutorial-back-button">
              <img className="tutorial-buttons-120" src="/img/tutorial-buttons-33@2x.svg" />
            </Link>
            <div className="overlap-group5-12">
              <Property1SaveData className={property1SaveDataProps.className} />
              <TipTypeSaveData thisButtonWillSav={tipTypeSaveDataProps.thisButtonWillSav} />
            </div>
            <Link to="/voucher-tool-tutorial-next-button">
              <img className="tutorial-buttons-121" src="/img/tutorial-buttons-32@2x.svg" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolV2TutorialSaveDataButton;
