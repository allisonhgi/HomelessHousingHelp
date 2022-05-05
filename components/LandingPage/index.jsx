import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  RobotoMediumBlack50px,
  LibrebaskervilleNormalBlack20px,
  RobotoMediumBlack90px,
  LibrebaskervilleNormalBlack23px,
} from "../../styledMixins";
import "./LandingPage.css";

class LandingPage extends React.Component {
  render() {
    const {
      simplyifyingHousing,
      ourTeam,
      nate1,
      housingVoucherHelp,
      getHousingResources,
      ourProject,
      asSeattlesHomeles,
      spanText1,
      spanText2,
      waheeda1,
      whatWeDid,
      withTheGoalOfInc,
      spanText3,
      spanText4,
      spanText5,
      spanText6,
      spanText7,
      spanText8,
      spanText9,
      alex1,
      me1,
      vouchertooldemo1,
      weAlsoIncludedAdd,
      matchingdemo1,
      moreresourcesdemo1,
      projectStatus,
      ourTargetAudience,
      bySimplifyingAnOt,
      weWillBePassingT,
      ourUsers,
      theBenefit,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="landing-page screen">
          <OverlapGroup5>
            <OverlapGroup>
              <Ellipse1></Ellipse1>
              <SimplyifyingHousing>{simplyifyingHousing}</SimplyifyingHousing>
              <OurTeam>{ourTeam}</OurTeam>
              <Nate1 src={nate1} />
              <HousingVoucherHelp>{housingVoucherHelp}</HousingVoucherHelp>
            </OverlapGroup>
            <Link to="/home-page-v3">
              <TutorialButtons>
                <GetHousingResources>{getHousingResources}</GetHousingResources>
              </TutorialButtons>
            </Link>
            <OverlapGroup1>
              <Polygon1 src="/img/polygon-1@1x.svg" />
              <OurProject>{ourProject}</OurProject>
              <AsSeattlesHomeles>{asSeattlesHomeles}</AsSeattlesHomeles>
              <WaheedaHakimDataAnalyst>
                <span className="librebaskerville-normal-black-23px">{spanText1}</span>
                <span className="librebaskerville-normal-black-20px">{spanText2}</span>
              </WaheedaHakimDataAnalyst>
              <Waheeda1 src={waheeda1} />
            </OverlapGroup1>
            <OverlapGroup4>
              <Polygon3 src="/img/polygon-3@1x.svg" />
              <WhatWeDid>{whatWeDid}</WhatWeDid>
              <WithTheGoalOfInc>{withTheGoalOfInc}</WithTheGoalOfInc>
            </OverlapGroup4>
            <NateNguyenProjectManager>
              <span className="librebaskerville-normal-black-23px">{spanText3}</span>
              <span className="librebaskerville-normal-black-20px">{spanText4}</span>
            </NateNguyenProjectManager>
            <Name>
              <span className="librebaskerville-normal-black-23px">{spanText5}</span>
              <span className="librebaskerville-normal-black-20px">{spanText6}</span>
            </Name>
            <Name1>
              <Span03>{spanText7}</Span03>
              <Span13>{spanText8}</Span13>
              <Span2>{spanText9}</Span2>
            </Name1>
            <Alex1 src={alex1} />
            <Me1 src={me1} />
            <VoucherToolDemo1 src={vouchertooldemo1} />
          </OverlapGroup5>
          <OverlapGroup3>
            <WeAlsoIncludedAdd>{weAlsoIncludedAdd}</WeAlsoIncludedAdd>
            <MatchingDemo1 src={matchingdemo1} />
            <MoreResourcesDemo1 src={moreresourcesdemo1} />
          </OverlapGroup3>
          <OverlapGroup2>
            <ProjectStatus>{projectStatus}</ProjectStatus>
            <OurTargetAudience>{ourTargetAudience}</OurTargetAudience>
            <BySimplifyingAnOt>{bySimplifyingAnOt}</BySimplifyingAnOt>
            <WeWillBePassingT>{weWillBePassingT}</WeWillBePassingT>
            <OurUsers>{ourUsers}</OurUsers>
            <TheBenefit>{theBenefit}</TheBenefit>
            <Ellipse11></Ellipse11>
          </OverlapGroup2>
        </div>
      </div>
    );
  }
}

const OverlapGroup5 = styled.div`
  width: 2021px;
  height: 2403px;
  position: relative;
  margin-top: 19px;
  margin-right: -232.13px;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 1715px;
  height: 954px;
  top: 0;
  left: 0;
`;

const Ellipse1 = styled.div`
  position: absolute;
  width: 818px;
  height: 818px;
  top: 0;
  left: 0;
  background-color: #8fc0a924;
  border-radius: 409px;
`;

const SimplyifyingHousing = styled.div`
  position: absolute;
  width: 1157px;
  top: 385px;
  left: 491px;
  transform: rotate(-0.05deg);
  font-family: var(--font-family-libre_baskerville);
  font-weight: 400;
  color: var(--black);
  font-size: 35px;
  text-align: center;
  letter-spacing: 0;
`;

const OurTeam = styled.div`
  ${RobotoMediumBlack50px}
  position: absolute;
  width: 338px;
  top: 804px;
  left: 422px;
  letter-spacing: 0;
`;

const Nate1 = styled.img`
  position: absolute;
  width: 152px;
  height: 150px;
  top: 804px;
  left: 804px;
  object-fit: cover;
`;

const HousingVoucherHelp = styled.h1`
  ${RobotoMediumBlack90px}
  position: absolute;
  width: 1293px;
  top: 54px;
  left: 422px;
  text-align: center;
  letter-spacing: 0;
`;

const TutorialButtons = styled.div`
  position: absolute;
  height: 69px;
  top: 525px;
  left: 864px;
  display: flex;
  padding: 14.4px 37px;
  align-items: flex-end;
  min-width: 410px;
  background-color: var(--white);
  border-radius: 10.49px;
  border: 2px solid var(--amazon);
  box-shadow: 5.465005874633789px 5.465005874633789px 7.2866740226745605px #0000000d;
  cursor: pointer;
`;

const GetHousingResources = styled.div`
  width: 336px;
  min-height: 39px;
  font-family: var(--font-family-roboto);
  font-weight: 500;
  color: var(--amazon);
  font-size: 31.5px;
  letter-spacing: 0;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  width: 1599px;
  height: 829px;
  top: 802px;
  left: 422px;
`;

const Polygon1 = styled.img`
  position: absolute;
  width: 423px;
  height: 776px;
  top: 53px;
  left: 1176px;
`;

const OurProject = styled.div`
  ${RobotoMediumBlack50px}
  position: absolute;
  width: 338px;
  top: 417px;
  left: 0;
  letter-spacing: 0;
`;

const AsSeattlesHomeles = styled.div`
  ${LibrebaskervilleNormalBlack23px}
  position: absolute;
  width: 944px;
  top: 421px;
  left: 298px;
  letter-spacing: 0;
  line-height: 35px;
`;

const WaheedaHakimDataAnalyst = styled.div`
  ${LibrebaskervilleNormalBlack23px}
  position: absolute;
  width: 212px;
  top: 174px;
  left: 1077px;
  text-align: center;
  letter-spacing: 0;
  line-height: 35px;
`;

const Waheeda1 = styled.img`
  position: absolute;
  width: 152px;
  height: 152px;
  top: 0;
  left: 1104px;
  object-fit: cover;
`;

const OverlapGroup4 = styled.div`
  position: absolute;
  width: 1541px;
  height: 750px;
  top: 1513px;
  left: 152px;
`;

const Polygon3 = styled.img`
  position: absolute;
  width: 521px;
  height: 750px;
  top: 0;
  left: 0;
`;

const WhatWeDid = styled.div`
  ${RobotoMediumBlack50px}
  position: absolute;
  width: 338px;
  top: 166px;
  left: 270px;
  letter-spacing: 0;
`;

const WithTheGoalOfInc = styled.div`
  ${LibrebaskervilleNormalBlack23px}
  position: absolute;
  width: 944px;
  top: 166px;
  left: 597px;
  letter-spacing: 0;
  line-height: 35px;
`;

const NateNguyenProjectManager = styled.div`
  ${LibrebaskervilleNormalBlack23px}
  position: absolute;
  width: 212px;
  top: 976px;
  left: 774px;
  text-align: center;
  letter-spacing: 0;
  line-height: 35px;
`;

const Name = styled.div`
  ${LibrebaskervilleNormalBlack23px}
  position: absolute;
  width: 212px;
  top: 982px;
  left: 1248px;
  text-align: center;
  letter-spacing: 0;
  line-height: 35px;
`;

const Name1 = styled.div`
  ${LibrebaskervilleNormalBlack23px}
  position: absolute;
  width: 248px;
  top: 976px;
  left: 993px;
  text-align: center;
  letter-spacing: 0;
  line-height: 23px;
`;

const Span03 = styled.span`
  ${LibrebaskervilleNormalBlack23px}
  line-height: 35px;
`;

const Span13 = styled.span`
  ${LibrebaskervilleNormalBlack20px}
  line-height: 35px;
`;

const Span2 = styled.span`
  ${LibrebaskervilleNormalBlack20px}
  line-height: 30px;
`;

const Alex1 = styled.img`
  position: absolute;
  width: 152px;
  height: 151px;
  top: 803px;
  left: 1041px;
  object-fit: cover;
`;

const Me1 = styled.img`
  position: absolute;
  width: 152px;
  height: 155px;
  top: 804px;
  left: 1278px;
  object-fit: cover;
`;

const VoucherToolDemo1 = styled.img`
  position: absolute;
  width: 738px;
  height: 533px;
  top: 1870px;
  left: 926px;
  object-fit: cover;
`;

const OverlapGroup3 = styled.div`
  width: 1294px;
  height: 581px;
  position: relative;
  align-self: center;
  margin-top: 86px;
  margin-right: 18px;
`;

const WeAlsoIncludedAdd = styled.div`
  ${LibrebaskervilleNormalBlack23px}
  position: absolute;
  width: 1271px;
  top: 0;
  left: 9px;
  letter-spacing: 0;
  line-height: 35px;
`;

const MatchingDemo1 = styled.img`
  position: absolute;
  width: 645px;
  height: 464px;
  top: 117px;
  left: 0;
  object-fit: cover;
`;

const MoreResourcesDemo1 = styled.img`
  position: absolute;
  width: 638px;
  height: 464px;
  top: 117px;
  left: 656px;
  object-fit: cover;
`;

const OverlapGroup2 = styled.div`
  width: 1597px;
  height: 891px;
  position: relative;
  margin-top: 126px;
  margin-right: -221px;
`;

const ProjectStatus = styled.div`
  ${RobotoMediumBlack50px}
  position: absolute;
  width: 338px;
  top: 745px;
  left: 0;
  letter-spacing: 0;
`;

const OurTargetAudience = styled.div`
  ${LibrebaskervilleNormalBlack23px}
  position: absolute;
  width: 998px;
  top: 0;
  left: 282px;
  letter-spacing: 0;
  line-height: 35px;
`;

const BySimplifyingAnOt = styled.div`
  ${LibrebaskervilleNormalBlack23px}
  position: absolute;
  width: 953px;
  top: 415px;
  left: 327px;
  letter-spacing: 0;
  line-height: 35px;
`;

const WeWillBePassingT = styled.div`
  ${LibrebaskervilleNormalBlack23px}
  position: absolute;
  width: 897px;
  top: 754px;
  left: 365px;
  letter-spacing: 0;
  line-height: 35px;
`;

const OurUsers = styled.div`
  ${RobotoMediumBlack50px}
  position: absolute;
  width: 338px;
  top: 0;
  left: 9px;
  letter-spacing: 0;
`;

const TheBenefit = styled.div`
  ${RobotoMediumBlack50px}
  position: absolute;
  width: 338px;
  top: 409px;
  left: 9px;
  letter-spacing: 0;
`;

const Ellipse11 = styled.div`
  position: absolute;
  width: 818px;
  height: 818px;
  top: 0;
  left: 779px;
  background-color: #8fc0a947;
  border-radius: 409px;
`;

export default LandingPage;
