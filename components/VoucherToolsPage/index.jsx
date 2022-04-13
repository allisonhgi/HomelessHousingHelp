import React from "react";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MoreResources from "../MoreResources";
import Property1Default from "../Property1Default";
import Property1IneligibleButton from "../Property1IneligibleButton";
import Property1Default3 from "../Property1Default3";
import "./VoucherToolsPage.css";

class VoucherToolsPage extends React.Component {
  render() {
    const {
      resourceMatching,
      ifYoureNotSureW,
      clickOnTheSection,
      property1DefaultProps,
      property1IneligibleButtonProps,
      property1Default3Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tools-page screen">
          <div className="flex-row-14">
            <HomePageLink />
            <Logo />
            <MoreResources />
          </div>
          <div className="resource-matching-1 header-2">{resourceMatching}</div>
          <div className="if-youre-not-sure-w-1 librebaskerville-normal-black-25px">{ifYoureNotSureW}</div>
          <div className="click-on-the-section-1 roboto-medium-black-45px">{clickOnTheSection}</div>
          <div className="flex-row-15">
            <Property1Default className={property1DefaultProps.className} />
            <Property1IneligibleButton
              spanText1={property1IneligibleButtonProps.spanText1}
              spanText2={property1IneligibleButtonProps.spanText2}
              spanText3={property1IneligibleButtonProps.spanText3}
            />
            <Property1Default3>{property1Default3Props.children}</Property1Default3>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolsPage;
