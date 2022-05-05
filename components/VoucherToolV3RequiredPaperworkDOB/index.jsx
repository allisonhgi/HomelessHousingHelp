import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import HomePageLink from "../HomePageLink";
import MoreResources from "../MoreResources";
import Property1Default4 from "../Property1Default4";
import DocumentButtonVariant72 from "../DocumentButtonVariant72";
import styled from "styled-components";
import {
  RobotoMediumWhite21px,
  Header2,
  Border1pxBlack2,
  LibrebaskervilleNormalBlack27px,
  RobotoMediumWhite30px,
} from "../../styledMixins";
import "./VoucherToolV3RequiredPaperworkDOB.css";

class VoucherToolV3RequiredPaperworkDOB extends React.Component {
  render() {
    const {
      voucherTool,
      spanText1,
      spanText2,
      spanText3,
      spanText4,
      ownerCertification,
      clickForDetails,
      documentButtonVariant72Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-required-paperwork-dob screen">
          <OverlapGroup6>
            <Logo />
            <HomePageLink />
            <MoreResources />
          </OverlapGroup6>
          <OverlapGroup7>
            <VoucherTool>{voucherTool}</VoucherTool>
            <Line1 src="/img/line-1@1x.svg" />
          </OverlapGroup7>
          <FlexRow>
            <TutorialButtons src="/img/tutorial-buttons-42@2x.svg" />
            <TextInfo>
              <OverlapGroup4>
                <NoDocumentsAreNee>
                  <span className="librebaskerville-normal-black-27px">{spanText1}</span>
                  <span className="librebaskerville-bold-black-27px">{spanText2}</span>
                  <span className="librebaskerville-normal-black-27px">{spanText3}</span>
                  <span className="librebaskerville-normal-black-30px">{spanText4}</span>
                </NoDocumentsAreNee>
                <Link to="/voucher-tool-v3-required-paperwork-oc">
                  <OwnerCert>
                    <OverlapGroup>
                      <OwnerCertification>{ownerCertification}</OwnerCertification>
                      <OverlapGroup1>
                        <Link to="/voucher-tool-v3-required-paperwork-oc">
                          <Rectangle49></Rectangle49>
                        </Link>
                        <Link to="/voucher-tool-v3-required-paperwork-oc">
                          <ClickForDetails>{clickForDetails}</ClickForDetails>
                        </Link>
                      </OverlapGroup1>
                    </OverlapGroup>
                  </OwnerCert>
                </Link>
                <Property1Default4 />
                <DocumentButtonVariant72
                  proofOfDateOfBirth={documentButtonVariant72Props.proofOfDateOfBirth}
                  aBirthCertificate={documentButtonVariant72Props.aBirthCertificate}
                  closeDetails={documentButtonVariant72Props.closeDetails}
                  dobHelp={documentButtonVariant72Props.dobHelp}
                />
              </OverlapGroup4>
            </TextInfo>
          </FlexRow>
          <TutorialButtonsContainer>
            <Link to="/voucher-tool-v3-disqualifications" className="align-self-flex-end">
              <TutorialButtons1 src="/img/tutorial-buttons-43@2x.svg" />
            </Link>
            <Link to="/voucher-tool-v3-next-steps">
              <TutorialButtons2 src="/img/tutorial-buttons-41@2x.svg" />
            </Link>
          </TutorialButtonsContainer>
        </div>
      </div>
    );
  }
}

const OverlapGroup6 = styled.div`
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
  padding: 19px 34px;
  align-items: flex-end;
  min-width: 1011px;
  background-color: var(--white);
`;

const OverlapGroup4 = styled.div`
  width: 934px;
  height: 514px;
  position: relative;
`;

const NoDocumentsAreNee = styled.div`
  ${LibrebaskervilleNormalBlack27px}
  position: absolute;
  width: 911px;
  top: 0;
  left: 0;
  letter-spacing: 0;
`;

const OwnerCert = styled.div`
  position: absolute;
  height: 86px;
  top: 416px;
  left: 14px;
  display: flex;
  align-items: flex-start;
  min-width: 920px;
  cursor: pointer;
`;

const OverlapGroup = styled.div`
  height: 86px;
  display: flex;
  padding: 17px 19px;
  align-items: flex-start;
  min-width: 916px;
  background-color: var(--midnight-blue);
`;

const OwnerCertification = styled.div`
  ${RobotoMediumWhite30px}
  width: 323px;
  min-height: 51px;
  letter-spacing: 0;
  line-height: 45px;
  white-space: nowrap;
`;

const OverlapGroup1 = styled.div`
  width: 183px;
  height: 42px;
  position: relative;
  align-self: center;
  margin-left: 372px;
  border-radius: 12px;
`;

const Rectangle49 = styled.div`
  position: absolute;
  width: 183px;
  height: 42px;
  top: 0;
  left: 0;
  background-color: var(--cornflower);
  border-radius: 12px;
  cursor: pointer;
`;

const ClickForDetails = styled.div`
  ${RobotoMediumWhite21px}
  position: absolute;
  width: 152px;
  top: 9px;
  left: 15px;
  letter-spacing: 0;
  cursor: pointer;
`;

const TutorialButtonsContainer = styled.div`
  height: 78px;
  align-self: center;
  margin-top: 24px;
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

export default VoucherToolV3RequiredPaperworkDOB;
