import React from "react";
import Logo from "../Logo";
import HomePageLink from "../HomePageLink";
import MoreResources from "../MoreResources";
import Property1Default2 from "../Property1Default2";
import HaventAppliedButtonVariant4 from "../HaventAppliedButtonVariant4";
import styled from "styled-components";
import {
  LibrebaskervilleNormalBlack25px,
  Header2,
  RobotoMediumBlack45px,
  RobotoMediumWhite40px,
} from "../../styledMixins";
import "./VoucherToolsPageVoucherExpand.css";

class VoucherToolsPageVoucherExpand extends React.Component {
  render() {
    const {
      resourceMatching,
      ifYoureNotSureW,
      clickOnTheSection,
      spanText1,
      spanText2,
      spanText3,
      iveAppliedForAV,
      haventAppliedButtonVariant4Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tools-page-voucher-expand screen">
          <OverlapGroup4>
            <Logo />
            <HomePageLink />
            <MoreResources />
          </OverlapGroup4>
          <ResourceMatching>{resourceMatching}</ResourceMatching>
          <IfYoureNotSureW>{ifYoureNotSureW}</IfYoureNotSureW>
          <ClickOnTheSection>{clickOnTheSection}</ClickOnTheSection>
          <OverlapGroupContainer>
            <HaventAppliedButtonContainer>
              <Property1Default2 />
              <HaventAppliedButtonVariant4 {...haventAppliedButtonVariant4Props} />
            </HaventAppliedButtonContainer>
            <OverlapGroup7>
              <IveAppliedForAV>
                <span className="roboto-medium-white-40px">{spanText1}</span>
                <span className="roboto-medium-white-40px">{spanText2}</span>
                <span className="roboto-medium-white-40px">{spanText3}</span>
              </IveAppliedForAV>
            </OverlapGroup7>
            <OverlapGroup6>
              <IveAppliedForAV1>{iveAppliedForAV}</IveAppliedForAV1>
            </OverlapGroup6>
          </OverlapGroupContainer>
        </div>
      </div>
    );
  }
}

const OverlapGroup4 = styled.div`
  height: 152px;
  position: relative;
  display: flex;
  padding: 38px 85px;
  justify-content: flex-end;
  align-items: center;
  min-width: 1440px;
  background-color: var(--white);
  box-shadow: 0px 4px 4px #00000040;
`;

const ResourceMatching = styled.div`
  ${Header2}
  width: 534px;
  min-height: 68px;
  margin-top: 37px;
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

const HaventAppliedButtonContainer = styled.div`
  width: 417px;
  height: 495px;
  position: relative;
`;

const OverlapGroup7 = styled.div`
  height: 495px;
  margin-left: 32px;
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

const OverlapGroup6 = styled.div`
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

export default VoucherToolsPageVoucherExpand;
