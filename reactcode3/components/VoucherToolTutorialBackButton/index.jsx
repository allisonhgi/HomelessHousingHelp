import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import Property1Audio from "../Property1Audio";
import TipTypeBackButton from "../TipTypeBackButton";
import Property1SaveData from "../Property1SaveData";
import "./VoucherToolTutorialBackButton.css";

class VoucherToolTutorialBackButton extends React.Component {
  render() {
    const {
      place,
      myAccount,
      moreResources,
      voucherTool,
      line1,
      logoProps,
      tipTypeBackButtonProps,
      property1SaveDataProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-tutorial-back-button screen">
          <div className="flex-col-3">
            <div className="flex-row-4">
              <Link to="/home-page">
                <div className="place-2 roboto-normal-summer-green-35px">{place}</div>
              </Link>
              <Logo className={logoProps.className} />
              <div className="flex-col-4 roboto-normal-summer-green-35px">
                <div className="my-account-22">{myAccount}</div>
                <div className="more-resources-23">{moreResources}</div>
              </div>
            </div>
            <div className="overlap-group3-2">
              <div className="voucher-tool-1 header-2">{voucherTool}</div>
              <img className="line-1-1" src={line1} />
            </div>
            <Property1Audio />
          </div>
          <div className="flex-row-5">
            <div className="overlap-group2-16">
              <TipTypeBackButton thisButtonWillTak={tipTypeBackButtonProps.thisButtonWillTak} />
              <Link to="/voucher-tool-tutorial-audio-button">
                <img className="tutorial-buttons-41" src="/img/tutorial-buttons-3@2x.svg" />
              </Link>
            </div>
            <Property1SaveData className={property1SaveDataProps.className} />
            <Link to="/voucher-tool-tutorial-save-data-button">
              <img className="tutorial-buttons-62" src="/img/tutorial-buttons-2@2x.svg" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolTutorialBackButton;
