import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import HomePageLink from "../HomePageLink";
import MoreResources from "../MoreResources";
import styled from "styled-components";
import { LibrebaskervilleNormalBlack28px, Header2, Border1pxBlack, Border2pxBlack } from "../../styledMixins";
import "./VoucherToolV3Eligibility3.css";

class VoucherToolV3Eligibility3 extends React.Component {
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
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-eligibility-3 screen">
          <OverlapGroup2>
            <Logo />
            <HomePageLink />
            <MoreResources />
          </OverlapGroup2>
          <FlexRow>
            <TutorialButtonsContainer>
              <TutorialButtons src="/img/tutorial-buttons-81@2x.svg" />
              <Link to="/voucher-tool-v3-disclaimers">
                <TutorialButtons1 src="/img/tutorial-buttons-82@2x.svg" />
              </Link>
            </TutorialButtonsContainer>
            <FlexCol>
              <VoucherTool>{voucherTool}</VoucherTool>
              <OverlapGroup1>
                <InOrderToBeEligi>{inOrderToBeEligi}</InOrderToBeEligi>
                <FlexRow1>
                  <Rectangle116></Rectangle116>
                  <Homeless>{homeless}</Homeless>
                </FlexRow1>
                <FlexRow2>
                  <Rectangle116></Rectangle116>
                  <Homeless>{atRiskOfHomelessness}</Homeless>
                </FlexRow2>
                <FlexRow2>
                  <OverlapGroup3>
                    <Link to="/voucher-tool-v3-eligibility-questions">
                      <Rectangle121></Rectangle121>
                    </Link>
                    <IconCheckMark src="/img/vector-64@2x.svg" />
                  </OverlapGroup3>
                  <Link to="/voucher-tool-v3-eligibility-questions">
                    <FleeingOrAttemptin>{fleeingOrAttemptin}</FleeingOrAttemptin>
                  </Link>
                </FlexRow2>
                <FlexRow2>
                  <Rectangle116></Rectangle116>
                  <Homeless>{datingViolence}</Homeless>
                </FlexRow2>
                <FlexRow2>
                  <Rectangle116></Rectangle116>
                  <Homeless>{sexualAssault}</Homeless>
                </FlexRow2>
                <FlexRow2>
                  <Rectangle116></Rectangle116>
                  <Homeless>{stalkingOrHumanTrafficking}</Homeless>
                </FlexRow2>
                <FlexRow2>
                  <Rectangle116></Rectangle116>
                  <Homeless>{noneOfTheAboveApplyToMe}</Homeless>
                </FlexRow2>
              </OverlapGroup1>
            </FlexCol>
            <Link to="/voucher-tool-v3-disqualifications">
              <TutorialButtons2 src="/img/tutorial-buttons-80@2x.svg" />
            </Link>
          </FlexRow>
        </div>
      </div>
    );
  }
}

const OverlapGroup2 = styled.div`
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
  height: 777px;
  margin-top: 63px;
  margin-right: 6px;
  display: flex;
  align-items: flex-end;
  min-width: 1348px;
`;

const TutorialButtonsContainer = styled.div`
  width: 99px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 642px;
`;

const TutorialButtons = styled.img`
  width: 64px;
  height: 61px;
`;

const TutorialButtons1 = styled.img`
  width: 99px;
  height: 77px;
  margin-top: 504px;
  cursor: pointer;
`;

const FlexCol = styled.div`
  width: 1011px;
  align-self: flex-start;
  margin-left: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 700px;
`;

const VoucherTool = styled.div`
  ${Header2}
  width: 405px;
  min-height: 111px;
  font-weight: 500;
  color: var(--black);
`;

const OverlapGroup1 = styled.div`
  ${LibrebaskervilleNormalBlack28px}
  ${Border1pxBlack}
            width: 1011px;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  padding: 13px 29px;
  align-items: flex-end;
  min-height: 564px;
  background-color: var(--white);
`;

const InOrderToBeEligi = styled.div`
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

const Rectangle116 = styled.div`
  ${Border2pxBlack}
  width: 27px;
  height: 27px;
  background-color: var(--white);
`;

const Homeless = styled.div`
  width: 853px;
  min-height: 40px;
  margin-left: 12px;
  letter-spacing: 0;
`;

const FlexRow2 = styled.div`
  height: 40px;
  margin-top: 12px;
  display: flex;
  align-items: flex-start;
  min-width: 892px;
`;

const OverlapGroup3 = styled.div`
  width: 27px;
  height: 27px;
  position: relative;
`;

const Rectangle121 = styled.div`
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

const FleeingOrAttemptin = styled.div`
  ${LibrebaskervilleNormalBlack28px}
  width: 853px;
  min-height: 40px;
  margin-left: 12px;
  letter-spacing: 0;
  cursor: pointer;
`;

const TutorialButtons2 = styled.img`
  width: 99px;
  height: 77px;
  margin-left: 67px;
  margin-bottom: 1px;
  cursor: pointer;
`;

export default VoucherToolV3Eligibility3;
