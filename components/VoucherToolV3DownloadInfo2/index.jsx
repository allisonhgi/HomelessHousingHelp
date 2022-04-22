import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import HomePageLink from "../HomePageLink";
import MoreResources from "../MoreResources";
import Property1Audio from "../Property1Audio";
import TextInfo from "../TextInfo";
import IcoutlinePhoneIphone from "../IcoutlinePhoneIphone";
import UilimageDownload from "../UilimageDownload";
import styled from "styled-components";
import { Header2, RobotoMediumWhite21px } from "../../styledMixins";
import "./VoucherToolV3DownloadInfo2.css";

class VoucherToolV3DownloadInfo2 extends React.Component {
  render() {
    const { voucherTool, getSummaryViaTextOrEmail, downloadPdfOfSummary, property1AudioProps } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-download-info screen">
          <OverlapGroup3>
            <Logo />
            <HomePageLink />
            <MoreResources />
          </OverlapGroup3>
          <FlexRow>
            <TutorialButtonsContainer>
              <Property1Audio className={property1AudioProps.className} />
              <Link to="/voucher-tool-v3-rap">
                <TutorialButtons src="/img/tutorial-buttons-6@2x.svg" />
              </Link>
            </TutorialButtonsContainer>
            <FlexCol>
              <VoucherTool>{voucherTool}</VoucherTool>
              <OverlapGroup1>
                <TextInfo />
                <IcoutlinePhoneIphone />
                <UilimageDownload />
                <Rectangle35></Rectangle35>
                <Link to="/voucher-tool-v3-download-info-1">
                  <GetSummaryViaTextOrEmail>{getSummaryViaTextOrEmail}</GetSummaryViaTextOrEmail>
                </Link>
                <Rectangle36></Rectangle36>
                <DownloadPDFOfSummary>{downloadPdfOfSummary}</DownloadPDFOfSummary>
              </OverlapGroup1>
              <Link to="/home-page-v3" className="align-self-flex-end">
                <TutorialButtons1 src="/img/tutorial-buttons-7@2x.svg" />
              </Link>
            </FlexCol>
          </FlexRow>
        </div>
      </div>
    );
  }
}

const OverlapGroup3 = styled.div`
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
  margin-left: 8px;
  display: flex;
  align-items: flex-start;
  min-width: 1362px;
`;

const TutorialButtonsContainer = styled.div`
  width: 99px;
  position: relative;
  align-self: flex-end;
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
  width: 1190px;
  margin-left: 73px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 776px;
`;

const VoucherTool = styled.div`
  ${Header2}
  width: 405px;
  min-height: 111px;
  align-self: center;
  margin-right: 181px;
  font-weight: 500;
  color: var(--black);
`;

const OverlapGroup1 = styled.div`
  width: 1011px;
  height: 564px;
  position: relative;
`;

const Rectangle35 = styled.div`
  position: absolute;
  width: 183px;
  height: 67px;
  top: 412px;
  left: 265px;
  background-color: var(--midnight-blue);
  border-radius: 12px;
`;

const GetSummaryViaTextOrEmail = styled.div`
  ${RobotoMediumWhite21px}
  position: absolute;
  width: 152px;
  top: 421px;
  left: 280px;
  text-align: center;
  letter-spacing: 0;
  cursor: pointer;
`;

const Rectangle36 = styled.div`
  position: absolute;
  width: 183px;
  height: 67px;
  top: 412px;
  left: 542px;
  background-color: var(--midnight-blue);
  border-radius: 12px;
`;

const DownloadPDFOfSummary = styled.div`
  ${RobotoMediumWhite21px}
  position: absolute;
  width: 152px;
  top: 421px;
  left: 557px;
  text-align: center;
  letter-spacing: 0;
`;

const TutorialButtons1 = styled.img`
  width: 236px;
  height: 77px;
  align-self: flex-end;
  margin-top: 24px;
  cursor: pointer;
`;

export default VoucherToolV3DownloadInfo2;
