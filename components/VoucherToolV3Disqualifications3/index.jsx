import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import HomePageLink from "../HomePageLink";
import MoreResources from "../MoreResources";
import styled from "styled-components";
import { LibrebaskervilleNormalBlack28px, Header2, Border25pxBlack, Border1pxBlack } from "../../styledMixins";
import "./VoucherToolV3Disqualifications3.css";

class VoucherToolV3Disqualifications3 extends React.Component {
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
      logoProps,
      homePageLinkProps,
      moreResourcesProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-disqualifications-3 screen">
          <OverlapGroup3>
            <Logo className={logoProps.className} />
            <HomePageLink className={homePageLinkProps.className} />
            <MoreResources className={moreResourcesProps.className} />
          </OverlapGroup3>
          <OverlapGroup2>
            <VoucherTool>{voucherTool}</VoucherTool>
            <Line1 src="/img/line-1@1x.svg" />
          </OverlapGroup2>
          <OverlapGroup1>
            <CheckWhichOneAppliesToYou>{checkWhichOneAppliesToYou}</CheckWhichOneAppliesToYou>
            <FlexRow>
              <FlexCol>
                <Rectangle124></Rectangle124>
                <Rectangle125></Rectangle125>
                <OverlapGroup4>
                  <Link to="/voucher-tool-v3-disqualifications">
                    <Rectangle126></Rectangle126>
                  </Link>
                  <IconCheckMark src="/img/vector-64@2x.svg" />
                </OverlapGroup4>
                <Rectangle127></Rectangle127>
                <Rectangle90></Rectangle90>
              </FlexCol>
              <FlexCol1>
                <YoureARegistered>{youreARegistered}</YoureARegistered>
                <YouHaveBeenConvic>{youHaveBeenConvic}</YouHaveBeenConvic>
                <Link to="/voucher-tool-v3-disqualifications">
                  <YouHaveAHistoryO>{youHaveAHistoryO}</YouHaveAHistoryO>
                </Link>
                <NobodyInTheApplyi>
                  <span className="librebaskerville-normal-black-28px">{spanText1}</span>
                  <Span121>{spanText2}</Span121>
                </NobodyInTheApplyi>
                <NoneOfTheAboveApplyToMe>{noneOfTheAboveApplyToMe}</NoneOfTheAboveApplyToMe>
              </FlexCol1>
            </FlexRow>
          </OverlapGroup1>
          <TutorialButtonsContainer>
            <Link to="/voucher-tool-v3-eligibility-questions" className="align-self-flex-end">
              <TutorialButtons src="/img/tutorial-buttons-76@2x.svg" />
            </Link>
            <Link to="/voucher-tool-v3-disqualifications-notice-page-1">
              <TutorialButtons1 src="/img/tutorial-buttons-74@2x.svg" />
            </Link>
          </TutorialButtonsContainer>
        </div>
      </div>
    );
  }
}

const OverlapGroup3 = styled.div`
  height: 152px;
  position: relative;
  margin-left: 2px;
  display: flex;
  padding: 38px 85px;
  justify-content: flex-end;
  align-items: center;
  min-width: 1440px;
  background-color: var(--white);
  box-shadow: 0px 4px 4px #00000040;
`;

const OverlapGroup2 = styled.div`
  width: 1440px;
  height: 111px;
  position: relative;
  align-self: flex-end;
  margin-top: 62px;
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

const OverlapGroup1 = styled.div`
  ${Border1pxBlack}
  width: 1005px;
  margin-top: 1px;
  margin-right: 1px;
  display: flex;
  flex-direction: column;
  padding: 17px 0;
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

const FlexRow = styled.div`
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
  margin-top: 1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 432px;
`;

const Rectangle124 = styled.div`
  ${Border25pxBlack}
  width: 31px;
  height: 30px;
  background-color: var(--white);
`;

const Rectangle125 = styled.div`
  ${Border25pxBlack}
  width: 31px;
  height: 30px;
  margin-top: 30px;
  background-color: var(--white);
`;

const OverlapGroup4 = styled.div`
  width: 31px;
  height: 30px;
  position: relative;
  margin-top: 80px;
`;

const Rectangle126 = styled.div`
  ${Border25pxBlack}
  position: absolute;
  width: 31px;
  height: 30px;
  top: 0;
  left: 0;
  background-color: var(--white);
  cursor: pointer;
`;

const IconCheckMark = styled.img`
  position: absolute;
  width: 24px;
  height: 18px;
  top: 7px;
  left: 7px;
`;

const Rectangle127 = styled.div`
  ${Border25pxBlack}
  width: 31px;
  height: 30px;
  margin-top: 81px;
  background-color: var(--white);
`;

const Rectangle90 = styled.div`
  ${Border25pxBlack}
  width: 31px;
  height: 30px;
  margin-top: 91px;
  background-color: var(--white);
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
  ${LibrebaskervilleNormalBlack28px}
  width: 775px;
  min-height: 107px;
  margin-left: 5px;
  letter-spacing: 0;
  line-height: 55px;
  cursor: pointer;
`;

const NobodyInTheApplyi = styled.div`
  width: 818px;
  min-height: 107px;
  align-self: center;
  margin-top: 13px;
  margin-right: 9px;
  letter-spacing: 0;
  line-height: 28px;
`;

const Span121 = styled.span`
  ${LibrebaskervilleNormalBlack28px}
  line-height: 55px;
`;

const NoneOfTheAboveApplyToMe = styled.div`
  min-height: 58px;
  letter-spacing: 0;
  line-height: 55px;
  white-space: nowrap;
`;

const TutorialButtonsContainer = styled.div`
  height: 78px;
  margin-top: 32px;
  margin-right: 6px;
  display: flex;
  align-items: flex-start;
  min-width: 1348px;
`;

const TutorialButtons = styled.img`
  width: 99px;
  height: 77px;
  align-self: flex-end;
  cursor: pointer;
`;

const TutorialButtons1 = styled.img`
  width: 99px;
  height: 77px;
  margin-left: 1150px;
  cursor: pointer;
`;

export default VoucherToolV3Disqualifications3;
