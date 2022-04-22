import React from "react";
import { Link } from "react-router-dom";
import Property1Audio from "../Property1Audio";
import TextInfo from "../TextInfo";
import IcoutlinePhoneIphone from "../IcoutlinePhoneIphone";
import UilimageDownload from "../UilimageDownload";
import Property1PhonePopUpDefault from "../Property1PhonePopUpDefault";
import HomePageLink from "../HomePageLink";
import MoreResources from "../MoreResources";
import Logo from "../Logo";
import styled from "styled-components";
import { Header2, RobotoMediumWhite21px } from "../../styledMixins";
import "./VoucherToolV3DownloadInfo.css";

class VoucherToolV3DownloadInfo extends React.Component {
  render() {
    const {
      voucherTool,
      getSummaryViaTextOrEmail,
      downloadPdfOfSummary,
      property1AudioProps,
      property1PhonePopUpDefaultProps,
      homePageLinkProps,
      moreResourcesProps,
      logoProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-download-info-1 screen">
          <OverlapGroup5>
            <VoucherTool>{voucherTool}</VoucherTool>
            <Property1Audio className={property1AudioProps.className} />
            <TutorialButtons src="/img/tutorial-buttons-2@2x.svg" />
            <TutorialButtons1 src="/img/tutorial-buttons-3@2x.svg" />
            <OverlapGroup1>
              <TextInfo />
              <IcoutlinePhoneIphone />
              <UilimageDownload />
              <Rectangle35></Rectangle35>
              <GetSummaryViaTextOrEmail>{getSummaryViaTextOrEmail}</GetSummaryViaTextOrEmail>
              <Rectangle36></Rectangle36>
              <DownloadPDFOfSummary>{downloadPdfOfSummary}</DownloadPDFOfSummary>
            </OverlapGroup1>
            <Rectangle87></Rectangle87>
            <Link to="/voucher-tool-v3-download-info">
              <Rectangle60></Rectangle60>
            </Link>
            <Property1PhonePopUpDefault
              wouldYouLikeToGe={property1PhonePopUpDefaultProps.wouldYouLikeToGe}
              email={property1PhonePopUpDefaultProps.email}
              text={property1PhonePopUpDefaultProps.text}
            />
            <HomePageLink className={homePageLinkProps.className} />
            <MoreResources className={moreResourcesProps.className} />
            <Logo className={logoProps.className} />
          </OverlapGroup5>
        </div>
      </div>
    );
  }
}

const OverlapGroup5 = styled.div`
  width: 1440px;
  height: 1012px;
  position: relative;
`;

const VoucherTool = styled.div`
  ${Header2}
  position: absolute;
  width: 405px;
  top: 215px;
  left: 517px;
  font-weight: 500;
  color: var(--black);
`;

const TutorialButtons = styled.img`
  position: absolute;
  width: 99px;
  height: 77px;
  top: 915px;
  left: 43px;
`;

const TutorialButtons1 = styled.img`
  position: absolute;
  width: 236px;
  height: 77px;
  top: 914px;
  left: 1169px;
`;

const OverlapGroup1 = styled.div`
  ${RobotoMediumWhite21px}
  position: absolute;
  width: 1011px;
  height: 564px;
  top: 326px;
  left: 215px;
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
  position: absolute;
  width: 152px;
  top: 421px;
  left: 280px;
  text-align: center;
  letter-spacing: 0;
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
  position: absolute;
  width: 152px;
  top: 421px;
  left: 557px;
  text-align: center;
  letter-spacing: 0;
`;

const Rectangle87 = styled.div`
  position: absolute;
  width: 1440px;
  height: 152px;
  top: 0;
  left: 0;
  background-color: var(--white);
  box-shadow: 0px 4px 4px #00000040;
`;

const Rectangle60 = styled.div`
  position: absolute;
  width: 1440px;
  height: 1012px;
  top: 0;
  left: 0;
  background-color: #0000002e;
  cursor: pointer;
`;

export default VoucherToolV3DownloadInfo;
