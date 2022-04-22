import React from "react";
import Logo from "../Logo";
import HomePageLink from "../HomePageLink";
import MoreResources from "../MoreResources";
import Property1Default2 from "../Property1Default2";
import Property1Expanded from "../Property1Expanded";
import styled from "styled-components";
import {
  LibrebaskervilleNormalBlack25px,
  Header2,
  RobotoMediumBlack45px,
  RobotoMediumWhite40px,
} from "../../styledMixins";
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
      homePageLinkProps,
      moreResourcesProps,
      property1ExpandedProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tools-page-received-expand screen">
          <OverlapGroup7>
            <Logo />
            <HomePageLink className={homePageLinkProps.className} />
            <MoreResources className={moreResourcesProps.className} />
          </OverlapGroup7>
          <ResourceMatching>{resourceMatching}</ResourceMatching>
          <IfYoureNotSureW>{ifYoureNotSureW}</IfYoureNotSureW>
          <ClickOnTheSection>{clickOnTheSection}</ClickOnTheSection>
          <OverlapGroupContainer>
            <ButtonContainer>
              <Property1Default2 />
              <Property1Expanded
                iveAppliedForAV={property1ExpandedProps.iveAppliedForAV}
                close={property1ExpandedProps.close}
                goToHousingTool={property1ExpandedProps.goToHousingTool}
                spanText1={property1ExpandedProps.spanText1}
                spanText2={property1ExpandedProps.spanText2}
                spanText3={property1ExpandedProps.spanText3}
                spanText4={property1ExpandedProps.spanText4}
              />
            </ButtonContainer>
            <OverlapGroup6>
              <IveAppliedForAV>
                <span className="roboto-medium-white-40px">{spanText1}</span>
                <span className="roboto-medium-white-40px">{spanText2}</span>
                <span className="roboto-medium-white-40px">{spanText3}</span>
              </IveAppliedForAV>
            </OverlapGroup6>
            <OverlapGroup5>
              <IveAppliedForAV1>{iveAppliedForAV}</IveAppliedForAV1>
            </OverlapGroup5>
          </OverlapGroupContainer>
        </div>
      </div>
    );
  }
}

const OverlapGroup7 = styled.div`
  height: 152px;
  position: relative;
  display: flex;
  padding: 38px 87px;
  justify-content: flex-end;
  align-items: center;
  min-width: 1440px;
  background-color: var(--white);
  box-shadow: 0px 4px 4px #00000040;
`;

const ResourceMatching = styled.div`
  ${Header2}
  width: 527px;
  min-height: 68px;
  margin-top: 39px;
  margin-left: 1px;
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

const OverlapGroupContainer = styled.div`
  margin-left: 33px;
  display: flex;
  align-items: flex-start;
  min-width: 1307px;
`;

const ButtonContainer = styled.div`
  width: 411px;
  height: 495px;
  position: relative;
`;

const OverlapGroup6 = styled.div`
  height: 495px;
  margin-left: 38px;
  display: flex;
  padding: 19px 21px;
  align-items: flex-start;
  min-width: 410px;
  background-color: var(--hippie-blue);
  border-radius: 5px;
`;

const IveAppliedForAV = styled.div`
  ${RobotoMediumWhite40px}
  width: 368px;
  min-height: 435px;
  letter-spacing: 0;
`;

const OverlapGroup5 = styled.div`
  height: 495px;
  margin-left: 38px;
  display: flex;
  padding: 21px 20px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 410px;
  background-color: var(--amazon);
  border-radius: 5px;
`;

const IveAppliedForAV1 = styled.div`
  ${RobotoMediumWhite40px}
  width: 368px;
  min-height: 75px;
  letter-spacing: 0;
`;

export default VoucherToolsPageReceivedExpand;
