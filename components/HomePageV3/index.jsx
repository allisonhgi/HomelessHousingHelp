import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import HomePageLink2 from "../HomePageLink2";
import MoreResources from "../MoreResources";
import styled from "styled-components";
import {
  RobotoMediumBlack50px,
  LibrebaskervilleNormalBlack23px,
  RobotoMediumBlack90px,
  LibrebaskervilleNormalBlack30px,
  RobotoMediumWhite40px,
} from "../../styledMixins";
import "./HomePageV3.css";

class HomePageV3 extends React.Component {
  render() {
    const {
      housingVoucherHelp,
      connectingHousingR,
      whetherYoureACas,
      emergencyHousingVo,
      httpsWwwHudGovEhv,
      moreInformation,
      ourServices,
      noWeCantPersona,
      weAreCurrentlyTar,
      ourMission,
      unsureWhichToClick,
      whatIsAnEmergencyHousingVoucher,
      getMoreInformation,
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
          <OverlapGroup4>
            <Logo className={logoProps.className} />
            <HomePageLink2>{homePageLink2Props.children}</HomePageLink2>
            <MoreResources className={moreResourcesProps.className} />
          </OverlapGroup4>
          <OverlapGroup6>
            <OverlapGroup5>
              <Polygon1 src="/img/polygon-1-1@1x.svg" />
              <Ellipse1></Ellipse1>
              <HousingVoucherHelp>{housingVoucherHelp}</HousingVoucherHelp>
              <ConnectingHousingR>{connectingHousingR}</ConnectingHousingR>
              <WhetherYoureACas>{whetherYoureACas}</WhetherYoureACas>
              <EmergencyHousingVo>{emergencyHousingVo}</EmergencyHousingVo>
              <a href="https://www.hud.gov/ehv" target="_blank">
                <Httpswwwhudgovehv>{httpsWwwHudGovEhv}</Httpswwwhudgovehv>
              </a>
              <MoreInformation>{moreInformation}</MoreInformation>
              <OurServices>{ourServices}</OurServices>
              <Arrow2 src="/img/arrow-2@2x.svg" />
              <NoWeCantPersona>{noWeCantPersona}</NoWeCantPersona>
            </OverlapGroup5>
            <OverlapGroup3>
              <Polygon2 src="/img/polygon-2@1x.svg" />
              <WeAreCurrentlyTar>{weAreCurrentlyTar}</WeAreCurrentlyTar>
              <OurMission>{ourMission}</OurMission>
            </OverlapGroup3>
            <UnsureWhichToClick>{unsureWhichToClick}</UnsureWhichToClick>
            <WhatIsAnEmergencyHousingVoucher>{whatIsAnEmergencyHousingVoucher}</WhatIsAnEmergencyHousingVoucher>
            <Link to="/voucher-tools-page">
              <TutorialButtons>
                <OverlapGroup>
                  <GetMoreInformation>{getMoreInformation}</GetMoreInformation>
                  <Arrow1 src="/img/arrow-1-1@2x.svg" />
                </OverlapGroup>
              </TutorialButtons>
            </Link>
            <DoWeDistributeVouchers>{doWeDistributeVouchers}</DoWeDistributeVouchers>
            <Link to="/resources-v3-1">
              <VoucherButtonV2>
                <OverlapGroup1>
                  <ImInterestedInOtherResources>{imInterestedInOtherResources}</ImInterestedInOtherResources>
                  <Arrow11 src="/img/arrow-1-2@2x.svg" />
                </OverlapGroup1>
              </VoucherButtonV2>
            </Link>
            <Link to="/voucher-tool-v3-starting-screen">
              <VoucherButtonV1>
                <Link to="/voucher-tool-v3-starting-screen">
                  <INeedAVoucher>{iNeedAVoucher}</INeedAVoucher>
                </Link>
                <Arrow12 src="/img/arrow-1-3@2x.svg" />
              </VoucherButtonV1>
            </Link>
            <Link to="/resources-v3">
              <VoucherButtonV4>
                <IHaveAVoucher>{iHaveAVoucher}</IHaveAVoucher>
                <Arrow13 src="/img/arrow-1-2@2x.svg" />
              </VoucherButtonV4>
            </Link>
          </OverlapGroup6>
        </div>
      </div>
    );
  }
}

const OverlapGroup4 = styled.div`
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
  width: 1819px;
  height: 2088px;
  position: relative;
  margin-top: 79px;
  margin-left: -246px;
`;

const OverlapGroup5 = styled.div`
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
  background-color: var(--jagged-ice);
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

const WhetherYoureACas = styled.div`
  ${LibrebaskervilleNormalBlack23px}
  position: absolute;
  width: 853px;
  top: 797px;
  left: 693px;
  letter-spacing: 0;
`;

const EmergencyHousingVo = styled.div`
  ${LibrebaskervilleNormalBlack23px}
  position: absolute;
  width: 712px;
  top: 1053px;
  left: 867px;
  letter-spacing: 0;
`;

const Httpswwwhudgovehv = styled.div`
  position: absolute;
  width: 301px;
  top: 1198px;
  left: 1263px;
  font-family: var(--font-family-libre_baskerville);
  font-weight: 400;
  color: #16375e;
  font-size: var(--font-size-s);
  letter-spacing: 0;
  text-decoration: underline;
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

const OverlapGroup3 = styled.div`
  position: absolute;
  width: 1392px;
  height: 532px;
  top: 1556px;
  left: 155px;
`;

const Polygon2 = styled.img`
  position: absolute;
  width: 733px;
  height: 532px;
  top: 0;
  left: 0;
`;

const WeAreCurrentlyTar = styled.div`
  ${LibrebaskervilleNormalBlack23px}
  position: absolute;
  width: 854px;
  top: 135px;
  left: 538px;
  letter-spacing: 0;
`;

const OurMission = styled.div`
  ${RobotoMediumBlack50px}
  position: absolute;
  width: 282px;
  top: 131px;
  left: 182px;
  letter-spacing: 0;
`;

const UnsureWhichToClick = styled.div`
  position: absolute;
  width: 241px;
  top: 455px;
  left: 1088px;
  font-family: var(--font-family-libre_baskerville);
  font-weight: 400;
  color: var(--black);
  font-size: 21px;
  letter-spacing: 0;
`;

const WhatIsAnEmergencyHousingVoucher = styled.div`
  ${RobotoMediumBlack50px}
  position: absolute;
  width: 509px;
  top: 1040px;
  left: 336px;
  letter-spacing: 0;
`;

const TutorialButtons = styled.div`
  position: absolute;
  height: 35px;
  top: 450px;
  left: 1350px;
  display: flex;
  padding: 8px;
  align-items: flex-start;
  min-width: 225px;
  background-color: var(--amazon);
  border-radius: 5px;
  box-shadow: 3px 3px 4px #00000026;
  cursor: pointer;
`;

const OverlapGroup = styled.div`
  width: 208px;
  height: 19px;
  position: relative;
`;

const GetMoreInformation = styled.div`
  position: absolute;
  width: 201px;
  top: 0;
  left: 0;
  font-family: var(--font-family-roboto);
  font-weight: 500;
  color: #fffffff2;
  font-size: 19px;
  letter-spacing: 0;
`;

const Arrow1 = styled.img`
  position: absolute;
  width: 22px;
  height: 11px;
  top: 5px;
  left: 186px;
`;

const DoWeDistributeVouchers = styled.div`
  ${RobotoMediumBlack50px}
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
  position: absolute;
  width: 468px;
  top: 0;
  left: 0;
  font-family: var(--font-family-roboto);
  font-weight: 500;
  color: var(--white);
  font-size: 37px;
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
