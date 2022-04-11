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
          <div className="flex-row-76">
            <HomePageLink />
            <Logo />
            <MoreResources />
          </div>
          <div className="overlap-group2-44">
            <div className="voucher-tool-28 header-2">{voucherTool}</div>
            <img className="line-1-28" src={line1} />
          </div>
          <Property1Audio className={property1AudioProps.className} />
          <div className="flex-row-77">
            <Link to="/voucher-tool-v3-tutorial-back-button" className="align-self-flex-end">
              <img className="tutorial-buttons-119" src="/img/tutorial-buttons-53@2x.svg" />
            </Link>
            <div className="overlap-group3-29">
              <TipTypeNextButton className={tipTypeNextButtonProps.className} />
              <Link to="/voucher-tool-v3-disclaimers">
                <img className="tutorial-buttons-120" src="/img/tutorial-buttons-52@2x.svg" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolV3TutorialNextButton;
