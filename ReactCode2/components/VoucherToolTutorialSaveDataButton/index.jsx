import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import Property1Audio from "../Property1Audio";
import Property1SaveData from "../Property1SaveData";
import "./VoucherToolTutorialSaveDataButton.css";

class VoucherToolTutorialSaveDataButton extends React.Component {
  render() {
    const {
      place,
      myAccount,
      moreResources,
      voucherTool,
      line1,
      text1,
      thisButtonWillSav,
      logoProps,
      property1AudioProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-tutorial-save-data-button screen">
          <div className="flex-col-5">
            <div className="flex-row-7">
              <Link to="/home-page">
                <div className="place-3 roboto-normal-summer-green-35px">{place}</div>
              </Link>
              <Logo className={logoProps.className} />
              <div className="flex-col-6 roboto-normal-summer-green-35px">
                <div className="my-account-23">{myAccount}</div>
                <div className="more-resources-56">{moreResources}</div>
              </div>
            </div>
            <div className="overlap-group2-18">
              <div className="voucher-tool-2 header-2">{voucherTool}</div>
              <img className="line-1-2" src={line1} />
            </div>
            <Property1Audio className={property1AudioProps.className} />
            <div className="overlap-group-64">
              <div className="rectangle-6-4 border-3px-summer-green"></div>
              <div className="text-1 roboto-medium-summer-green-25px">{text1}</div>
              <div className="this-button-will-sav librebaskerville-normal-black-38px">{thisButtonWillSav}</div>
              <img className="arrow-4" src="/img/arrow-4@2x.svg" />
              <img className="arrow-3-4" src="/img/arrow-3-2@2x.svg" />
              <div className="rectangle-8-1"></div>
            </div>
          </div>
          <div className="tutorial-buttons-container-1">
            <Link to="/voucher-tool-tutorial-back-button" className="align-self-flex-end">
              <img className="tutorial-buttons-63" src="/img/tutorial-buttons-5@2x.svg" />
            </Link>
            <Property1SaveData />
            <Link to="/voucher-tool-tutorial-next-button-1">
              <img className="tutorial-buttons-64" src="/img/tutorial-buttons-4@2x.svg" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolTutorialSaveDataButton;
