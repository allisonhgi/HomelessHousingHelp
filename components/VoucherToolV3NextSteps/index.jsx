import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import HomePageLink from "../HomePageLink";
import MoreResources from "../MoreResources";
import Property1Audio from "../Property1Audio";
import styled from "styled-components";
import { Header2, Border1pxBlack2, LibrebaskervilleNormalBlack30px } from "../../styledMixins";
import "./VoucherToolV3NextSteps.css";

class VoucherToolV3NextSteps extends React.Component {
  render() {
    const {
      voucherTool,
      spanText1,
      spanText2,
      spanText3,
      spanText4,
      spanText5,
      spanText6,
      spanText7,
      spanText8,
      givingVoucher1,
      logoProps,
      homePageLinkProps,
      moreResourcesProps,
      property1AudioProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-next-steps screen">
          <OverlapGroup2>
            <Logo className={logoProps.className} />
            <HomePageLink className={homePageLinkProps.className} />
            <MoreResources className={moreResourcesProps.className} />
          </OverlapGroup2>
          <FlexRow>
            <TutorialButtonsContainer>
              <Property1Audio className={property1AudioProps.className} />
              <Link to="/voucher-tool-v3-required-paperwork">
                <TutorialButtons src="/img/tutorial-buttons-5@2x.svg" />
              </Link>
            </TutorialButtonsContainer>
            <FlexCol>
              <VoucherTool>{voucherTool}</VoucherTool>
              <OverlapGroup3>
                <TextInfo>
                  <IfYoureConnected>
                    <span className="librebaskerville-normal-black-30px">{spanText1}</span>
                    <span className="librebaskerville-bold-black-30px">{spanText2}</span>
                    <span className="librebaskerville-normal-black-30px">{spanText3}</span>
                    <span className="librebaskerville-bold-black-30px">{spanText4}</span>
                    <span className="librebaskerville-normal-black-30px">{spanText5}</span>
                    <span className="librebaskerville-normal-black-29px">{spanText6}</span>
                    <Span6>{spanText7}</Span6>
                    <span className="librebaskerville-normal-black-29px">{spanText8}</span>
                  </IfYoureConnected>
                </TextInfo>
                <GivingVoucher1 src={givingVoucher1} />
              </OverlapGroup3>
            </FlexCol>
            <Link to="/voucher-tool-v3-rap">
              <TutorialButtons1 src="/img/tutorial-buttons-4@2x.svg" />
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
  margin-left: 2px;
  display: flex;
  padding: 38px 71px;
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 641px;
`;

const TutorialButtons = styled.img`
  width: 99px;
  height: 77px;
  margin-top: 511px;
  cursor: pointer;
`;

const FlexCol = styled.div`
  width: 1011px;
  align-self: flex-start;
  margin-left: 73px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 719px;
`;

const VoucherTool = styled.div`
  ${Header2}
  width: 405px;
  min-height: 111px;
  margin-right: 2px;
  font-weight: 500;
  color: var(--black);
`;

const OverlapGroup3 = styled.div`
  width: 1011px;
  height: 608px;
  position: relative;
`;

const TextInfo = styled.div`
  ${Border1pxBlack2}
  position: absolute;
  height: 564px;
  top: 0;
  left: 0;
  display: flex;
  padding: 0 24px;
  align-items: flex-end;
  min-width: 1011px;
  background-color: var(--white);
`;

const IfYoureConnected = styled.div`
  ${LibrebaskervilleNormalBlack30px}
  width: 960px;
  min-height: 533px;
  margin-bottom: -8px;
  letter-spacing: 0;
  line-height: 40px;
`;

const Span6 = styled.span`
  font-family: var(--font-family-libre_baskerville);
  font-weight: 700;
  color: var(--black);
  font-size: 29px;
`;

const GivingVoucher1 = styled.img`
  position: absolute;
  width: 365px;
  height: 441px;
  top: 167px;
  left: 646px;
  object-fit: cover;
`;

const TutorialButtons1 = styled.img`
  width: 99px;
  height: 77px;
  margin-left: 66px;
  margin-bottom: 1px;
  cursor: pointer;
`;

export default VoucherToolV3NextSteps;
