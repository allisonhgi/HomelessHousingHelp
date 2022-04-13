import React from "react";
import { Link } from "react-router-dom";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MoreResources from "../MoreResources";
import Property1Audio from "../Property1Audio";
import TipTypeNextButton from "../TipTypeNextButton";
import "./VoucherToolV3TutorialNextButton.css";

class VoucherToolV3TutorialNextButton extends React.Component {
  render() {
    const { voucherTool, line1, property1AudioProps, tipTypeNextButtonProps } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-tutorial-next-button screen">
          <div className="flex-row-27">
            <HomePageLink />
            <Logo />
            <MoreResources />
          </div>
          <div className="overlap-group2-13">
            <div className="voucher-tool-11 header-2">{voucherTool}</div>
            <img className="line-1-11" src={line1} />
          </div>
          <Property1Audio className={property1AudioProps.className} />
          <div className="flex-row-28">
            <Link to="/voucher-tool-v3-starting-screen" className="align-self-flex-end">
              <img className="tutorial-buttons-32" src="/img/tutorial-buttons-9@2x.svg" />
            </Link>
            <div className="overlap-group3-7">
              <TipTypeNextButton thisButtonWillTak={tipTypeNextButtonProps.thisButtonWillTak} />
              <Link to="/voucher-tool-v3-tutorial-back-button">
                <img className="tutorial-buttons-33" src="/img/tutorial-buttons-8@2x.svg" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolV3TutorialNextButton;
