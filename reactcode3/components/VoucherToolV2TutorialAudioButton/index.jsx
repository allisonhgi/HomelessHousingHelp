import React from "react";
import { Link } from "react-router-dom";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MenuBar from "../MenuBar";
import Property1Audio from "../Property1Audio";
import TipTypeAudioButton2 from "../TipTypeAudioButton2";
import Property1SaveData from "../Property1SaveData";
import "./VoucherToolV2TutorialAudioButton.css";

class VoucherToolV2TutorialAudioButton extends React.Component {
  render() {
    const { voucherTool, line1, property1AudioProps, tipTypeAudioButton2Props, property1SaveDataProps } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v2-tutorial-audio-button screen">
          <div className="flex-col-43">
            <div className="flex-row-94">
              <HomePageLink />
              <Logo />
              <MenuBar />
            </div>
            <div className="overlap-group3-33">
              <div className="voucher-tool-35 header-2">{voucherTool}</div>
              <img className="line-1-35" src={line1} />
            </div>
            <div className="flex-row-95">
              <Property1Audio className={property1AudioProps.className} />
              <TipTypeAudioButton2 thisButtonWillRea={tipTypeAudioButton2Props.thisButtonWillRea} />
            </div>
          </div>
          <div className="tutorial-buttons-container-28">
            <Link to="/voucher-tool-v2-starting-screen" className="align-self-flex-end">
              <img className="tutorial-buttons-132" src="/img/tutorial-buttons-43@2x.svg" />
            </Link>
            <Property1SaveData className={property1SaveDataProps.className} />
            <Link to="/voucher-tool-v2-tutorial-back-button">
              <img className="tutorial-buttons-133" src="/img/tutorial-buttons-42@2x.svg" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolV2TutorialAudioButton;
