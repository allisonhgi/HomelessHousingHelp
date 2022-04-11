import React from "react";
import { Link } from "react-router-dom";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MoreResources from "../MoreResources";
import Property1Audio from "../Property1Audio";
import TipTypeAudioButton2 from "../TipTypeAudioButton2";
import "./VoucherToolV3TutorialAudioButton.css";

class VoucherToolV3TutorialAudioButton extends React.Component {
  render() {
    const { voucherTool, line1, property1AudioProps, tipTypeAudioButton2Props } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-tutorial-audio-button screen">
          <div className="flex-row-78">
            <HomePageLink />
            <Logo />
            <MoreResources />
          </div>
          <div className="overlap-group2-45">
            <div className="voucher-tool-29 header-2">{voucherTool}</div>
            <img className="line-1-29" src={line1} />
          </div>
          <div className="flex-row-79">
            <Property1Audio className={property1AudioProps.className} />
            <TipTypeAudioButton2 thisButtonWillRea={tipTypeAudioButton2Props.thisButtonWillRea} />
          </div>
          <div className="tutorial-buttons-container-25">
            <Link to="/voucher-tool-v3-starting-screen" className="align-self-flex-end">
              <img className="tutorial-buttons-121" src="/img/tutorial-buttons-55@2x.svg" />
            </Link>
            <Link to="/voucher-tool-v3-tutorial-back-button">
              <img className="tutorial-buttons-122" src="/img/tutorial-buttons-54@2x.svg" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolV3TutorialAudioButton;
