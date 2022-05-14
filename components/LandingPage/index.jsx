import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import HomePageLink from "../HomePageLink";
import MoreResources from "../MoreResources";
import styled from "styled-components";
import {
  RobotoMediumBlack50px,
  LibrebaskervilleNormalBlack20px,
  LibrebaskervilleNormalBlack23px,
  Header2,
} from "../../styledMixins";
import "./LandingPage.css";

class LandingPage extends React.Component {
  render() {
    const {
      resourcesForHomelessRelief,
      housingVoucherHelp,
      howWereSimplifyin,
      landinggraphic1,
      whatWeDid,
      withTheGoalOfInc,
      weAlsoIncludedAdd,
      asSeattlesHomeles,
      matchingdemo1,
      vouchertooldemo1,
      moreresourcesdemo1,
      whyHomelessRelief,
      projectStatus,
      ourTargetAudience,
      bySimplifyingAnOt,
      ourUsers,
      theBenefit,
      ourTeam,
      nate1,
      alex1,
      me1,
      waheeda1,
      weWillBePassingT,
      spanText1,
      spanText2,
      spanText3,
      spanText4,
      spanText5,
      spanText6,
      spanText7,
      spanText8,
      spanText9,
      exploreOurServices,
      text,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="landing-page screen">
          <OverlapGroupContainer>
            <OverlapGroup5>
              <OverlapGroup2>
                <Ellipse1></Ellipse1>
                <ResourcesForHomelessRelief>{resourcesForHomelessRelief}</ResourcesForHomelessRelief>
                <HousingVoucherHelp>{housingVoucherHelp}</HousingVoucherHelp>
                <NavBar src="/img/nav-bar@1x.svg" />
                <HowWereSimplifyin>{howWereSimplifyin}</HowWereSimplifyin>
                <Arrow2 src="/img/arrow-2@2x.svg" />
                <Rectangle67></Rectangle67>
                <Logo />
                <HomePageLink />
                <MoreResources />
              </OverlapGroup2>
              <LandingGraphic1 src={landinggraphic1} />
            </OverlapGroup5>
            <OverlapGroup6>
              <OverlapGroup3>
                <Polygon1 src="/img/polygon-1-1@1x.svg" />
                <Polygon3 src="/img/polygon-3@1x.svg" />
                <WhatWeDid>{whatWeDid}</WhatWeDid>
                <WithTheGoalOfInc>{withTheGoalOfInc}</WithTheGoalOfInc>
                <WeAlsoIncludedAdd>{weAlsoIncludedAdd}</WeAlsoIncludedAdd>
                <AsSeattlesHomeles>{asSeattlesHomeles}</AsSeattlesHomeles>
                <MatchingDemo1 src={matchingdemo1} />
                <VoucherToolDemo1 src={vouchertooldemo1} />
                <MoreResourcesDemo1 src={moreresourcesdemo1} />
              </OverlapGroup3>
              <WhyHomelessRelief>{whyHomelessRelief}</WhyHomelessRelief>
            </OverlapGroup6>
            <OverlapGroup4>
              <OverlapGroup1>
                <Polygon11 src="/img/polygon-1@1x.svg" />
                <ProjectStatus>{projectStatus}</ProjectStatus>
                <OurTargetAudience>{ourTargetAudience}</OurTargetAudience>
                <BySimplifyingAnOt>{bySimplifyingAnOt}</BySimplifyingAnOt>
                <OurUsers>{ourUsers}</OurUsers>
                <TheBenefit>{theBenefit}</TheBenefit>
                <Ellipse11></Ellipse11>
                <OurTeam>{ourTeam}</OurTeam>
                <Nate1 src={nate1} />
                <Alex1 src={alex1} />
                <Me1 src={me1} />
                <Waheeda1 src={waheeda1} />
              </OverlapGroup1>
              <WeWillBePassingT>{weWillBePassingT}</WeWillBePassingT>
              <NateNguyenProjectManager>
                <span className="librebaskerville-normal-black-23px">{spanText1}</span>
                <span className="librebaskerville-normal-black-20px">{spanText2}</span>
              </NateNguyenProjectManager>
              <WaheedaHakimDataAnalyst>
                <span className="librebaskerville-normal-black-23px">{spanText3}</span>
                <span className="librebaskerville-normal-black-20px">{spanText4}</span>
              </WaheedaHakimDataAnalyst>
              <Name>
                <span className="librebaskerville-normal-black-23px">{spanText5}</span>
                <span className="librebaskerville-normal-black-20px">{spanText6}</span>
              </Name>
              <Name1>
                <Span03>{spanText7}</Span03>
                <Span13>{spanText8}</Span13>
                <Span2>{spanText9}</Span2>
              </Name1>
              <Link to="/home-page-v3">
                <VoucherButtonV3>
                  <VoucherButtonV2>
                    <ExploreOurServices>{exploreOurServices}</ExploreOurServices>
                    <Arrow1 src="/img/arrow-1@2x.svg" />
                  </VoucherButtonV2>
                </VoucherButtonV3>
              </Link>
            </OverlapGroup4>
          </OverlapGroupContainer>
          <Text>{text}</Text>
        </div>
      </div>
    );
  }
}

const OverlapGroupContainer = styled.div`
  width: 2042px;
  margin-left: -349px;
  margin-top: -7.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 4580px;
`;

const OverlapGroup5 = styled.div`
  width: 1789px;
  height: 946px;
  position: relative;
  align-self: flex-start;
`;

const OverlapGroup2 = styled.div`
  position: absolute;
  width: 1789px;
  height: 946px;
  top: 0;
  left: 0;
`;

const Ellipse1 = styled.div`
  position: absolute;
  width: 818px;
  height: 818px;
  top: 128px;
  left: 0;
  background-color: #8fc0a924;
  border-radius: 409px;
`;

const ResourcesForHomelessRelief = styled.div`
  ${Header2}
  position: absolute;
  width: 651px;
  top: 476px;
  left: 425px;
  font-weight: 500;
  color: var(--amazon);
  line-height: 80px;
`;

const HousingVoucherHelp = styled.div`
  position: absolute;
  width: 579px;
  top: 266px;
  left: 427px;
  font-family: var(--font-family-roboto);
  font-weight: 500;
  color: var(--black);
  font-size: 80px;
  letter-spacing: 0;
  line-height: 100px;
`;

const NavBar = styled.img`
  position: absolute;
  width: 1440px;
  height: 149px;
  top: 0;
  left: 349px;
`;

const HowWereSimplifyin = styled.div`
  position: absolute;
  width: 777px;
  top: 768px;
  left: 680px;
  font-family: var(--font-family-roboto);
  font-weight: 500;
  color: var(--black);
  font-size: 40px;
  text-align: center;
  letter-spacing: 0;
  cursor: pointer;
`;

const Arrow2 = styled.img`
  position: absolute;
  width: 22px;
  height: 30px;
  top: 824px;
  left: 1292px;
`;

const Rectangle67 = styled.div`
  position: absolute;
  width: 1440px;
  height: 152px;
  top: 8px;
  left: 349px;
  background-color: var(--white);
  box-shadow: 0px 4px 4px #00000040;
`;

const LandingGraphic1 = styled.img`
  position: absolute;
  width: 527px;
  height: 506px;
  top: 192px;
  left: 1144px;
  object-fit: cover;
`;

const OverlapGroup6 = styled.div`
  width: 1650px;
  height: 1865px;
  position: relative;
  margin-top: 76px;
  margin-right: 6.73px;
`;

const OverlapGroup3 = styled.div`
  position: absolute;
  width: 1894px;
  height: 1855px;
  top: 10px;
  left: 0;
`;

const Polygon1 = styled.img`
  position: absolute;
  width: 483px;
  height: 752px;
  top: 7px;
  left: 1411px;
`;

const Polygon3 = styled.img`
  position: absolute;
  width: 501px;
  height: 750px;
  top: 547px;
  left: 0;
`;

const WhatWeDid = styled.div`
  ${RobotoMediumBlack50px}
  position: absolute;
  width: 338px;
  top: 463px;
  left: 287px;
  letter-spacing: 0;
`;

const WithTheGoalOfInc = styled.div`
  ${LibrebaskervilleNormalBlack23px}
  position: absolute;
  width: 944px;
  top: 463px;
  left: 614px;
  letter-spacing: 0;
  line-height: 35px;
`;

const WeAlsoIncludedAdd = styled.div`
  ${LibrebaskervilleNormalBlack23px}
  position: absolute;
  width: 1271px;
  top: 1273px;
  left: 287px;
  letter-spacing: 0;
  line-height: 35px;
`;

const AsSeattlesHomeles = styled.div`
  ${LibrebaskervilleNormalBlack23px}
  position: absolute;
  width: 892px;
  top: 0;
  left: 676px;
  letter-spacing: 0;
  line-height: 35px;
`;

const MatchingDemo1 = styled.img`
  position: absolute;
  width: 645px;
  height: 464px;
  top: 1350px;
  left: 278px;
  object-fit: cover;
`;

const VoucherToolDemo1 = styled.img`
  position: absolute;
  width: 738px;
  height: 533px;
  top: 730px;
  left: 791px;
  object-fit: cover;
`;

const MoreResourcesDemo1 = styled.img`
  position: absolute;
  width: 638px;
  height: 464px;
  top: 1350px;
  left: 934px;
  object-fit: cover;
`;

const WhyHomelessRelief = styled.div`
  ${RobotoMediumBlack50px}
  position: absolute;
  width: 338px;
  top: 0;
  left: 287px;
  letter-spacing: 0;
`;

const OverlapGroup4 = styled.div`
  ${LibrebaskervilleNormalBlack23px}
  width: 1600px;
  height: 1659px;
  position: relative;
  margin-top: 34px;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  width: 1826px;
  height: 1658px;
  top: 0;
  left: 0;
`;

const Polygon11 = styled.img`
  position: absolute;
  width: 526px;
  height: 752px;
  top: 907px;
  left: 0;
`;

const ProjectStatus = styled.div`
  ${RobotoMediumBlack50px}
  position: absolute;
  width: 338px;
  top: 1243px;
  left: 213px;
  letter-spacing: 0;
`;

const OurTargetAudience = styled.div`
  ${LibrebaskervilleNormalBlack23px}
  position: absolute;
  width: 998px;
  top: 91px;
  left: 486px;
  letter-spacing: 0;
  line-height: 35px;
`;

const BySimplifyingAnOt = styled.div`
  ${LibrebaskervilleNormalBlack23px}
  position: absolute;
  width: 953px;
  top: 506px;
  left: 531px;
  letter-spacing: 0;
  line-height: 35px;
`;

const OurUsers = styled.div`
  ${RobotoMediumBlack50px}
  position: absolute;
  width: 338px;
  top: 91px;
  left: 213px;
  letter-spacing: 0;
`;

const TheBenefit = styled.div`
  ${RobotoMediumBlack50px}
  position: absolute;
  width: 338px;
  top: 500px;
  left: 213px;
  letter-spacing: 0;
`;

const Ellipse11 = styled.div`
  position: absolute;
  width: 818px;
  height: 818px;
  top: 0;
  left: 1008px;
  background-color: #8fc0a926;
  border-radius: 409px;
`;

const OurTeam = styled.div`
  ${RobotoMediumBlack50px}
  position: absolute;
  width: 338px;
  top: 859px;
  left: 208px;
  letter-spacing: 0;
`;

const Nate1 = styled.img`
  position: absolute;
  width: 152px;
  height: 150px;
  top: 860px;
  left: 561px;
  object-fit: cover;
`;

const Alex1 = styled.img`
  position: absolute;
  width: 152px;
  height: 151px;
  top: 860px;
  left: 809px;
  object-fit: cover;
`;

const Me1 = styled.img`
  position: absolute;
  width: 152px;
  height: 155px;
  top: 860px;
  left: 1057px;
  object-fit: cover;
`;

const Waheeda1 = styled.img`
  position: absolute;
  width: 152px;
  height: 152px;
  top: 860px;
  left: 1298px;
  object-fit: cover;
`;

const WeWillBePassingT = styled.div`
  position: absolute;
  width: 897px;
  top: 1252px;
  left: 578px;
  letter-spacing: 0;
  line-height: 35px;
`;

const NateNguyenProjectManager = styled.div`
  position: absolute;
  width: 212px;
  top: 1031px;
  left: 531px;
  text-align: center;
  letter-spacing: 0;
  line-height: 35px;
`;

const WaheedaHakimDataAnalyst = styled.div`
  position: absolute;
  width: 212px;
  top: 1033px;
  left: 1271px;
  text-align: center;
  letter-spacing: 0;
  line-height: 35px;
`;

const Name = styled.div`
  position: absolute;
  width: 212px;
  top: 1037px;
  left: 1027px;
  text-align: center;
  letter-spacing: 0;
  line-height: 35px;
`;

const Name1 = styled.div`
  position: absolute;
  width: 221px;
  top: 1032px;
  left: 774px;
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

const VoucherButtonV3 = styled.div`
  position: absolute;
  height: 106px;
  top: 1553px;
  left: 663px;
  display: flex;
  padding: 0px 0px;
  align-items: flex-end;
  min-width: 443px;
  cursor: pointer;
`;

const VoucherButtonV2 = styled.div`
  height: 99px;
  display: flex;
  padding: 29.5px 24.4px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 409px;
  background-color: var(--midnight-blue);
  border-radius: 39.85px;
`;

const ExploreOurServices = styled.div`
  min-height: 37px;
  min-width: 296px;
  font-family: var(--font-family-roboto);
  font-weight: 500;
  color: var(--white);
  font-size: 31.9px;
  letter-spacing: 0;
`;

const Arrow1 = styled.img`
  width: 39px;
  height: 23px;
  align-self: center;
  margin-left: 22px;
  margin-bottom: 1.53px;
`;

const Text = styled.div`
  ${LibrebaskervilleNormalBlack23px}
  min-height: 29px;
  margin-left: 1587px;
  margin-top: 1370.34px;
  min-width: 1px;
  text-align: center;
  letter-spacing: 0;
`;

export default LandingPage;
