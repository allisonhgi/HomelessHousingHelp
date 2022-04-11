import React from "react";
import { Link } from "react-router-dom";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MoreResources from "../MoreResources";
import Property1Audio from "../Property1Audio";
import TextInfo from "../TextInfo";
import IcoutlinePhoneIphone from "../IcoutlinePhoneIphone";
import UilimageDownload from "../UilimageDownload";
import "./VoucherToolV3DownloadInfo.css";

class VoucherToolV3DownloadInfo extends React.Component {
  render() {
    const {
      voucherTool,
      line1,
      getSummaryViaTextOrEmail,
      downloadPdfOfSummary,
      property1AudioProps,
      textInfoProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-download-info-1 screen">
          <div className="flex-row-10">
            <HomePageLink />
            <Logo />
            <MoreResources />
          </div>
          <div className="overlap-group3-3">
            <div className="voucher-tool-4 header-2">{voucherTool}</div>
            <img className="line-1-4" src={line1} />
          </div>
          <div className="flex-row-11">
            <Property1Audio className={property1AudioProps.className} />
            <div className="overlap-group2-20">
              <TextInfo>{textInfoProps.children}</TextInfo>
              <IcoutlinePhoneIphone />
              <UilimageDownload />
              <div className="rectangle-35"></div>
              <Link to="/voucher-tool-v3-download-info">
                <div className="get-summary-via-text-or-email roboto-medium-white-21px">{getSummaryViaTextOrEmail}</div>
              </Link>
              <div className="rectangle-36"></div>
              <div className="download-pdf-of-summary roboto-medium-white-21px">{downloadPdfOfSummary}</div>
            </div>
          </div>
          <div className="tutorial-buttons-container-3">
            <Link to="/voucher-tool-v3-rap" className="align-self-flex-end">
              <img className="tutorial-buttons-68" src="/img/tutorial-buttons-21@2x.svg" />
            </Link>
            <a href="javascript:ShowOverlay('voucher-tool-pop-up-1', 'animate-appear');">
              <img className="tutorial-buttons-69" src="/img/tutorial-buttons-22@2x.svg" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolV3DownloadInfo;
