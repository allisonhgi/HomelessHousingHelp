import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import HomePageLink from "../HomePageLink";
import MoreResources from "../MoreResources";
import styled from "styled-components";
import { LibrebaskervilleNormalBlack28px, Header2, Border25pxBlack, Border1pxBlack } from "../../styledMixins";
import "./VoucherToolV3DisqualificationsCheck.css";

class VoucherToolV3DisqualificationsCheck extends React.Component {
  render() {
    const {
      voucherTool,
      checkWhichOneAppliesToYou,
      youreARegistered,
      youHaveBeenConvic,
      youHaveAHistoryO,
      spanText1,
      spanText2,
      noneOfTheAboveApplyToMe,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-disqualifications-checked screen">
          <OverlapGroup2>
            <Logo />
            <HomePageLink />
            <MoreResources />
          </OverlapGroup2>
          <OverlapGroup3>
            <VoucherTool>{voucherTool}</VoucherTool>
            <Line1 src="/img/line-1@1x.svg" />
          </OverlapGroup3>
          <FlexRow>
            <TutorialButtons src="/img/tutorial-buttons-66@2x.svg" />
            <OverlapGroup1>
              <CheckWhichOneAppliesToYou>{checkWhichOneAppliesToYou}</CheckWhichOneAppliesToYou>
              <FlexRow1>
                <FlexCol>
                  <Rectangle130></Rectangle130>
                  <Rectangle131></Rectangle131>
                  <Rectangle132></Rectangle132>
                  <Rectangle133></Rectangle133>
                  <OverlapGroup4>
                    <Link to="/voucher-tool-v3-disqualifications">
                      <IconCheckMark src="/img/vector-64@2x.svg" />
                    </Link>
                  </OverlapGroup4>
                </FlexCol>
                <FlexCol1>
                  <YoureARegistered>{youreARegistered}</YoureARegistered>
                  <YouHaveBeenConvic>{youHaveBeenConvic}</YouHaveBeenConvic>
                  <YouHaveAHistoryO>{youHaveAHistoryO}</YouHaveAHistoryO>
                  <NobodyInTheApplyi>
                    <span className="librebaskerville-normal-black-28px">{spanText1}</span>
                    <Span117>{spanText2}</Span117>
                  </NobodyInTheApplyi>
                  <Link to="/voucher-tool-v3-disqualifications">
                    <NoneOfTheAboveApplyToMe>{noneOfTheAboveApplyToMe}</NoneOfTheAboveApplyToMe>
                  </Link>
                </FlexCol1>
              </FlexRow1>
            </OverlapGroup1>
          </FlexRow>
          <TutorialButtonsContainer>
            <Link to="/voucher-tool-v3-disqualifications" className="align-self-flex-end">
              <TutorialButtons1 src="/img/tutorial-buttons-67@2x.svg" />
            </Link>
            <Link to="/voucher-tool-v3-required-paperwork">
              <TutorialButtons2 src="/img/tutorial-buttons-65@2x.svg" />
            </Link>
          </TutorialButtonsContainer>
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

const OverlapGroup3 = styled.div`
  width: 1440px;
  height: 111px;
  position: relative;
  align-self: flex-end;
  margin-top: 63px;
  margin-right: -5px;
`;

const VoucherTool = styled.div`
  ${Header2}
  position: absolute;
  width: 405px;
  top: 0;
  left: 512px;
  font-weight: 500;
  color: var(--black);
`;

const Line1 = styled.img`
  position: absolute;
  width: 1440px;
  height: 1px;
  top: 82px;
  left: 0;
`;

const FlexRow = styled.div`
  height: 556px;
  margin-top: 4px;
  margin-left: 43px;
  display: flex;
  align-items: flex-start;
  min-width: 1179px;
`;

const TutorialButtons = styled.img`
  width: 64px;
  height: 61px;
  margin-top: 20px;
`;

const OverlapGroup1 = styled.div`
  ${Border1pxBlack}
  width: 1005px;
  margin-left: 110px;
  display: flex;
  flex-direction: column;
  padding: 18px 0;
  align-items: flex-start;
  min-height: 556px;
  background-color: var(--white);
`;

const CheckWhichOneAppliesToYou = styled.div`
  ${LibrebaskervilleNormalBlack28px}
  width: 824px;
  min-height: 53px;
  margin-left: 45px;
  letter-spacing: 0;
`;

const FlexRow1 = styled.div`
  height: 446px;
  align-self: center;
  margin-top: 7px;
  margin-left: 27px;
  display: flex;
  align-items: flex-start;
  min-width: 888px;
`;

const FlexCol = styled.div`
  width: 31px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 432px;
`;

const Rectangle130 = styled.div`
  ${Border25pxBlack}
  width: 31px;
  height: 30px;
  background-color: var(--white);
`;

const Rectangle131 = styled.div`
  ${Border25pxBlack}
  width: 31px;
  height: 30px;
  margin-top: 30px;
  background-color: var(--white);
`;

const Rectangle132 = styled.div`
  ${Border25pxBlack}
  width: 31px;
  height: 30px;
  margin-top: 80px;
  background-color: var(--white);
`;

const Rectangle133 = styled.div`
  ${Border25pxBlack}
  width: 31px;
  height: 30px;
  margin-top: 81px;
  background-color: var(--white);
`;

const OverlapGroup4 = styled.div`
  ${Border25pxBlack}
  height: 30px;
  margin-top: 91px;
  display: flex;
  padding: 3.5px 1.5px;
  align-items: flex-start;
  min-width: 31px;
  background-color: var(--white);
`;

const IconCheckMark = styled.img`
  width: 24px;
  height: 18px;
  cursor: pointer;
`;

const FlexCol1 = styled.div`
  ${LibrebaskervilleNormalBlack28px}
  width: 837px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 446px;
`;

const YoureARegistered = styled.div`
  width: 622px;
  min-height: 49px;
  letter-spacing: 0;
`;

const YouHaveBeenConvic = styled.div`
  width: 832px;
  min-height: 112px;
  align-self: flex-end;
  letter-spacing: 0;
  line-height: 55px;
`;

const YouHaveAHistoryO = styled.div`
  width: 775px;
  min-height: 120px;
  margin-left: 5px;
  letter-spacing: 0;
  line-height: 55px;
`;

const NobodyInTheApplyi = styled.div`
  width: 818px;
  min-height: 107px;
  align-self: center;
  margin-right: 9px;
  letter-spacing: 0;
  line-height: 28px;
`;

const Span117 = styled.span`
  ${LibrebaskervilleNormalBlack28px}
  line-height: 55px;
`;

const NoneOfTheAboveApplyToMe = styled.div`
  ${LibrebaskervilleNormalBlack28px}
  min-height: 58px;
  letter-spacing: 0;
  line-height: 55px;
  white-space: nowrap;
  cursor: pointer;
`;

const TutorialButtonsContainer = styled.div`
  height: 78px;
  align-self: center;
  margin-top: 28px;
  margin-right: 6px;
  display: flex;
  align-items: flex-start;
  min-width: 1348px;
`;

const TutorialButtons1 = styled.img`
  width: 99px;
  height: 77px;
  align-self: flex-end;
  cursor: pointer;
`;

const TutorialButtons2 = styled.img`
  width: 99px;
  height: 77px;
  margin-left: 1150px;
  cursor: pointer;
`;

export default VoucherToolV3DisqualificationsCheck;
