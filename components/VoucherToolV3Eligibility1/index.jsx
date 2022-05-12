import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import HomePageLink from "../HomePageLink";
import MoreResources from "../MoreResources";
import styled from "styled-components";
import { LibrebaskervilleNormalBlack28px, Header2, Border1pxBlack, Border2pxBlack } from "../../styledMixins";
import "./VoucherToolV3Eligibility1.css";

class VoucherToolV3Eligibility1 extends React.Component {
  render() {
    const {
      voucherTool,
      inOrderToBeEligi,
      homeless,
      atRiskOfHomelessness,
      fleeingOrAttemptin,
      datingViolence,
      sexualAssault,
      stalkingOrHumanTrafficking,
      noneOfTheAboveApplyToMe,
      logoProps,
      homePageLinkProps,
      moreResourcesProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-eligibility-1 screen">
          <OverlapGroup1>
            <Logo className={logoProps.className} />
            <HomePageLink className={homePageLinkProps.className} />
            <MoreResources className={moreResourcesProps.className} />
          </OverlapGroup1>
          <FlexRow>
            <Link to="/voucher-tool-v3-disclaimers">
              <TutorialButtons src="/img/tutorial-buttons-88@2x.svg" />
            </Link>
            <FlexCol>
              <VoucherTool>{voucherTool}</VoucherTool>
              <OverlapGroup2>
                <InOrderToBeEligi>{inOrderToBeEligi}</InOrderToBeEligi>
                <FlexRow1>
                  <OverlapGroup3>
                    <Link to="/voucher-tool-v3-eligibility-questions">
                      <Rectangle116></Rectangle116>
                    </Link>
                    <IconCheckMark src="/img/vector-64@2x.svg" />
                  </OverlapGroup3>
                  <Link to="/voucher-tool-v3-eligibility-questions">
                    <Homeless>{homeless}</Homeless>
                  </Link>
                </FlexRow1>
                <FlexRow2>
                  <Rectangle122></Rectangle122>
                  <AtRiskOfHomelessness>{atRiskOfHomelessness}</AtRiskOfHomelessness>
                </FlexRow2>
                <FlexRow2>
                  <Rectangle122></Rectangle122>
                  <AtRiskOfHomelessness>{fleeingOrAttemptin}</AtRiskOfHomelessness>
                </FlexRow2>
                <FlexRow2>
                  <Rectangle122></Rectangle122>
                  <AtRiskOfHomelessness>{datingViolence}</AtRiskOfHomelessness>
                </FlexRow2>
                <FlexRow2>
                  <Rectangle122></Rectangle122>
                  <AtRiskOfHomelessness>{sexualAssault}</AtRiskOfHomelessness>
                </FlexRow2>
                <FlexRow2>
                  <Rectangle122></Rectangle122>
                  <AtRiskOfHomelessness>{stalkingOrHumanTrafficking}</AtRiskOfHomelessness>
                </FlexRow2>
                <FlexRow2>
                  <Rectangle122></Rectangle122>
                  <AtRiskOfHomelessness>{noneOfTheAboveApplyToMe}</AtRiskOfHomelessness>
                </FlexRow2>
              </OverlapGroup2>
            </FlexCol>
            <Link to="/voucher-tool-v3-disqualifications">
              <TutorialButtons1 src="/img/tutorial-buttons-86@2x.svg" />
            </Link>
          </FlexRow>
        </div>
      </div>
    );
  }
}

const OverlapGroup1 = styled.div`
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

const FlexRow = styled.div`
  height: 778px;
  margin-top: 62px;
  margin-right: 6px;
  display: flex;
  align-items: flex-end;
  min-width: 1348px;
`;

const TutorialButtons = styled.img`
  width: 99px;
  height: 77px;
  cursor: pointer;
`;

const FlexCol = styled.div`
  width: 1011px;
  align-self: flex-start;
  margin-left: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 701px;
`;

const VoucherTool = styled.div`
  ${Header2}
  width: 405px;
  min-height: 111px;
  font-weight: 500;
  color: var(--black);
`;

const OverlapGroup2 = styled.div`
  ${Border1pxBlack}
  width: 1011px;
  margin-top: 26px;
  display: flex;
  flex-direction: column;
  padding: 12px 29px;
  align-items: flex-end;
  min-height: 564px;
  background-color: var(--white);
`;

const InOrderToBeEligi = styled.div`
  ${LibrebaskervilleNormalBlack28px}
  width: 949px;
  min-height: 131px;
  margin-right: 1px;
  letter-spacing: 0;
`;

const FlexRow1 = styled.div`
  height: 40px;
  margin-top: 34px;
  display: flex;
  align-items: flex-start;
  min-width: 892px;
`;

const OverlapGroup3 = styled.div`
  width: 27px;
  height: 27px;
  position: relative;
  margin-top: 1px;
`;

const Rectangle116 = styled.div`
  ${Border2pxBlack}
  position: absolute;
  width: 27px;
  height: 27px;
  top: 0;
  left: 0;
  background-color: var(--white);
  cursor: pointer;
`;

const IconCheckMark = styled.img`
  position: absolute;
  width: 24px;
  height: 18px;
  top: 5px;
  left: 3px;
`;

const Homeless = styled.div`
  ${LibrebaskervilleNormalBlack28px}
  width: 853px;
  min-height: 40px;
  margin-left: 12px;
  letter-spacing: 0;
  cursor: pointer;
`;

const FlexRow2 = styled.div`
  height: 40px;
  margin-top: 12px;
  display: flex;
  align-items: flex-start;
  min-width: 892px;
`;

const Rectangle122 = styled.div`
  ${Border2pxBlack}
  width: 27px;
  height: 27px;
  margin-top: 1px;
  background-color: var(--white);
`;

const AtRiskOfHomelessness = styled.div`
  ${LibrebaskervilleNormalBlack28px}
  width: 853px;
  min-height: 40px;
  margin-left: 12px;
  letter-spacing: 0;
`;

const TutorialButtons1 = styled.img`
  width: 99px;
  height: 77px;
  margin-left: 67px;
  margin-bottom: 1px;
  cursor: pointer;
`;

export default VoucherToolV3Eligibility1;
