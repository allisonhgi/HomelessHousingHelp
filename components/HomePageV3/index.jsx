import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import MoreResources from "../MoreResources";
import VoucherButtonV3 from "../VoucherButtonV3";
import "./HomePageV3.css";

class HomePageV3 extends React.Component {
  render() {
    const {
      title,
      connectingHousingR,
      whetherYoureACas,
      spanText1,
      spanText2,
      moreInformation,
      ourServices,
      weAreCurrentlyTar,
      ourMission,
      whatIsAnEmergencyHousingVoucher,
      noWeCantPersona,
      doWeDistributeVouchers,
      unsureWhichToClick,
      getMoreInformation,
      imInterestedInOtherResources,
      logoProps,
      moreResourcesProps,
      voucherButtonV31Props,
      voucherButtonV32Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="home-page-v3 screen">
          <div className="flex-row-1">
            <Logo className={logoProps.className} />
            <MoreResources className={moreResourcesProps.className} />
          </div>
          <div className="overlap-group5-1">
            <div className="overlap-group3">
              <img className="polygon-1" src="/img/polygon-1@1x.svg" />
              <img className="polygon-2" src="/img/polygon-2@1x.svg" />
              <div className="ellipse-1"></div>
              <h1 className="title">{title}</h1>
              <div className="connecting-housing-r librebaskerville-normal-black-30px">{connectingHousingR}</div>
              <div className="whether-youre-a-cas librebaskerville-normal-black-25px">{whetherYoureACas}</div>
              <div className="emergency-housing-vo librebaskerville-normal-white-25px-2">
                <span className="librebaskerville-normal-black-25px">{spanText1}</span>
                <span className="span1-1">{spanText2}</span>
              </div>
              <div className="more-information roboto-medium-black-55px">{moreInformation}</div>
              <div className="our-services roboto-medium-black-55px">{ourServices}</div>
              <div className="we-are-currently-tar librebaskerville-normal-black-25px">{weAreCurrentlyTar}</div>
              <div className="our-mission roboto-medium-black-55px">{ourMission}</div>
              <div className="what-is-an-emergency-housing-voucher roboto-medium-black-55px">
                {whatIsAnEmergencyHousingVoucher}
              </div>
              <img className="arrow-2" src="/img/arrow-2@2x.svg" />
              <div className="no-we-cant-persona librebaskerville-normal-black-25px">{noWeCantPersona}</div>
              <div className="do-we-distribute-vouchers roboto-medium-black-55px">{doWeDistributeVouchers}</div>
            </div>
            <div className="unsure-which-to-click">{unsureWhichToClick}</div>
            <Link to="/voucher-tools-page">
              <div className="tutorial-buttons-1">
                <div className="overlap-group1-14">
                  <div className="get-more-information">{getMoreInformation}</div>
                  <img className="arrow-1-1" src="/img/arrow-1-1@2x.svg" />
                </div>
              </div>
            </Link>
            <div className="voucher-button-v-container">
              <VoucherButtonV3 voucherButtonV2Props={voucherButtonV31Props.voucherButtonV2Props} />
              <Link to="/resources-v3-1">
                <div className="voucher-button-v3">
                  <VoucherButtonV3
                    className={voucherButtonV32Props.className}
                    voucherButtonV2Props={voucherButtonV32Props.voucherButtonV2Props}
                  />
                </div>
              </Link>
            </div>
            <Link to="/resources-v3">
              <div className="voucher-button-v2">
                <div className="overlap-group2-1">
                  <div className="im-interested-in-other-resources roboto-medium-white-40px">
                    {imInterestedInOtherResources}
                  </div>
                  <img className="arrow-1-2" src="/img/arrow-1-2@2x.svg" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePageV3;
