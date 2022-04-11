import React from "react";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MenuBar from "../MenuBar";
import Property1Default from "../Property1Default";
import Property1Expanded from "../Property1Expanded";
import "./VoucherToolsPageReceivedExpand.css";

class VoucherToolsPageReceivedExpand extends React.Component {
  render() {
    const {
      resourceMatching,
      ifYoureNotSureW,
      clickOnTheSection,
      spanText1,
      spanText2,
      spanText3,
      iveAppliedForAV,
      property1ExpandedProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tools-page-received-expand-1 screen">
          <div className="flex-row">
            <HomePageLink />
            <Logo />
            <MenuBar />
          </div>
          <div className="resource-matching header-2">{resourceMatching}</div>
          <div className="if-youre-not-sure-w librebaskerville-normal-black-25px">{ifYoureNotSureW}</div>
          <div className="click-on-the-section roboto-medium-black-45px">{clickOnTheSection}</div>
          <div className="overlap-group-container">
            <div className="button-container">
              <Property1Default />
              <Property1Expanded
                iveAppliedForAV={property1ExpandedProps.iveAppliedForAV}
                close={property1ExpandedProps.close}
                goToHousingTool={property1ExpandedProps.goToHousingTool}
                spanText1={property1ExpandedProps.spanText1}
                spanText2={property1ExpandedProps.spanText2}
                spanText3={property1ExpandedProps.spanText3}
                spanText4={property1ExpandedProps.spanText4}
              />
            </div>
            <div className="overlap-group4">
              <div className="ive-applied-for-a-v roboto-medium-white-40px">
                <span className="roboto-medium-white-40px">{spanText1}</span>
                <span className="roboto-medium-white-40px">{spanText2}</span>
                <span className="roboto-medium-white-40px">{spanText3}</span>
              </div>
            </div>
            <div className="overlap-group5">
              <div className="ive-applied-for-a-v-1 roboto-medium-white-40px">{iveAppliedForAV}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolsPageReceivedExpand;
