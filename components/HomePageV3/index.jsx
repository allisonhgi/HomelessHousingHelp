import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import HomePageLink2 from "../HomePageLink2";
import MoreResources from "../MoreResources";
import styled from "styled-components";
import {
  RobotoMediumBlack50px,
  RobotoMediumBlack90px,
  LibrebaskervilleNormalBlack23px,
  LibrebaskervilleNormalBlack30px,
  RobotoMediumWhite40px,
  RobotoMediumWhite35px,
} from "../../styledMixins";
import "./HomePageV3.css";

class HomePageV3 extends React.Component {
  render() {
    const {
      housingVoucherHelp,
      connectingHousingR,
      emergencyHousingVo,
      moreInformation,
      ourServices,
      weAreCurrentlyTar,
      noWeCantPersona,
      unsureWhichToClick,
      getMoreInformation,
      whatIsAnEmergencyHousingVoucher,
      doWeDistributeVouchers,
      imInterestedInOtherResources,
      iNeedAVoucher,
      iHaveAVoucher,
      logoProps,
      homePageLink2Props,
      moreResourcesProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="home-page-v3 screen">
          <OverlapGroup3>
            <Logo className={logoProps.className} />
            <HomePageLink2>{homePageLink2Props.children}</HomePageLink2>
            <MoreResources className={moreResourcesProps.className} />
          </OverlapGroup3>
          <OverlapGroup6>
            <OverlapGroup4>
              <Polygon1 src="/img/polygon-1-1@1x.svg" />
              <Ellipse1></Ellipse1>
              <HousingVoucherHelp>{housingVoucherHelp}</HousingVoucherHelp>
              <ConnectingHousingR>{connectingHousingR}</ConnectingHousingR>
              <a href="https://www.hud.gov/ehv" target="_blank">
                <EmergencyHousingVo>{emergencyHousingVo}</EmergencyHousingVo>
              </a>
              <MoreInformation>{moreInformation}</MoreInformation>
              <OurServices>{ourServices}</OurServices>
              <WeAreCurrentlyTar>{weAreCurrentlyTar}</WeAreCurrentlyTar>
              <Arrow2 src="/img/arrow-2@2x.svg" />
              <NoWeCantPersona>{noWeCantPersona}</NoWeCantPersona>
            </OverlapGroup4>
            <Polygon2 src="/img/polygon-2@1x.svg" />
            <OverlapGroup5>
              <UnsureWhichToClick>{unsureWhichToClick}</UnsureWhichToClick>
              <Link to="/resource-matching">
                <TutorialButtons>
                  <OverlapGroup>
                    <GetMoreInformation>{getMoreInformation}</GetMoreInformation>
                    <Arrow1 src="/img/arrow-1@2x.svg" />
                  </OverlapGroup>
                </TutorialButtons>
              </Link>
            </OverlapGroup5>
            <WhatIsAnEmergencyHousingVoucher>{whatIsAnEmergencyHousingVoucher}</WhatIsAnEmergencyHousingVoucher>
            <DoWeDistributeVouchers>{doWeDistributeVouchers}</DoWeDistributeVouchers>
            <Link to="/resources-v3">
              <VoucherButtonV2>
                <OverlapGroup1>
                  <ImInterestedInOtherResources>{imInterestedInOtherResources}</ImInterestedInOtherResources>
                  <Arrow11 src="/img/arrow-1-1@2x.svg" />
                </OverlapGroup1>
              </VoucherButtonV2>
            </Link>
            <Link to="/voucher-tool-v3-starting-screen">
              <VoucherButtonV1>
                <Link to="/voucher-tool-v3-starting-screen">
                  <INeedAVoucher>{iNeedAVoucher}</INeedAVoucher>
                </Link>
                <Arrow12 src="/img/arrow-1-1@2x.svg" />
              </VoucherButtonV1>
            </Link>
            <Link to="/find-a-home">
              <VoucherButtonV4>
                <IHaveAVoucher>{iHaveAVoucher}</IHaveAVoucher>
                <Arrow13 src="/img/arrow-1-1@2x.svg" />
              </VoucherButtonV4>
            </Link>
          </OverlapGroup6>
        </div>
      </div>
    );
  }
}

const OverlapGroup3 = styled.div`
  height: 152px;
  position: relative;
  display: flex;
  padding: 38px 85px;
  justify-content: flex-end;
  align-items: center;
  min-width: 1440px;
  background-color: var(--white);
  box-shadow: 0px 4px 4px #00000040;
`;

const OverlapGroup6 = styled.div`
  ${RobotoMediumBlack50px}
  width: 1819px;
  height: 1978px;
  position: relative;
  margin-top: 79px;
  margin-left: -246px;
`;

const OverlapGroup4 = styled.div`
  position: absolute;
  width: 1819px;
  height: 1685px;
  top: 0;
  left: 0;
`;

const Polygon1 = styled.img`
  position: absolute;
  width: 511px;
  height: 827px;
  top: 858px;
  left: 1308px;
`;

const Ellipse1 = styled.div`
  position: absolute;
  width: 818px;
  height: 818px;
  top: 167px;
  left: 0;
  background-color: #bee9e880;
  border-radius: 409px;
`;

const HousingVoucherHelp = styled.div`
  ${RobotoMediumBlack90px}
  position: absolute;
  width: 405px;
  top: 0;
  left: 336px;
  letter-spacing: 0;
`;

const ConnectingHousingR = styled.div`
  ${LibrebaskervilleNormalBlack30px}
  position: absolute;
  width: 642px;
  top: 345px;
  left: 336px;
  letter-spacing: 0;
`;

const EmergencyHousingVo = styled.div`
  ${LibrebaskervilleNormalBlack23px}
  position: absolute;
  width: 712px;
  top: 1053px;
  left: 867px;
  letter-spacing: 0;
  cursor: pointer;
`;

const MoreInformation = styled.div`
  ${RobotoMediumBlack50px}
  position: absolute;
  width: 520px;
  top: 553px;
  left: 754px;
  letter-spacing: 0;
  cursor: pointer;
`;

const OurServices = styled.div`
  ${RobotoMediumBlack50px}
  position: absolute;
  width: 291px;
  top: 793px;
  left: 337px;
  letter-spacing: 0;
`;

const WeAreCurrentlyTar = styled.div`
  ${LibrebaskervilleNormalBlack23px}
  position: absolute;
  width: 854px;
  top: 809px;
  left: 741px;
  letter-spacing: 0;
`;

const Arrow2 = styled.img`
  position: absolute;
  width: 32px;
  height: 33px;
  top: 567px;
  left: 1170px;
`;

const NoWeCantPersona = styled.div`
  ${LibrebaskervilleNormalBlack23px}
  position: absolute;
  width: 763px;
  top: 1395px;
  left: 783px;
  letter-spacing: 0;
`;

const Polygon2 = styled.img`
  position: absolute;
  width: 733px;
  height: 311px;
  top: 1667px;
  left: 155px;
`;

const OverlapGroup5 = styled.div`
  position: absolute;
  width: 491px;
  height: 41px;
  top: 449px;
  left: 1088px;
`;

const UnsureWhichToClick = styled.div`
  position: absolute;
  width: 241px;
  top: 8px;
  left: 0;
  font-family: var(--font-family-roboto);
  font-weight: 400;
  color: var(--black);
  font-size: var(--font-size-xxxxs);
  letter-spacing: 0;
`;

const TutorialButtons = styled.div`
  position: absolute;
  height: 41px;
  top: 0;
  left: 228px;
  display: flex;
  padding: 8.8px 13.8px;
  align-items: flex-end;
  min-width: 263px;
  background-color: var(--amazon);
  border-radius: 10px;
  box-shadow: 3.501018762588501px 3.501018762588501px 4.668025016784668px #00000026;
  cursor: pointer;
`;

const OverlapGroup = styled.div`
  width: 235px;
  height: 22px;
  position: relative;
`;

const GetMoreInformation = styled.div`
  position: absolute;
  width: 235px;
  top: 0;
  left: 0;
  font-family: var(--font-family-roboto);
  font-weight: 500;
  color: #fffffff2;
  font-size: 20px;
  letter-spacing: 0;
`;

const Arrow1 = styled.img`
  position: absolute;
  width: 25px;
  height: 13px;
  top: 4px;
  left: 206px;
`;

const WhatIsAnEmergencyHousingVoucher = styled.div`
  position: absolute;
  width: 509px;
  top: 1040px;
  left: 336px;
  letter-spacing: 0;
`;

const DoWeDistributeVouchers = styled.div`
  position: absolute;
  width: 374px;
  top: 1382px;
  left: 337px;
  letter-spacing: 0;
`;

const VoucherButtonV2 = styled.div`
  position: absolute;
  height: 118px;
  top: 315px;
  left: 1088px;
  display: flex;
  padding: 15.3px 22px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 513px;
  background-color: #5fa8d3;
  border-radius: 5px;
  cursor: pointer;
`;

const OverlapGroup1 = styled.div`
  width: 468px;
  height: 86px;
  position: relative;
`;

const ImInterestedInOtherResources = styled.div`
  ${RobotoMediumWhite35px}
  position: absolute;
  width: 468px;
  top: 0;
  left: 0;
  letter-spacing: 0;
`;

const Arrow11 = styled.img`
  position: absolute;
  width: 49px;
  height: 29px;
  top: 57px;
  left: 414px;
`;

const VoucherButtonV1 = styled.div`
  position: absolute;
  width: 513px;
  top: 15px;
  left: 1088px;
  display: flex;
  flex-direction: column;
  padding: 15.3px 22px;
  align-items: flex-end;
  min-height: 118px;
  background-color: var(--summer-green);
  border-radius: 5px;
  cursor: pointer;
`;

const INeedAVoucher = styled.div`
  ${RobotoMediumWhite40px}
  width: 468px;
  min-height: 47px;
  margin-top: 1px;
  letter-spacing: 0;
  cursor: pointer;
`;

const Arrow12 = styled.img`
  width: 49px;
  height: 29px;
  margin-top: 10px;
  margin-right: 5px;
`;

const VoucherButtonV4 = styled.div`
  position: absolute;
  width: 513px;
  top: 165px;
  left: 1088px;
  display: flex;
  flex-direction: column;
  padding: 15.3px 22px;
  align-items: flex-end;
  min-height: 118px;
  background-color: var(--midnight-blue);
  border-radius: 5px;
  cursor: pointer;
`;

const IHaveAVoucher = styled.div`
  ${RobotoMediumWhite40px}
  width: 468px;
  min-height: 47px;
  margin-top: 10px;
  letter-spacing: 0;
`;

const Arrow13 = styled.img`
  width: 49px;
  height: 29px;
  margin-top: 1px;
  margin-right: 5px;
`;

export default HomePageV3;
