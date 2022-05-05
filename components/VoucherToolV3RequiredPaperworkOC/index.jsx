import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import HomePageLink from "../HomePageLink";
import MoreResources from "../MoreResources";
import Property1Variant53 from "../Property1Variant53";
import Property1Variant3 from "../Property1Variant3";
import Property1Default4 from "../Property1Default4";
import styled from "styled-components";
import {
  LibrebaskervilleNormalWhite20px,
  Header2,
  Border1pxBlack2,
  LibrebaskervilleNormalBlack27px,
} from "../../styledMixins";
import "./VoucherToolV3RequiredPaperworkOC.css";

class VoucherToolV3RequiredPaperworkOC extends React.Component {
  render() {
    const {
      voucherTool,
      spanText1,
      spanText2,
      spanText3,
      spanText4,
      forExistingPhaPro,
      hudHelp,
      property1Variant53Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-required-paperwork-oc screen">
          <FlexCol>
            <OverlapGroup5>
              <Logo />
              <HomePageLink />
              <MoreResources />
            </OverlapGroup5>
            <OverlapGroup7>
              <VoucherTool>{voucherTool}</VoucherTool>
              <Line1 src="/img/line-1@1x.svg" />
            </OverlapGroup7>
            <FlexRow>
              <TutorialButtons src="/img/tutorial-buttons-57@2x.svg" />
              <TextInfo>
                <OverlapGroup3>
                  <NoDocumentsAreNee>
                    <span className="librebaskerville-normal-black-27px">{spanText1}</span>
                    <span className="librebaskerville-bold-black-27px">{spanText2}</span>
                    <span className="librebaskerville-normal-black-27px">{spanText3}</span>
                    <span className="librebaskerville-normal-black-30px">{spanText4}</span>
                  </NoDocumentsAreNee>
                  <Property1Variant53 proofOfIncome={property1Variant53Props.proofOfIncome} />
                  <Property1Variant3 />
                  <Property1Default4 />
                  <Link to="/voucher-tool-v3-required-paperwork">
                    <OwnerCert src="/img/owner-cert@1x.svg" />
                  </Link>
                  <ForExistingPHAPro>{forExistingPhaPro}</ForExistingPHAPro>
                  <Vector src="/img/vector-11@2x.svg" />
                </OverlapGroup3>
              </TextInfo>
            </FlexRow>
          </FlexCol>
          <FlexRow1>
            <Link to="/voucher-tool-v3-disqualifications">
              <TutorialButtons1 src="/img/tutorial-buttons-58@2x.svg" />
            </Link>
            <OverlapGroup6>
              <a href="https://www.rhha.org/hud-form-5382" target="_blank">
                <Rectangle45></Rectangle45>
              </a>
              <HUDHelp>{hudHelp}</HUDHelp>
              <a
                href="https://www.seattlehousing.org/housing/housing-choice-vouchers/eligibility/income-level-housing-choice-voucher-program"
                target="_blank"
              >
                <Arrow2 src="/img/arrow-1-4@2x.svg" />
              </a>
            </OverlapGroup6>
            <Link to="/voucher-tool-v3-next-steps">
              <TutorialButtons2 src="/img/tutorial-buttons-56@2x.svg" />
            </Link>
          </FlexRow1>
        </div>
      </div>
    );
  }
}

const FlexCol = styled.div`
  width: 1445px;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 890px;
`;

const OverlapGroup5 = styled.div`
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

const OverlapGroup7 = styled.div`
  width: 1440px;
  height: 111px;
  position: relative;
  align-self: flex-end;
  margin-top: 63px;
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
  margin-left: 43px;
  display: flex;
  align-items: flex-start;
  min-width: 1183px;
`;

const TutorialButtons = styled.img`
  width: 64px;
  height: 61px;
  margin-top: 24px;
`;

const TextInfo = styled.div`
  ${Border1pxBlack2}
  height: 564px;
  margin-left: 108px;
  display: flex;
  padding: 0 34px;
  align-items: flex-end;
  min-width: 1011px;
  background-color: var(--white);
`;

const OverlapGroup3 = styled.div`
  width: 934px;
  height: 664px;
  position: relative;
  margin-bottom: -131px;
`;

const NoDocumentsAreNee = styled.div`
  ${LibrebaskervilleNormalBlack27px}
  position: absolute;
  width: 911px;
  top: 0;
  left: 0;
  letter-spacing: 0;
`;

const OwnerCert = styled.img`
  position: absolute;
  width: 924px;
  height: 250px;
  top: 414px;
  left: 10px;
  cursor: pointer;
`;

const ForExistingPHAPro = styled.div`
  ${LibrebaskervilleNormalWhite20px}
  position: absolute;
  width: 786px;
  top: 476px;
  left: 34px;
  letter-spacing: 0;
`;

const Vector = styled.img`
  position: absolute;
  width: 16px;
  height: 2px;
  top: 451px;
  left: 742px;
`;

const FlexRow1 = styled.div`
  height: 85px;
  margin-top: 24px;
  margin-right: 6px;
  display: flex;
  align-items: flex-start;
  min-width: 1348px;
`;

const TutorialButtons1 = styled.img`
  width: 99px;
  height: 77px;
  margin-top: 1px;
  cursor: pointer;
`;

const OverlapGroup6 = styled.div`
  width: 174px;
  height: 33px;
  position: relative;
  align-self: flex-end;
  margin-left: 840px;
  border-radius: 10px;
`;

const Rectangle45 = styled.div`
  position: absolute;
  width: 174px;
  height: 33px;
  top: 0;
  left: 0;
  background-color: var(--blue-zodiac);
  border-radius: 10px;
  cursor: pointer;
`;

const HUDHelp = styled.div`
  ${LibrebaskervilleNormalWhite20px}
  position: absolute;
  width: 114px;
  top: 3px;
  left: 10px;
  letter-spacing: 0;
`;

const Arrow2 = styled.img`
  position: absolute;
  width: 22px;
  height: 11px;
  top: 11px;
  left: 141px;
  cursor: pointer;
`;

const TutorialButtons2 = styled.img`
  width: 99px;
  height: 77px;
  margin-left: 136px;
  cursor: pointer;
`;

export default VoucherToolV3RequiredPaperworkOC;
