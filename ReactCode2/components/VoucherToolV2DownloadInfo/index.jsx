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
            <div className="overlap-group4-16">
              <div className="voucher-tool-21 header-2">{voucherTool}</div>
              <img className="line-1-21" src={line1} />
            </div>
            <div className="flex-row-63">
              <Property1Audio className={property1AudioProps.className} />
              <div className="overlap-group3-24">
                <TextInfo className={textInfoProps.className}>{textInfoProps.children}</TextInfo>
                <IcoutlinePhoneIphone />
                <UilimageDownload />
                <div className="rectangle-35-1"></div>
                <div className="get-summary-via-text-or-email-1 roboto-medium-white-21px">
                  {getSummaryViaTextOrEmail}
                </div>
                <div className="rectangle-36-1"></div>
                <div className="download-pdf-of-summary-1 roboto-medium-white-21px">{downloadPdfOfSummary}</div>
              </div>
            </div>
          </div>
          <div className="tutorial-buttons-container-20">
            <Link to="/voucher-tool-v2-rap" className="align-self-flex-end">
              <img className="tutorial-buttons-104" src="/img/tutorial-buttons-40@2x.svg" />
            </Link>
            <Property1SaveData className={property1SaveDataProps.className} />
            <a href="javascript:ShowOverlay('voucher-tool-pop-up', 'animate-appear');">
              <img className="tutorial-buttons-105" src="/img/tutorial-buttons-41@2x.svg" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolV2DownloadInfo;
