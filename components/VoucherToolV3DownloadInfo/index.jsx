import React from "react";
import { Link } from "react-router-dom";
import TextInfo from "../TextInfo";
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
      textInfoProps,
      property1PhonePopUpDefaultProps,
      homePageLinkProps,
      moreResourcesProps,
      logoProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-download-info-1 screen">
          <OverlapGroup2>
            <VoucherTool>{voucherTool}</VoucherTool>
            <TutorialButtons src="/img/tutorial-buttons-3@2x.svg" />
            <TutorialButtons1 src="/img/tutorial-buttons-4@2x.svg" />
            <TutorialButtons2 src="/img/tutorial-buttons-5@2x.svg" />
            <OverlapGroup>
              <TextInfo>{textInfoProps.children}</TextInfo>
              <IconMobile src="/img/ic-outline-phone-iphone@2x.svg" />
              <UilimageDownload src="/img/uil-image-download@2x.svg" />
              <Rectangle35></Rectangle35>
              <GetSummaryViaTextOrEmail>{getSummaryViaTextOrEmail}</GetSummaryViaTextOrEmail>
              <Rectangle36></Rectangle36>
              <DownloadPDFOfSummary>{downloadPdfOfSummary}</DownloadPDFOfSummary>
            </OverlapGroup>
            <Rectangle87></Rectangle87>
            <Link to="/voucher-tool-v3-download-info">
              <Rectangle60></Rectangle60>
            </Link>
            <Property1PhonePopUpDefault>{property1PhonePopUpDefaultProps.children}</Property1PhonePopUpDefault>
            <HomePageLink className={homePageLinkProps.className} />
            <MoreResources className={moreResourcesProps.className} />
            <Logo className={logoProps.className} />
          </OverlapGroup2>
        </div>
      </div>
    );
  }
}

const OverlapGroup2 = styled.div`
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
  width: 64px;
  height: 61px;
  top: 350px;
  left: 43px;
`;

const TutorialButtons1 = styled.img`
  position: absolute;
  width: 99px;
  height: 77px;
  top: 915px;
  left: 43px;
`;

const TutorialButtons2 = styled.img`
  position: absolute;
  width: 236px;
  height: 77px;
  top: 914px;
  left: 1169px;
`;

const OverlapGroup = styled.div`
  ${RobotoMediumWhite21px}
  position: absolute;
  width: 1011px;
  height: 564px;
  top: 326px;
  left: 215px;
`;

const IconMobile = styled.img`
  position: absolute;
  width: 171px;
  height: 171px;
  top: 225px;
  left: 271px;
`;

const UilimageDownload = styled.img`
  position: absolute;
  width: 196px;
  height: 196px;
  top: 200px;
  left: 535px;
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
