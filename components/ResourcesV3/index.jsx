import React from "react";
import Logo from "../Logo";
import HomePageLink from "../HomePageLink";
import MoreResources from "../MoreResources";
import ResourceAddedOrNotNotAdded from "../ResourceAddedOrNotNotAdded";
import ResourceAddedOrNotResourceAddedOrNo from "../ResourceAddedOrNotResourceAddedOrNo";
import styled from "styled-components";
import {
  LibrebaskervilleNormalWhite22px,
  LibrebaskervilleNormalWhite25px,
  LibrebaskervilleNormalBlack25px,
  Header2,
  RobotoMediumBlack45px,
  RobotoMediumWhite40px,
  RobotoMediumMidnightBlue21px,
  RobotoMediumWhite35px,
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
      temporaryHousingResources,
      housingChoiceVouchers2,
      lihiProvidesAVari,
      linkToResource,
      resourceAddedOrNotNotAddedProps,
      resourceAddedOrNotResourceAddedOrNoProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="resources-v3-1 screen">
          <OverlapGroup6>
            <Logo />
            <HomePageLink />
            <MoreResources />
          </OverlapGroup6>
          <MoreResources1>{moreResources}</MoreResources1>
          <IfYouHaveAlready>
            <span className="librebaskerville-normal-black-25px">{spanText1}</span>
            <span className="librebaskerville-bold-black-25px">{spanText2}</span>
          </IfYouHaveAlready>
          <OtherVoucherPrograms>{otherVoucherPrograms}</OtherVoucherPrograms>
          <OverlapGroup5>
            <HousingChoiceVouchers>{housingChoiceVouchers1}</HousingChoiceVouchers>
            <TheHousingChoiceV>{theHousingChoiceV}</TheHousingChoiceV>
            <ResourceAddedOrNotNotAdded
              housingChoiceVouchers={resourceAddedOrNotNotAddedProps.housingChoiceVouchers}
              spanText1={resourceAddedOrNotNotAddedProps.spanText1}
              spanText2={resourceAddedOrNotNotAddedProps.spanText2}
              linkToResource={resourceAddedOrNotNotAddedProps.linkToResource}
            />
          </OverlapGroup5>
          <FoodAndShelterResources>{foodAndShelterResources}</FoodAndShelterResources>
          <ResourceAddedOrNotResourceAddedOrNo
            universityDistrictFoodBank={resourceAddedOrNotResourceAddedOrNoProps.universityDistrictFoodBank}
            spanText1={resourceAddedOrNotResourceAddedOrNoProps.spanText1}
            spanText2={resourceAddedOrNotResourceAddedOrNoProps.spanText2}
            linkToResource={resourceAddedOrNotResourceAddedOrNoProps.linkToResource}
          />
          <TemporaryHousingResources>{temporaryHousingResources}</TemporaryHousingResources>
          <OverlapGroup5>
            <OverlapGroup>
              <a href="https://lihi.org/rosies-village/" target="_blank">
                <Rectangle26></Rectangle26>
              </a>
              <HousingChoiceVouchers1>{housingChoiceVouchers2}</HousingChoiceVouchers1>
              <LIHIProvidesAVari>{lihiProvidesAVari}</LIHIProvidesAVari>
            </OverlapGroup>
            <a href="https://lihi.org/rosies-village/" target="_blank">
              <Rectangle27></Rectangle27>
            </a>
            <a href="https://lihi.org/rosies-village/" target="_blank">
              <LinkToResource>{linkToResource}</LinkToResource>
            </a>
          </OverlapGroup5>
        </div>
      </div>
    );
  }
}

const OverlapGroup6 = styled.div`
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

const MoreResources1 = styled.div`
  ${Header2}
  width: 440px;
  min-height: 75px;
  margin-top: 39px;
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

const OverlapGroup5 = styled.div`
  width: 1293px;
  height: 242px;
  position: relative;
  margin-left: 19px;
`;

const HousingChoiceVouchers = styled.div`
  ${RobotoMediumWhite40px}
  position: absolute;
  top: 76px;
  left: 21px;
  letter-spacing: 0;
`;

const TheHousingChoiceV = styled.div`
  ${LibrebaskervilleNormalWhite25px}
  position: absolute;
  width: 1217px;
  top: 136px;
  left: 21px;
  letter-spacing: 0;
`;

const FoodAndShelterResources = styled.div`
  ${RobotoMediumBlack45px}
  width: 687px;
  min-height: 75px;
  align-self: flex-start;
  margin-top: 44px;
  margin-left: 83px;
  letter-spacing: 0;
`;

const TemporaryHousingResources = styled.div`
  ${RobotoMediumBlack45px}
  width: 789px;
  min-height: 75px;
  align-self: flex-start;
  margin-top: 36px;
  margin-left: 83px;
  letter-spacing: 0;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 1293px;
  height: 242px;
  top: 0;
  left: 0;
  border-radius: 2px;
`;

const Rectangle26 = styled.div`
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
  top: 14px;
  left: 21px;
  letter-spacing: 0;
`;

const LIHIProvidesAVari = styled.div`
  ${LibrebaskervilleNormalWhite22px}
  position: absolute;
  width: 1217px;
  top: 84px;
  left: 21px;
  letter-spacing: 0;
`;

const Rectangle27 = styled.div`
  position: absolute;
  width: 186px;
  height: 42px;
  top: 180px;
  left: 1081px;
  background-color: var(--white);
  border-radius: 8.4px;
  box-shadow: 2.5199999809265137px 2.5199999809265137px 3.3600001335144043px #00000080;
  cursor: pointer;
`;

const LinkToResource = styled.div`
  ${RobotoMediumMidnightBlue21px}
  position: absolute;
  width: 157px;
  top: 190px;
  left: 1095px;
  letter-spacing: 0;
  cursor: pointer;
`;

export default ResourcesV3;
