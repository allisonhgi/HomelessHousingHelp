import React from "react";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MoreResources from "../MoreResources";
import Property1Default from "../Property1Default";
import Property1Expanded2 from "../Property1Expanded2";
import "./VoucherToolsPageReceivedExpand2.css";

class VoucherToolsPageReceivedExpand2 extends React.Component {
  render() {
    const {
      resourceMatching,
      ifYoureNotSureW,
      clickOnTheSection,
      spanText1,
      spanText2,
      spanText3,
      iveAppliedForAV,
      property1Expanded2Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tools-page-received-expand screen">
          <div className="flex-row-96">
            <HomePageLink />
            <Logo />
            <MoreResources />
          </div>
          <div className="resource-matching-3 header-2">{resourceMatching}</div>
          <div className="if-youre-not-sure-w-3 librebaskerville-normal-black-25px">{ifYoureNotSureW}</div>
          <div className="click-on-the-section-3 roboto-medium-black-45px">{clickOnTheSection}</div>
          <div className="overlap-group-container-10">
            <div className="button-container-1">
              <Property1Default />
              <Property1Expanded2
                iveAppliedForAV={property1Expanded2Props.iveAppliedForAV}
                close={property1Expanded2Props.close}
                goToHousingTool={property1Expanded2Props.goToHousingTool}
                spanText1={property1Expanded2Props.spanText1}
                spanText2={property1Expanded2Props.spanText2}
                spanText3={property1Expanded2Props.spanText3}
                spanText4={property1Expanded2Props.spanText4}
              />
            </div>
            <div className="overlap-group4-25">
              <div className="ive-applied-for-a-v-7 roboto-medium-white-40px">
                <span className="roboto-medium-white-40px">{spanText1}</span>
                <span className="roboto-medium-white-40px">{spanText2}</span>
                <span className="roboto-medium-white-40px">{spanText3}</span>
              </div>
            </div>
            <div className="overlap-group3-34">
              <div className="ive-applied-for-a-v-8 roboto-medium-white-40px">{iveAppliedForAV}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolsPageReceivedExpand2;
