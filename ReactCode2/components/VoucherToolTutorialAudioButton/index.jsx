import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import Property1Audio from "../Property1Audio";
import TipTypeAudioButton from "../TipTypeAudioButton";
import Property1SaveData from "../Property1SaveData";
import "./VoucherToolTutorialAudioButton.css";

class VoucherToolTutorialAudioButton extends React.Component {
  render() {
    const {
      place,
      myAccount,
      moreResources,
      voucherTool,
      line1,
      logoProps,
      property1AudioProps,
      tipTypeAudioButtonProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-tutorial-audio-button screen">
          <div className="flex-col-7">
            <div className="flex-row-8">
              <Link to="/home-page">
                <div className="place-4 roboto-normal-summer-green-35px">{place}</div>
              </Link>
              <Logo className={logoProps.className} />
              <div className="flex-col-8 roboto-normal-summer-green-35px">
                <div className="my-account-24">{myAccount}</div>
                <div className="more-resources-57">{moreResources}</div>
              </div>
            </div>
            <div className="overlap-group2-19">
              <div className="voucher-tool-3 header-2">{voucherTool}</div>
              <img className="line-1-3" src={line1} />
            </div>
            <div className="flex-row-9">
              <Property1Audio className={property1AudioProps.className} />
              <TipTypeAudioButton thisButtonWillRea={tipTypeAudioButtonProps.thisButtonWillRea} />
            </div>
          </div>
          <div className="tutorial-buttons-container-2">
            <img className="tutorial-buttons-65" src="/img/tutorial-buttons-7@2x.svg" />
            <Property1SaveData />
            <Link to="/voucher-tool-tutorial-back-button">
              <img className="tutorial-buttons-66" src="/img/tutorial-buttons-6@2x.svg" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolTutorialAudioButton;
