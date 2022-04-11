import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import MoreResources from "../MoreResources";
import VoucherButtonV2 from "../VoucherButtonV2";
import IveAppliedForAVoucher from "../IveAppliedForAVoucher";
import "./HomePageV3.css";

class HomePageV3 extends React.Component {
  render() {
    const {
      whetherYoureACas,
      spanText1,
      spanText2,
      ourServices,
      weAreCurrentlyTar,
      ourMission,
      whatIsAnEmergencyHousingVoucher,
      noWeCantPersona,
      housingVoucherHelp,
      connectingHousingR,
      doWeDistributeVouchers,
      moreInformation,
      unsureWhichToClick,
      getMoreInformation,
      logoProps,
      voucherButtonV21Props,
      iveAppliedForAVoucherProps,
      voucherButtonV22Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="home-page-v3 screen">
          <div className="flex-row-6">
            <Logo className={logoProps.className} />
            <MoreResources />
          </div>
          <div className="overlap-group8">
            <div className="overlap-group-container-3">
              <div className="overlap-group5-1">
                <img className="polygon-1-1" src="/img/polygon-1@1x.svg" />
                <img className="polygon-2-1" src="/img/polygon-2-1@1x.svg" />
                <div className="whether-youre-a-cas-1 librebaskerville-normal-black-30px">{whetherYoureACas}</div>
                <div className="emergency-housing-vo-1 librebaskerville-normal-white-30px">
                  <span className="librebaskerville-normal-black-30px">{spanText1}</span>
                  <span className="span1 librebaskerville-normal-cello-30px">{spanText2}</span>
                </div>
                <div className="our-services-1 header-2">{ourServices}</div>
                <div className="we-are-currently-tar-1 librebaskerville-normal-black-30px">{weAreCurrentlyTar}</div>
                <div className="our-mission-1 header-2">{ourMission}</div>
                <div className="what-is-an-emergency-housing-voucher-1 header-2">{whatIsAnEmergencyHousingVoucher}</div>
                <div className="no-we-cant-persona-1 librebaskerville-normal-black-30px">{noWeCantPersona}</div>
              </div>
              <div className="overlap-group7">
                <div className="ellipse-1-1"></div>
                <div className="housing-voucher-help header-1big-title">{housingVoucherHelp}</div>
                <div className="connecting-housing-r-1 librebaskerville-normal-black-38px">{connectingHousingR}</div>
                <div className="do-we-distribute-vouchers-1 header-2">{doWeDistributeVouchers}</div>
              </div>
              <div className="overlap-group6-1">
                <div className="more-information-1 roboto-medium-black-55px">{moreInformation}</div>
                <img className="arrow-2-1" src="/img/arrow-2-1@2x.svg" />
              </div>
            </div>
            <div className="unsure-which-to-click librebaskerville-normal-black-21px">{unsureWhichToClick}</div>
            <VoucherButtonV2 iHaveAVoucher={voucherButtonV21Props.iHaveAVoucher} />
            <Link to="/resources-v3-1">
              <div className="voucher-button-v2">
                <div className="overlap-group2-17">
                  <IveAppliedForAVoucher>{iveAppliedForAVoucherProps.children}</IveAppliedForAVoucher>
                  <img className="arrow-1-2" src="/img/arrow-1@2x.svg" />
                </div>
              </div>
            </Link>
            <VoucherButtonV2
              iHaveAVoucher={voucherButtonV22Props.iHaveAVoucher}
              className={voucherButtonV22Props.className}
            />
            <Link to="/voucher-tools-page">
              <div className="tutorial-buttons-63">
                <div className="overlap-group4-4">
                  <div className="get-more-information roboto-medium-white-19px">{getMoreInformation}</div>
                  <img className="arrow-1-3" src="/img/arrow-1-3@2x.svg" />
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
