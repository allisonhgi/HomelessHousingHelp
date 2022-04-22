import React from "react";
import Logo from "../Logo";
import HomePageLink from "../HomePageLink";
import MoreResources from "../MoreResources";
import Property1Default2 from "../Property1Default2";
import Property1IneligibleButton from "../Property1IneligibleButton";
import Property1Default7 from "../Property1Default7";
import styled from "styled-components";
import { Header2, RobotoMediumBlack45px, LibrebaskervilleNormalBlack25px } from "../../styledMixins";
import "./VoucherToolsPage.css";

class VoucherToolsPage extends React.Component {
  render() {
    const {
      resourceMatching,
      ifYoureNotSureW,
      clickOnTheSection,
      logoProps,
      homePageLinkProps,
      moreResourcesProps,
      property1Default2Props,
      property1IneligibleButtonProps,
      property1Default7Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tools-page screen">
          <OverlapGroup1>
            <Logo className={logoProps.className} />
            <HomePageLink className={homePageLinkProps.className} />
            <MoreResources className={moreResourcesProps.className} />
          </OverlapGroup1>
          <ResourceMatching>{resourceMatching}</ResourceMatching>
          <IfYoureNotSureW>{ifYoureNotSureW}</IfYoureNotSureW>
          <ClickOnTheSection>{clickOnTheSection}</ClickOnTheSection>
          <FlexRow>
            <Property1Default2 className={property1Default2Props.className} />
            <Property1IneligibleButton
              spanText1={property1IneligibleButtonProps.spanText1}
              spanText2={property1IneligibleButtonProps.spanText2}
              spanText3={property1IneligibleButtonProps.spanText3}
            />
            <Property1Default7>{property1Default7Props.children}</Property1Default7>
          </FlexRow>
        </div>
      </div>
    );
  }
}

const OverlapGroup1 = styled.div`
  height: 152px;
  position: relative;
  margin-left: 2px;
  display: flex;
  padding: 38px 82px;
  align-items: center;
  min-width: 1440px;
  background-color: var(--white);
  box-shadow: 0px 4px 4px #00000040;
`;

const ResourceMatching = styled.div`
  ${Header2}
  width: 526px;
  min-height: 68px;
  margin-top: 39px;
  margin-left: 2px;
  font-weight: 500;
  color: var(--black);
  text-align: center;
`;

const IfYoureNotSureW = styled.div`
  ${LibrebaskervilleNormalBlack25px}
  width: 1262px;
  min-height: 36px;
  margin-top: 45px;
  margin-right: 12px;
  letter-spacing: 0;
`;

const ClickOnTheSection = styled.div`
  ${RobotoMediumBlack45px}
  width: 960px;
  min-height: 75px;
  align-self: flex-start;
  margin-top: 37px;
  margin-left: 83px;
  letter-spacing: 0;
`;

const FlexRow = styled.div`
  height: 495px;
  position: relative;
  margin-left: 33px;
  display: flex;
  align-items: flex-start;
  min-width: 1307px;
`;

export default VoucherToolsPage;
