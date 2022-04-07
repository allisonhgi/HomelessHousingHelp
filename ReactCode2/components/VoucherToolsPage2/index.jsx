import React from "react";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MoreResources from "../MoreResources";
import Property1Default from "../Property1Default";
import Property1IneligibleButton from "../Property1IneligibleButton";
import Property1Default4 from "../Property1Default4";
import "./VoucherToolsPage2.css";

class VoucherToolsPage2 extends React.Component {
  render() {
    const {
      resourceMatching,
      ifYoureNotSureW,
      clickOnTheSection,
      homePageLinkProps,
      property1DefaultProps,
      property1IneligibleButtonProps,
      property1Default4Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tools-page screen">
          <div className="flex-row-88">
            <HomePageLink className={homePageLinkProps.className} />
            <Logo />
            <MoreResources />
          </div>
          <div className="resource-matching-2 header-2">{resourceMatching}</div>
          <div className="if-youre-not-sure-w-2 librebaskerville-normal-black-25px">{ifYoureNotSureW}</div>
          <div className="click-on-the-section-2 roboto-medium-black-45px">{clickOnTheSection}</div>
          <div className="flex-row-89">
            <Property1Default className={property1DefaultProps.className} />
            <Property1IneligibleButton
              spanText1={property1IneligibleButtonProps.spanText1}
              spanText2={property1IneligibleButtonProps.spanText2}
              spanText3={property1IneligibleButtonProps.spanText3}
            />
            <Property1Default4>{property1Default4Props.children}</Property1Default4>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolsPage2;
