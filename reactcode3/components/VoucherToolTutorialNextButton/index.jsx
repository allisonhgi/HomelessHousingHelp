import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import Property1Audio from "../Property1Audio";
import TipTypeNextButton from "../TipTypeNextButton";
import Property1SaveData from "../Property1SaveData";
import "./VoucherToolTutorialNextButton.css";

class VoucherToolTutorialNextButton extends React.Component {
  render() {
    const { place, myAccount, moreResources, voucherTool, line1, logoProps } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-tutorial-next-button-1 screen">
          <div className="flex-col-1">
            <div className="flex-row-2">
              <Link to="/home-page">
                <div className="place roboto-normal-summer-green-35px">{place}</div>
              </Link>
              <Logo className={logoProps.className} />
              <div className="flex-col-2 roboto-normal-summer-green-35px">
                <div className="my-account-21">{myAccount}</div>
                <div className="more-resources-22">{moreResources}</div>
              </div>
            </div>
            <div className="overlap-group2-14">
              <div className="voucher-tool header-2">{voucherTool}</div>
              <img className="line-1" src={line1} />
            </div>
            <Property1Audio />
            <TipTypeNextButton />
          </div>
          <div className="tutorial-buttons-container">
            <Link to="/voucher-tool-tutorial-save-data-button" className="align-self-flex-end">
              <img className="tutorial-buttons-1" src="/img/tutorial-buttons-1@2x.svg" />
            </Link>
            <Property1SaveData />
            <Link to="/voucher-tool-eligibility-questions">
              <img className="tutorial-buttons-2" src="/img/tutorial-buttons@2x.svg" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolTutorialNextButton;
