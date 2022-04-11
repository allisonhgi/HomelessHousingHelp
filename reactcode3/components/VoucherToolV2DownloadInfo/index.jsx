import React from "react";
import { Link } from "react-router-dom";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MenuBar from "../MenuBar";
import Property1Audio from "../Property1Audio";
import TextInfo from "../TextInfo";
import IcoutlinePhoneIphone from "../IcoutlinePhoneIphone";
import UilimageDownload from "../UilimageDownload";
import Property1SaveData from "../Property1SaveData";
import "./VoucherToolV2DownloadInfo.css";

class VoucherToolV2DownloadInfo extends React.Component {
  render() {
    const {
      voucherTool,
      line1,
      getSummaryViaTextOrEmail,
      downloadPdfOfSummary,
      property1AudioProps,
      textInfoProps,
      property1SaveDataProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v2-download-info screen">
          <div className="flex-col-37">
            <div className="flex-row-62">
              <HomePageLink />
              <Logo />
              <MenuBar />
            </div>
            <div className="overlap-group4-18">
              <div className="voucher-tool-22 header-2">{voucherTool}</div>
              <img className="line-1-22" src={line1} />
            </div>
            <div className="flex-row-63">
              <Property1Audio className={property1AudioProps.className} />
              <div className="overlap-group3-26">
                <TextInfo>{textInfoProps.children}</TextInfo>
                <IcoutlinePhoneIphone />
                <UilimageDownload />
                <div className="rectangle-35-2"></div>
                <div className="get-summary-via-text-or-email-2 roboto-medium-white-21px">
                  {getSummaryViaTextOrEmail}
                </div>
                <div className="rectangle-36-2"></div>
                <div className="download-pdf-of-summary-2 roboto-medium-white-21px">{downloadPdfOfSummary}</div>
              </div>
            </div>
          </div>
          <div className="tutorial-buttons-container-20">
            <Link to="/voucher-tool-v2-rap" className="align-self-flex-end">
              <img className="tutorial-buttons-107" src="/img/tutorial-buttons-40@2x.svg" />
            </Link>
            <Property1SaveData className={property1SaveDataProps.className} />
            <a href="javascript:ShowOverlay('voucher-tool-pop-up', 'animate-appear');">
              <img className="tutorial-buttons-108" src="/img/tutorial-buttons-41@2x.svg" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolV2DownloadInfo;
