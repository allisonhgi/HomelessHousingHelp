import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import HomePageLink from "../HomePageLink";
import MoreResources from "../MoreResources";
import Property1Audio from "../Property1Audio";
import Property1Variant53 from "../Property1Variant53";
import Property1Variant3 from "../Property1Variant3";
import Property1Default4 from "../Property1Default4";
import DocumentButtonVariant7 from "../DocumentButtonVariant7";
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
      line1,
      spanText1,
      spanText2,
      spanText3,
      spanText4,
      ownerCertification,
      clickForDetails,
      property1AudioProps,
      property1Variant53Props,
      documentButtonVariant7Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-required-paperwork-dob screen">
          <OverlapGroup8>
            <Logo />
            <HomePageLink />
            <MoreResources />
          </OverlapGroup8>
          <OverlapGroup9>
            <VoucherTool>{voucherTool}</VoucherTool>
            <Line1 src={line1} />
          </OverlapGroup9>
          <FlexRow>
            <Property1Audio className={property1AudioProps.className} />
            <TextInfo>
              <OverlapGroup6>
                <NoDocumentsAreNee>
                  <span className="librebaskerville-normal-black-27px">{spanText1}</span>
                  <span className="librebaskerville-bold-black-27px">{spanText2}</span>
                  <span className="librebaskerville-normal-black-27px">{spanText3}</span>
                  <span className="librebaskerville-normal-black-30px">{spanText4}</span>
                </NoDocumentsAreNee>
                <OverlapGroup>
                  <OwnerCertification>{ownerCertification}</OwnerCertification>
                  <OverlapGroup1>
                    <ClickForDetails>{clickForDetails}</ClickForDetails>
                  </OverlapGroup1>
                </OverlapGroup>
                <Property1Variant53 proofOfIncome={property1Variant53Props.proofOfIncome} />
                <Property1Variant3 />
                <Property1Default4 />
                <DocumentButtonVariant7
                  proofOfDateOfBirth={documentButtonVariant7Props.proofOfDateOfBirth}
                  aBirthCertificate={documentButtonVariant7Props.aBirthCertificate}
                  closeDetails={documentButtonVariant7Props.closeDetails}
                  dobHelp={documentButtonVariant7Props.dobHelp}
                />
              </OverlapGroup6>
            </TextInfo>
          </FlexRow>
          <TutorialButtonsContainer>
            <Link to="/voucher-tool-v3-disqualifications" className="align-self-flex-end">
              <TutorialButtons src="/img/tutorial-buttons-13@2x.svg" />
            </Link>
            <Link to="/voucher-tool-v3-next-steps">
              <TutorialButtons1 src="/img/tutorial-buttons-12@2x.svg" />
            </Link>
          </TutorialButtonsContainer>
        </div>
      </div>
    );
  }
}

const OverlapGroup8 = styled.div`
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

const OverlapGroup9 = styled.div`
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
  position: relative;
  margin-left: 44px;
  display: flex;
  align-items: flex-start;
  min-width: 1182px;
`;

const TextInfo = styled.div`
  ${Border1pxBlack2}
  height: 564px;
  margin-left: 115px;
  display: flex;
  padding: 19px 34px;
  align-items: flex-end;
  min-width: 1011px;
  background-color: var(--white);
`;

const OverlapGroup6 = styled.div`
  width: 930px;
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

const OverlapGroup = styled.div`
  position: absolute;
  height: 86px;
  top: 416px;
  left: 14px;
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
  height: 42px;
  align-self: center;
  margin-left: 372px;
  display: flex;
  padding: 9px 15px;
  align-items: flex-start;
  min-width: 183px;
  background-color: var(--cornflower);
  border-radius: 12px;
`;

const ClickForDetails = styled.div`
  ${RobotoMediumWhite21px}
  width: 152px;
  min-height: 23px;
  letter-spacing: 0;
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

export default VoucherToolV3RequiredPaperworkDOB;
