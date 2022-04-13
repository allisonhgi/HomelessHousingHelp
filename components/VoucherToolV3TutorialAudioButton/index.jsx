import React from "react";
import { Link } from "react-router-dom";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MoreResources from "../MoreResources";
import Property1Audio from "../Property1Audio";
import TipTypeAudioButton from "../TipTypeAudioButton";
import "./VoucherToolV3TutorialAudioButton.css";

class VoucherToolV3TutorialAudioButton extends React.Component {
  render() {
    const { voucherTool, line1, property1AudioProps, tipTypeAudioButtonProps } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-tutorial-audio-button screen">
          <div className="flex-row-25">
            <HomePageLink />
            <Logo />
            <MoreResources />
          </div>
          <div className="overlap-group2-12">
            <div className="voucher-tool-10 header-2">{voucherTool}</div>
            <img className="line-1-10" src={line1} />
          </div>
          <div className="flex-row-26">
            <Property1Audio className={property1AudioProps.className} />
            <TipTypeAudioButton thisButtonWillRea={tipTypeAudioButtonProps.thisButtonWillRea} />
          </div>
          <div className="tutorial-buttons-container-8">
            <Link to="/voucher-tool-v3-tutorial-back-button" className="align-self-flex-end">
              <img className="tutorial-buttons-30" src="/img/tutorial-buttons-5@2x.svg" />
            </Link>
            <Link to="/voucher-tool-v3-disclaimers">
              <img className="tutorial-buttons-31" src="/img/tutorial-buttons-4@2x.svg" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolV3TutorialAudioButton;
