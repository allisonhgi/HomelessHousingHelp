import React from "react";
import { Link } from "react-router-dom";
import Property1Audio from "../Property1Audio";
import Logo from "../Logo";
import HomePageLink from "../HomePageLink";
import TextInfo from "../TextInfo";
import IcoutlinePhoneIphone from "../IcoutlinePhoneIphone";
import UilimageDownload from "../UilimageDownload";
import MoreResources from "../MoreResources";
import Property1PhonePopUpDefault from "../Property1PhonePopUpDefault";
import "./VoucherToolV3DownloadInfo.css";

class VoucherToolV3DownloadInfo extends React.Component {
  render() {
    const {
      voucherTool,
      line1,
      getSummaryViaTextOrEmail,
      downloadPdfOfSummary,
      property1AudioProps,
      logoProps,
      homePageLinkProps,
      moreResourcesProps,
      property1PhonePopUpDefaultProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-download-info-1 screen">
          <div className="overlap-group5-3">
            <div className="voucher-tool-2 header-2">{voucherTool}</div>
            <img className="line-1-2" src={line1} />
            <Property1Audio className={property1AudioProps.className} />
            <Logo className={logoProps.className} />
            <img className="tutorial-buttons-10" src="/img/tutorial-buttons-12@2x.svg" />
            <img className="tutorial-buttons-11" src="/img/tutorial-buttons-13@2x.svg" />
            <HomePageLink className={homePageLinkProps.className} />
            <div className="overlap-group2-4 roboto-medium-white-21px">
              <TextInfo />
              <IcoutlinePhoneIphone />
              <UilimageDownload />
              <div className="rectangle-35"></div>
              <div className="get-summary-via-text-or-email">{getSummaryViaTextOrEmail}</div>
              <div className="rectangle-36"></div>
              <div className="download-pdf-of-summary">{downloadPdfOfSummary}</div>
            </div>
            <MoreResources className={moreResourcesProps.className} />
            <Link to="/voucher-tool-v3-download-info">
              <div className="rectangle-60"></div>
            </Link>
            <Property1PhonePopUpDefault
              wouldYouLikeToGe={property1PhonePopUpDefaultProps.wouldYouLikeToGe}
              email={property1PhonePopUpDefaultProps.email}
              text={property1PhonePopUpDefaultProps.text}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolV3DownloadInfo;
