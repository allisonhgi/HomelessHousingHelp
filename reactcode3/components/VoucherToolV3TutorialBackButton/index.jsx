import React from "react";
import { Link } from "react-router-dom";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MoreResources from "../MoreResources";
import Property1Audio from "../Property1Audio";
import TipTypeBackButton2 from "../TipTypeBackButton2";
import "./VoucherToolV3TutorialBackButton.css";

class VoucherToolV3TutorialBackButton extends React.Component {
  render() {
    const { voucherTool, line1, property1AudioProps, tipTypeBackButton2Props } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-tutorial-back-button screen">
          <div className="flex-row-68">
            <HomePageLink />
            <Logo />
            <MoreResources />
          </div>
          <div className="overlap-group3-27">
            <div className="voucher-tool-24 header-2">{voucherTool}</div>
            <img className="line-1-24" src={line1} />
          </div>
          <Property1Audio className={property1AudioProps.className} />
          <div className="flex-row-69">
            <div className="overlap-group2-42">
              <TipTypeBackButton2 thisButtonWillTak={tipTypeBackButton2Props.thisButtonWillTak} />
              <Link to="/voucher-tool-v3-tutorial-audio-button">
                <img className="tutorial-buttons-111" src="/img/tutorial-buttons-47@2x.svg" />
              </Link>
            </div>
            <Link to="/voucher-tool-v3-tutorial-next-button">
              <img className="tutorial-buttons-112" src="/img/tutorial-buttons-46@2x.svg" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolV3TutorialBackButton;
