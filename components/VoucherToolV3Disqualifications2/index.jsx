import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import HomePageLink from "../HomePageLink";
import MoreResources from "../MoreResources";
import styled from "styled-components";
import { LibrebaskervilleNormalBlack28px, Header2, Border25pxBlack, Border1pxBlack } from "../../styledMixins";
import "./VoucherToolV3Disqualifications2.css";

class VoucherToolV3Disqualifications2 extends React.Component {
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
      homePageLinkProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-disqualifications-2 screen">
          <OverlapGroup1>
            <Logo />
            <HomePageLink className={homePageLinkProps.className} />
            <MoreResources />
          </OverlapGroup1>
          <OverlapGroup3>
            <VoucherTool>{voucherTool}</VoucherTool>
            <Line1 src="/img/line-1@1x.svg" />
          </OverlapGroup3>
          <FlexRow>
            <FlexCol>
              <FlexRow1>
                <TutorialButtons src="/img/tutorial-buttons-72@2x.svg" />
                <OverlapGroup2>
                  <CheckWhichOneAppliesToYou>{checkWhichOneAppliesToYou}</CheckWhichOneAppliesToYou>
                  <FlexRow2>
                    <FlexCol1>
                      <Rectangle124></Rectangle124>
                      <OverlapGroup4>
                        <Link to="/voucher-tool-v3-disqualifications">
                          <Rectangle125></Rectangle125>
                        </Link>
                        <IconCheckMark src="/img/vector-64@2x.svg" />
                      </OverlapGroup4>
                      <Rectangle126></Rectangle126>
                      <Rectangle127></Rectangle127>
                      <Rectangle90></Rectangle90>
                    </FlexCol1>
                    <FlexCol2>
                      <YoureARegistered>{youreARegistered}</YoureARegistered>
                      <Link to="/voucher-tool-v3-disqualifications" className="align-self-flex-end">
                        <YouHaveBeenConvic>{youHaveBeenConvic}</YouHaveBeenConvic>
                      </Link>
                      <YouHaveAHistoryO>{youHaveAHistoryO}</YouHaveAHistoryO>
                      <NobodyInTheApplyi>
                        <span className="librebaskerville-normal-black-28px">{spanText1}</span>
                        <Span119>{spanText2}</Span119>
                      </NobodyInTheApplyi>
                      <NoneOfTheAboveApplyToMe>{noneOfTheAboveApplyToMe}</NoneOfTheAboveApplyToMe>
                    </FlexCol2>
                  </FlexRow2>
                </OverlapGroup2>
              </FlexRow1>
              <Link to="/voucher-tool-v3-eligibility-questions">
                <TutorialButtons1 src="/img/tutorial-buttons-73@2x.svg" />
              </Link>
            </FlexCol>
            <Link to="/voucher-tool-v3-required-paperwork">
              <TutorialButtons2 src="/img/tutorial-buttons-71@2x.svg" />
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
  margin-right: -1px;
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
  height: 666px;
  align-self: center;
  margin-right: 6px;
  display: flex;
  align-items: flex-end;
  min-width: 1348px;
`;

const FlexCol = styled.div`
  width: 1179px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 666px;
`;

const FlexRow1 = styled.div`
  height: 556px;
  display: flex;
  align-items: flex-start;
  min-width: 1179px;
`;

const TutorialButtons = styled.img`
  width: 64px;
  height: 61px;
  margin-top: 24px;
`;

const OverlapGroup2 = styled.div`
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

const FlexRow2 = styled.div`
  height: 446px;
  align-self: center;
  margin-top: 7px;
  margin-left: 27px;
  display: flex;
  align-items: flex-start;
  min-width: 888px;
`;

const FlexCol1 = styled.div`
  width: 31px;
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

const OverlapGroup4 = styled.div`
  width: 31px;
  height: 30px;
  position: relative;
  margin-top: 30px;
`;

const Rectangle125 = styled.div`
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
  top: 6px;
  left: 4px;
`;

const Rectangle126 = styled.div`
  ${Border25pxBlack}
  width: 31px;
  height: 30px;
  margin-top: 80px;
  background-color: var(--white);
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

const FlexCol2 = styled.div`
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
  ${LibrebaskervilleNormalBlack28px}
  width: 832px;
  min-height: 112px;
  align-self: flex-end;
  letter-spacing: 0;
  line-height: 55px;
  cursor: pointer;
`;

const YouHaveAHistoryO = styled.div`
  width: 775px;
  min-height: 110px;
  margin-left: 5px;
  letter-spacing: 0;
  line-height: 55px;
`;

const NobodyInTheApplyi = styled.div`
  width: 818px;
  min-height: 107px;
  align-self: center;
  margin-top: 10px;
  margin-right: 9px;
  letter-spacing: 0;
  line-height: 28px;
`;

const Span119 = styled.span`
  ${LibrebaskervilleNormalBlack28px}
  line-height: 55px;
`;

const NoneOfTheAboveApplyToMe = styled.div`
  min-height: 58px;
  letter-spacing: 0;
  line-height: 55px;
  white-space: nowrap;
`;

const TutorialButtons1 = styled.img`
  width: 99px;
  height: 77px;
  margin-top: 33px;
  cursor: pointer;
`;

const TutorialButtons2 = styled.img`
  width: 99px;
  height: 77px;
  margin-left: 70px;
  margin-bottom: 1px;
  cursor: pointer;
`;

export default VoucherToolV3Disqualifications2;