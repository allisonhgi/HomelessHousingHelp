import React from "react";
import { Link } from "react-router-dom";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MoreResources from "../MoreResources";
import Property1Audio from "../Property1Audio";
import TipTypeBackButton from "../TipTypeBackButton";
import "./VoucherToolV3TutorialBackButton.css";

class VoucherToolV3TutorialBackButton extends React.Component {
  render() {
    const { voucherTool, line1, property1AudioProps, tipTypeBackButtonProps } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-tutorial-back-button screen">
          <div className="flex-row-23">
            <HomePageLink />
            <Logo />
            <MoreResources />
          </div>
          <div className="overlap-group3-6">
            <div className="voucher-tool-9 header-2">{voucherTool}</div>
            <img className="line-1-9" src={line1} />
          </div>
          <Property1Audio className={property1AudioProps.className} />
          <div className="flex-row-24">
            <div className="overlap-group2-11">
              <TipTypeBackButton thisButtonWillTak={tipTypeBackButtonProps.thisButtonWillTak} />
              <Link to="/voucher-tool-v3-tutorial-next-button">
                <img className="tutorial-buttons-28" src="/img/tutorial-buttons-15@2x.svg" />
              </Link>
            </div>
            <Link to="/voucher-tool-v3-tutorial-audio-button">
              <img className="tutorial-buttons-29" src="/img/tutorial-buttons-14@2x.svg" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolV3TutorialBackButton;
