import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import HomePageLink from "../HomePageLink";
import MoreResources from "../MoreResources";
import styled from "styled-components";
import { LibrebaskervilleNormalBlack28px, Header2, Border1pxBlack, Border2pxBlack } from "../../styledMixins";
import "./VoucherToolV3EligibilityQuestions.css";

class VoucherToolV3EligibilityQuestions extends React.Component {
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
        <div className="voucher-tool-v3-eligibility-questions screen">
          <OverlapGroup2>
            <Logo />
            <HomePageLink />
            <MoreResources />
          </OverlapGroup2>
          <FlexRow>
            <TutorialButtonsContainer>
              <TutorialButtons src="/img/tutorial-buttons-63@2x.svg" />
              <Link to="/voucher-tool-v3-disclaimers">
                <TutorialButtons1 src="/img/tutorial-buttons-64@2x.svg" />
              </Link>
            </TutorialButtonsContainer>
            <FlexCol>
              <VoucherTool>{voucherTool}</VoucherTool>
              <OverlapGroup1>
                <InOrderToBeEligi>{inOrderToBeEligi}</InOrderToBeEligi>
                <FlexRow1>
                  <Link to="/voucher-tool-v3-eligibility-1">
                    <Rectangle116></Rectangle116>
                  </Link>
                  <Link to="/voucher-tool-v3-eligibility-1">
                    <Homeless>{homeless}</Homeless>
                  </Link>
                </FlexRow1>
                <FlexRow2>
                  <Link to="/voucher-tool-v3-eligibility-2">
                    <Rectangle116></Rectangle116>
                  </Link>
                  <Link to="/voucher-tool-v3-eligibility-2">
                    <Homeless>{atRiskOfHomelessness}</Homeless>
                  </Link>
                </FlexRow2>
                <FlexRow2>
                  <Link to="/voucher-tool-v3-eligibility-3">
                    <Rectangle116></Rectangle116>
                  </Link>
                  <Link to="/voucher-tool-v3-eligibility-3">
                    <Homeless>{fleeingOrAttemptin}</Homeless>
                  </Link>
                </FlexRow2>
                <FlexRow2>
                  <Link to="/voucher-tool-v3-eligibility-4">
                    <Rectangle116></Rectangle116>
                  </Link>
                  <Link to="/voucher-tool-v3-eligibility-4">
                    <Homeless>{datingViolence}</Homeless>
                  </Link>
                </FlexRow2>
                <FlexRow2>
                  <Link to="/voucher-tool-v3-eligibility-5">
                    <Rectangle116></Rectangle116>
                  </Link>
                  <Link to="/voucher-tool-v3-eligibility-5">
                    <Homeless>{sexualAssault}</Homeless>
                  </Link>
                </FlexRow2>
                <FlexRow2>
                  <Link to="/voucher-tool-v3-eligibility-6">
                    <Rectangle116></Rectangle116>
                  </Link>
                  <Link to="/voucher-tool-v3-eligibility-6">
                    <Homeless>{stalkingOrHumanTrafficking}</Homeless>
                  </Link>
                </FlexRow2>
                <FlexRow2>
                  <Link to="/voucher-tool-v3-eligibility-7">
                    <Rectangle116></Rectangle116>
                  </Link>
                  <Link to="/voucher-tool-v3-eligibility-7">
                    <Homeless>{noneOfTheAboveApplyToMe}</Homeless>
                  </Link>
                </FlexRow2>
              </OverlapGroup1>
            </FlexCol>
            <Link to="/voucher-tool-v3-disqualifications">
              <TutorialButtons2 src="/img/tutorial-buttons-62@2x.svg" />
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

const Rectangle116 = styled.div`
  ${Border2pxBlack}
  width: 27px;
  height: 27px;
  background-color: var(--white);
  cursor: pointer;
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

const TutorialButtons2 = styled.img`
  width: 99px;
  height: 77px;
  margin-left: 67px;
  margin-bottom: 1px;
  cursor: pointer;
`;

export default VoucherToolV3EligibilityQuestions;
