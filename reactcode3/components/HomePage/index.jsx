import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import VoucherButton from "../VoucherButton";
import "./HomePage.css";

class HomePage extends React.Component {
  render() {
    const {
      logIn,
      moreResources,
      voucherTools,
      title,
      connectingHousingR,
      whetherYoureACas,
      noWeCantPersona,
      emergencyHousingVo,
      ourServices,
      weAreCurrentlyTar,
      ourMission,
      doWeDistributeVouchers,
      iNeedAVoucher,
      moreInformation,
      whatIsAnEmergencyHousingVoucher,
      logoProps,
      voucherButton1Props,
      voucherButton2Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="home-page-6 screen">
          <div className="flex-row-1">
            <Link to="/log-in-page">
              <div className="log-in roboto-normal-summer-green-35px">{logIn}</div>
            </Link>
            <Logo className={logoProps.className} />
            <div className="flex-col">
              <Link to="/resources">
                <div className="more-resources-21 roboto-normal-summer-green-35px">{moreResources}</div>
              </Link>
              <div className="voucher-tools roboto-normal-summer-green-35px">{voucherTools}</div>
            </div>
          </div>
          <div className="overlap-group4-2 header-2">
            <div className="overlap-group1-43">
              <img className="polygon-1" src="/img/polygon-1@1x.svg" />
              <img className="polygon-2" src="/img/polygon-2@1x.svg" />
              <div className="ellipse-1"></div>
              <h1 className="title header-1big-title">{title}</h1>
              <div className="connecting-housing-r librebaskerville-normal-black-38px">{connectingHousingR}</div>
              <div className="whether-youre-a-cas librebaskerville-normal-black-30px">{whetherYoureACas}</div>
              <div className="no-we-cant-persona librebaskerville-normal-black-30px">{noWeCantPersona}</div>
              <div className="emergency-housing-vo librebaskerville-normal-black-30px">{emergencyHousingVo}</div>
              <div className="our-services header-2">{ourServices}</div>
              <div className="we-are-currently-tar librebaskerville-normal-black-30px">{weAreCurrentlyTar}</div>
              <div className="our-mission header-2">{ourMission}</div>
              <div className="do-we-distribute-vouchers header-2">{doWeDistributeVouchers}</div>
            </div>
            <div className="voucher-container">
              <div className="i-need-a-voucher">{iNeedAVoucher}</div>
              <VoucherButton iHaveAVoucher={voucherButton1Props.iHaveAVoucher} />
            </div>
            <VoucherButton
              iHaveAVoucher={voucherButton2Props.iHaveAVoucher}
              className={voucherButton2Props.className}
            />
            <div className="overlap-group3">
              <div className="more-information roboto-medium-black-55px">{moreInformation}</div>
              <img className="arrow-2" src="/img/arrow-2@2x.svg" />
            </div>
            <div className="what-is-an-emergency-housing-voucher">{whatIsAnEmergencyHousingVoucher}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
