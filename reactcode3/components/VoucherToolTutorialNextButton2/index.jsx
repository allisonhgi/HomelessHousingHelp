import React from "react";
import { Link } from "react-router-dom";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MenuBar from "../MenuBar";
import Property1Audio from "../Property1Audio";
import TipTypeNextButton from "../TipTypeNextButton";
import Property1SaveData from "../Property1SaveData";
import "./VoucherToolTutorialNextButton2.css";

class VoucherToolTutorialNextButton2 extends React.Component {
  render() {
    const { voucherTool, line1, property1AudioProps, tipTypeNextButtonProps, property1SaveDataProps } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-tutorial-next-button screen">
          <div className="flex-row-83">
            <HomePageLink />
            <Logo />
            <MenuBar />
          </div>
          <div className="overlap-group3-31">
            <div className="voucher-tool-31 header-2">{voucherTool}</div>
            <img className="line-1-31" src={line1} />
          </div>
          <Property1Audio className={property1AudioProps.className} />
          <div className="flex-row-84">
            <Link to="/voucher-tool-v2-tutorial-save-data-button" className="align-self-flex-end">
              <img className="tutorial-buttons-125" src="/img/tutorial-buttons-39@2x.svg" />
            </Link>
            <div className="overlap-group5-16">
              <div className="overlap-group4-22">
                <TipTypeNextButton className={tipTypeNextButtonProps.className} />
                <Link to="/voucher-tool-v2-disclaimers">
                  <img className="tutorial-buttons-126" src="/img/tutorial-buttons-38@2x.svg" />
                </Link>
              </div>
              <Property1SaveData className={property1SaveDataProps.className} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolTutorialNextButton2;
