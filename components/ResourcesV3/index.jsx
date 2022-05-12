import React from "react";
import Logo from "../Logo";
import HomePageLink from "../HomePageLink";
import MoreResources from "../MoreResources";
import ResourceAddedOrNotNotAdded2 from "../ResourceAddedOrNotNotAdded2";
import ResourceAddedOrNotResourceAddedOrNo2 from "../ResourceAddedOrNotResourceAddedOrNo2";
import ResourceAddedOrNotResourceAddedOrNo3 from "../ResourceAddedOrNotResourceAddedOrNo3";
import styled from "styled-components";
import {
  RobotoMediumBlack45px,
  RobotoMediumMidnightBlue21px,
  RobotoMediumWhite35px,
  LibrebaskervilleNormalWhite22px,
  LibrebaskervilleNormalWhite25px,
  LibrebaskervilleNormalBlack25px,
  Header2,
  RobotoMediumWhite40px,
} from "../../styledMixins";
import "./ResourcesV3.css";

class ResourcesV3 extends React.Component {
  render() {
    const {
      moreResources,
      spanText1,
      spanText2,
      otherVoucherPrograms,
      housingChoiceVouchers1,
      theHousingChoiceV,
      foodAndShelterResources,
      universityDistrictFoodBank,
      ourMissionIsToBu,
      linkToResource1,
      temporaryHousingResources,
      housingChoiceVouchers2,
      lihiProvidesAVari,
      linkToResource2,
      confidentialEmergen,
      weOfferSafeConfi,
      linkToResource3,
      catholicHousingSer,
      transitionalHousing,
      linkToResource4,
      breadOfLife,
      whenSomeoneComesT,
      linkToResource5,
      name1,
      name2,
      linkToResource6,
      ottosPlace,
      ottosPlaceIsAnE,
      linkToResource7,
      logoProps,
      homePageLinkProps,
      moreResourcesProps,
      resourceAddedOrNotNotAdded2Props,
      resourceAddedOrNotResourceAddedOrNo2Props,
      resourceAddedOrNotResourceAddedOrNo31Props,
      resourceAddedOrNotResourceAddedOrNo32Props,
      resourceAddedOrNotResourceAddedOrNo33Props,
      resourceAddedOrNotResourceAddedOrNo34Props,
      resourceAddedOrNotResourceAddedOrNo35Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="resources-v3 screen">
          <OverlapGroup15>
            <Logo className={logoProps.className} />
            <HomePageLink className={homePageLinkProps.className} />
            <MoreResources className={moreResourcesProps.className} />
          </OverlapGroup15>
          <MoreResources1>{moreResources}</MoreResources1>
          <IfYouHaveAlready>
            <span className="librebaskerville-normal-black-25px">{spanText1}</span>
            <span className="librebaskerville-bold-black-25px">{spanText2}</span>
          </IfYouHaveAlready>
          <OtherVoucherPrograms>{otherVoucherPrograms}</OtherVoucherPrograms>
          <OverlapGroup17>
            <HousingChoiceVouchers>{housingChoiceVouchers1}</HousingChoiceVouchers>
            <TheHousingChoiceV>{theHousingChoiceV}</TheHousingChoiceV>
            <ResourceAddedOrNotNotAdded2
              housingChoiceVouchers={resourceAddedOrNotNotAdded2Props.housingChoiceVouchers}
              spanText1={resourceAddedOrNotNotAdded2Props.spanText1}
              spanText2={resourceAddedOrNotNotAdded2Props.spanText2}
              linkToResource={resourceAddedOrNotNotAdded2Props.linkToResource}
            />
          </OverlapGroup17>
          <FoodAndShelterResources>{foodAndShelterResources}</FoodAndShelterResources>
          <ResourceAddedOrNotResourceAddedOrNo2
            universityDistrictFoodBank={resourceAddedOrNotResourceAddedOrNo2Props.universityDistrictFoodBank}
            spanText1={resourceAddedOrNotResourceAddedOrNo2Props.spanText1}
            spanText2={resourceAddedOrNotResourceAddedOrNo2Props.spanText2}
            linkToResource={resourceAddedOrNotResourceAddedOrNo2Props.linkToResource}
          />
          <ResourceAddedOrNotResourceAddedOrNo3
            universityDistrictFoodBank={resourceAddedOrNotResourceAddedOrNo31Props.universityDistrictFoodBank}
            ourMissionIsToBu={resourceAddedOrNotResourceAddedOrNo31Props.ourMissionIsToBu}
          />
          <ResourceAddedOrNotResourceAddedOrNo3
            universityDistrictFoodBank={resourceAddedOrNotResourceAddedOrNo32Props.universityDistrictFoodBank}
            ourMissionIsToBu={resourceAddedOrNotResourceAddedOrNo32Props.ourMissionIsToBu}
            className={resourceAddedOrNotResourceAddedOrNo32Props.className}
          />
          <ResourceAddedOrNotResourceAddedOrNo3
            universityDistrictFoodBank={resourceAddedOrNotResourceAddedOrNo33Props.universityDistrictFoodBank}
            ourMissionIsToBu={resourceAddedOrNotResourceAddedOrNo33Props.ourMissionIsToBu}
          />
          <OverlapGroup16>
            <OverlapGroup13>
              <a href="https://eghseattle.org/" target="_blank">
                <Rectangle26></Rectangle26>
              </a>
              <UniversityDistrictFoodBank>{universityDistrictFoodBank}</UniversityDistrictFoodBank>
              <OurMissionIsToBu>{ourMissionIsToBu}</OurMissionIsToBu>
            </OverlapGroup13>
            <a href="https://eghseattle.org/" target="_blank">
              <Rectangle27></Rectangle27>
            </a>
            <a href="https://familyworksseattle.org/" target="_blank">
              <LinkToResource>{linkToResource1}</LinkToResource>
            </a>
          </OverlapGroup16>
          <ResourceAddedOrNotResourceAddedOrNo3
            universityDistrictFoodBank={resourceAddedOrNotResourceAddedOrNo34Props.universityDistrictFoodBank}
            ourMissionIsToBu={resourceAddedOrNotResourceAddedOrNo34Props.ourMissionIsToBu}
            className={resourceAddedOrNotResourceAddedOrNo34Props.className}
          />
          <ResourceAddedOrNotResourceAddedOrNo3
            universityDistrictFoodBank={resourceAddedOrNotResourceAddedOrNo35Props.universityDistrictFoodBank}
            ourMissionIsToBu={resourceAddedOrNotResourceAddedOrNo35Props.ourMissionIsToBu}
          />
          <TemporaryHousingResources>{temporaryHousingResources}</TemporaryHousingResources>
          <ResourceSection>
            <OverlapGroup>
              <a href="https://lihi.org/rosies-village/" target="_blank">
                <Rectangle261></Rectangle261>
              </a>
              <HousingChoiceVouchers1>{housingChoiceVouchers2}</HousingChoiceVouchers1>
              <OurMissionIsToBu>{lihiProvidesAVari}</OurMissionIsToBu>
              <a href="https://lihi.org/rosies-village/" target="_blank">
                <Rectangle271></Rectangle271>
              </a>
              <a href="https://lihi.org/rosies-village/" target="_blank">
                <LinkToResource1>{linkToResource2}</LinkToResource1>
              </a>
            </OverlapGroup>
          </ResourceSection>
          <ResourceSection1>
            <OverlapGroup>
              <a href="https://www.dawnrising.org/resources/blog-post-title-three-bs5df" target="_blank">
                <Rectangle261></Rectangle261>
              </a>
              <HousingChoiceVouchers1>{confidentialEmergen}</HousingChoiceVouchers1>
              <OurMissionIsToBu>{weOfferSafeConfi}</OurMissionIsToBu>
              <a href="https://lihi.org/rosies-village/" target="_blank">
                <Rectangle271></Rectangle271>
              </a>
              <a href="https://www.dawnrising.org/resources/blog-post-title-three-bs5df" target="_blank">
                <LinkToResource1>{linkToResource3}</LinkToResource1>
              </a>
            </OverlapGroup>
          </ResourceSection1>
          <ResourceSection1>
            <OverlapGroup>
              <a href="https://ccsww.org/get-help/housing/transitional-housing/" target="_blank">
                <Rectangle261></Rectangle261>
              </a>
              <HousingChoiceVouchers1>{catholicHousingSer}</HousingChoiceVouchers1>
              <OurMissionIsToBu>{transitionalHousing}</OurMissionIsToBu>
              <a href="https://lihi.org/rosies-village/" target="_blank">
                <Rectangle271></Rectangle271>
              </a>
              <a href="https://ccsww.org/get-help/housing/transitional-housing/" target="_blank">
                <LinkToResource1>{linkToResource4}</LinkToResource1>
              </a>
            </OverlapGroup>
          </ResourceSection1>
          <ResourceSection1>
            <OverlapGroup>
              <a href="https://www.breadoflifemission.org/emergency-services-overview" target="_blank">
                <Rectangle261></Rectangle261>
              </a>
              <HousingChoiceVouchers1>{breadOfLife}</HousingChoiceVouchers1>
              <OurMissionIsToBu>{whenSomeoneComesT}</OurMissionIsToBu>
              <a href="https://www.breadoflifemission.org/emergency-services-overview" target="_blank">
                <Rectangle271></Rectangle271>
              </a>
              <a href="https://ccsww.org/get-help/housing/transitional-housing/" target="_blank">
                <LinkToResource1>{linkToResource5}</LinkToResource1>
              </a>
            </OverlapGroup>
          </ResourceSection1>
          <ResourceSection1>
            <OverlapGroup>
              <a href="https://www.compasshousingalliance.org/emergency-programs/janpetersplace/" target="_blank">
                <Rectangle261></Rectangle261>
              </a>
              <HousingChoiceVouchers1>{name1}</HousingChoiceVouchers1>
              <OurMissionIsToBu>{name2}</OurMissionIsToBu>
              <a href="https://www.compasshousingalliance.org/emergency-programs/janpetersplace/" target="_blank">
                <Rectangle271></Rectangle271>
              </a>
              <a href="https://ccsww.org/get-help/housing/transitional-housing/" target="_blank">
                <LinkToResource1>{linkToResource6}</LinkToResource1>
              </a>
            </OverlapGroup>
          </ResourceSection1>
          <ResourceSection1>
            <OverlapGroup>
              <a href="https://www.compasshousingalliance.org/emergency-programs/ottos-place/" target="_blank">
                <Rectangle261></Rectangle261>
              </a>
              <HousingChoiceVouchers1>{ottosPlace}</HousingChoiceVouchers1>
              <OurMissionIsToBu>{ottosPlaceIsAnE}</OurMissionIsToBu>
              <a href="https://www.compasshousingalliance.org/emergency-programs/ottos-place/" target="_blank">
                <Rectangle271></Rectangle271>
              </a>
              <a href="https://ccsww.org/get-help/housing/transitional-housing/" target="_blank">
                <LinkToResource1>{linkToResource7}</LinkToResource1>
              </a>
            </OverlapGroup>
          </ResourceSection1>
        </div>
      </div>
    );
  }
}

const OverlapGroup15 = styled.div`
  height: 148px;
  position: relative;
  display: flex;
  padding: 37.1px 85px;
  justify-content: flex-end;
  align-items: center;
  min-width: 1440px;
  background-color: var(--white);
  box-shadow: 0px 4px 4px #00000040;
`;

const MoreResources1 = styled.div`
  ${Header2}
  width: 440px;
  min-height: 75px;
  margin-top: 42px;
  margin-left: 2px;
  font-weight: 500;
  color: var(--black);
`;

const IfYouHaveAlready = styled.div`
  ${LibrebaskervilleNormalBlack25px}
  width: 1262px;
  min-height: 83px;
  margin-top: 36px;
  margin-right: 12px;
  letter-spacing: 0;
`;

const OtherVoucherPrograms = styled.div`
  ${RobotoMediumBlack45px}
  width: 599px;
  min-height: 75px;
  align-self: flex-start;
  margin-top: 31px;
  margin-left: 83px;
  letter-spacing: 0;
`;

const OverlapGroup17 = styled.div`
  width: 1293px;
  height: 242px;
  position: relative;
  margin-top: 1px;
  margin-left: 19px;
`;

const HousingChoiceVouchers = styled.div`
  ${RobotoMediumWhite40px}
  position: absolute;
  top: 75px;
  left: 21px;
  letter-spacing: 0;
`;

const TheHousingChoiceV = styled.div`
  ${LibrebaskervilleNormalWhite25px}
  position: absolute;
  width: 1217px;
  top: 135px;
  left: 21px;
  letter-spacing: 0;
`;

const FoodAndShelterResources = styled.div`
  ${RobotoMediumBlack45px}
  width: 687px;
  min-height: 75px;
  align-self: flex-start;
  margin-top: 43px;
  margin-left: 83px;
  letter-spacing: 0;
`;

const OverlapGroup16 = styled.div`
  width: 1293px;
  height: 226px;
  position: relative;
  margin-top: 33px;
  margin-left: 19px;
`;

const OverlapGroup13 = styled.div`
  position: absolute;
  width: 1293px;
  height: 257px;
  top: 0;
  left: 0;
  border-radius: 2px;
`;

const Rectangle26 = styled.div`
  position: absolute;
  width: 1293px;
  height: 257px;
  top: 0;
  left: 0;
  background-color: var(--hippie-blue);
  border-radius: 2px;
  cursor: pointer;
`;

const UniversityDistrictFoodBank = styled.div`
  ${RobotoMediumWhite35px}
  position: absolute;
  width: 1247px;
  top: 12px;
  left: 21px;
  letter-spacing: 0;
`;

const OurMissionIsToBu = styled.div`
  ${LibrebaskervilleNormalWhite22px}
  position: absolute;
  width: 1217px;
  top: 83px;
  left: 21px;
  letter-spacing: 0;
`;

const Rectangle27 = styled.div`
  position: absolute;
  width: 186px;
  height: 41px;
  top: 185px;
  left: 1082px;
  background-color: var(--white);
  border-radius: 8.4px;
  box-shadow: 2.5199999809265137px 2.5199999809265137px 3.3600001335144043px #00000080;
  cursor: pointer;
`;

const LinkToResource = styled.div`
  ${RobotoMediumMidnightBlue21px}
  position: absolute;
  width: 157px;
  top: 194px;
  left: 1096px;
  letter-spacing: 0;
  cursor: pointer;
`;

const TemporaryHousingResources = styled.div`
  ${RobotoMediumBlack45px}
  width: 789px;
  min-height: 75px;
  align-self: flex-start;
  margin-top: 53px;
  margin-left: 83px;
  letter-spacing: 0;
`;

const ResourceSection = styled.div`
  margin-top: 1px;
  margin-left: 19px;
  display: flex;
  align-items: flex-start;
  min-width: 1293px;
`;

const OverlapGroup = styled.div`
  width: 1293px;
  height: 242px;
  position: relative;
  border-radius: 2px;
`;

const Rectangle261 = styled.div`
  position: absolute;
  width: 1293px;
  height: 242px;
  top: 0;
  left: 0;
  background-color: var(--amazon);
  border-radius: 2px;
  cursor: pointer;
`;

const HousingChoiceVouchers1 = styled.div`
  ${RobotoMediumWhite35px}
  position: absolute;
  top: 13px;
  left: 21px;
  letter-spacing: 0;
`;

const Rectangle271 = styled.div`
  position: absolute;
  width: 186px;
  height: 42px;
  top: 178px;
  left: 1071px;
  background-color: var(--white);
  border-radius: 8.4px;
  box-shadow: 2.5199999809265137px 2.5199999809265137px 3.3600001335144043px #00000080;
  cursor: pointer;
`;

const LinkToResource1 = styled.div`
  ${RobotoMediumMidnightBlue21px}
  position: absolute;
  width: 157px;
  top: 187px;
  left: 1085px;
  letter-spacing: 0;
  cursor: pointer;
`;

const ResourceSection1 = styled.div`
  margin-top: 33px;
  margin-left: 19px;
  display: flex;
  align-items: flex-start;
  min-width: 1293px;
`;

export default ResourcesV3;
