import React from "react";
import { Link } from "react-router-dom";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MoreResources from "../MoreResources";
import Property1Audio from "../Property1Audio";
import TextInfo from "../TextInfo";
import IcoutlinePhoneIphone from "../IcoutlinePhoneIphone";
import UilimageDownload from "../UilimageDownload";
import "./VoucherToolV3DownloadInfo2.css";

class VoucherToolV3DownloadInfo2 extends React.Component {
  render() {
    const { voucherTool, line1, getSummaryViaTextOrEmail, downloadPdfOfSummary } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-download-info screen">
          <div className="flex-row-10">
            <HomePageLink />
            <Logo />
            <MoreResources />
          </div>
          <div className="overlap-group3-5">
            <div className="voucher-tool-4 header-2">{voucherTool}</div>
            <img className="line-1-4" src={line1} />
          </div>
          <div className="flex-row-11">
            <Property1Audio />
            <div className="overlap-group2-7">
              <TextInfo />
              <IcoutlinePhoneIphone />
              <UilimageDownload />
              <div className="rectangle-35-1"></div>
              <Link to="/voucher-tool-v3-download-info-1">
                <div className="get-summary-via-text-or-email-1 roboto-medium-white-21px">
                  {getSummaryViaTextOrEmail}
                </div>
              </Link>
              <div className="rectangle-36-1"></div>
              <div className="download-pdf-of-summary-1 roboto-medium-white-21px">{downloadPdfOfSummary}</div>
            </div>
          </div>
          <div className="tutorial-buttons-container-3">
            <Link to="/voucher-tool-v3-rap" className="align-self-flex-end">
              <img className="tutorial-buttons-18" src="/img/tutorial-buttons-2@2x.svg" />
            </Link>
            <a href="javascript:ShowOverlay('voucher-tool-pop-up', 'animate-appear');">
              <img className="tutorial-buttons-19" src="/img/tutorial-buttons-3@2x.svg" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolV3DownloadInfo2;
