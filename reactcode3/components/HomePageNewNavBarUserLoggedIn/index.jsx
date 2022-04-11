import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import MenuBar from "../MenuBar";
import VoucherButtonV2 from "../VoucherButtonV2";
import IveAppliedForAVoucher from "../IveAppliedForAVoucher";
import "./HomePageNewNavBarUserLoggedIn.css";

class HomePageNewNavBarUserLoggedIn extends React.Component {
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
        <div className="home-page-new-nav-bar-user-logged-in screen">
          <div className="flex-row-37">
            <Logo className={logoProps.className} />
            <MenuBar />
          </div>
          <div className="overlap-group9">
            <div className="overlap-group-container-8">
              <div className="overlap-group7-1">
                <img className="polygon-1-2" src="/img/polygon-1@1x.svg" />
                <img className="polygon-2-3" src="/img/polygon-2@1x.svg" />
                <div className="whether-youre-a-cas-2 librebaskerville-normal-black-30px">{whetherYoureACas}</div>
                <div className="emergency-housing-vo-2 librebaskerville-normal-white-30px">
                  <span className="librebaskerville-normal-black-30px">{spanText1}</span>
                  <span className="span1-5 librebaskerville-normal-cello-30px">{spanText2}</span>
                </div>
                <div className="our-services-2 header-2">{ourServices}</div>
                <div className="we-are-currently-tar-2 librebaskerville-normal-black-30px">{weAreCurrentlyTar}</div>
                <div className="our-mission-2 header-2">{ourMission}</div>
                <div className="what-is-an-emergency-housing-voucher-2 header-2">{whatIsAnEmergencyHousingVoucher}</div>
                <div className="no-we-cant-persona-2 librebaskerville-normal-black-30px">{noWeCantPersona}</div>
              </div>
              <div className="overlap-group6-2">
                <div className="ellipse-1-2"></div>
                <div className="housing-voucher-help-1 header-1big-title">{housingVoucherHelp}</div>
                <div className="connecting-housing-r-2 librebaskerville-normal-black-38px">{connectingHousingR}</div>
                <div className="do-we-distribute-vouchers-2 header-2">{doWeDistributeVouchers}</div>
              </div>
              <div className="overlap-group8-1">
                <div className="more-information-2 roboto-medium-black-55px">{moreInformation}</div>
                <img className="arrow-2-2" src="/img/arrow-2@2x.svg" />
              </div>
            </div>
            <div className="unsure-which-to-click-1 librebaskerville-normal-black-21px">{unsureWhichToClick}</div>
            <VoucherButtonV2
              iHaveAVoucher={voucherButtonV21Props.iHaveAVoucher}
              className={voucherButtonV21Props.className}
            />
            <div className="voucher-button-v2-5">
              <div className="overlap-group3-17">
                <IveAppliedForAVoucher>{iveAppliedForAVoucherProps.children}</IveAppliedForAVoucher>
                <img className="arrow-1-6" src="/img/arrow-1@2x.svg" />
              </div>
            </div>
            <VoucherButtonV2
              iHaveAVoucher={voucherButtonV22Props.iHaveAVoucher}
              className={voucherButtonV22Props.className}
            />
            <Link to="/voucher-tools-page-1">
              <div className="tutorial-buttons-89">
                <div className="overlap-group5-6">
                  <div className="get-more-information-1 roboto-medium-white-19px">{getMoreInformation}</div>
                  <img className="arrow-1-7" src="/img/arrow-1-3@2x.svg" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePageNewNavBarUserLoggedIn;
