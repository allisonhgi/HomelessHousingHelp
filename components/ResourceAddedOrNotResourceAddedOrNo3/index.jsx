import React from "react";
import styled from "styled-components";
import {
  LibrebaskervilleNormalWhite22px,
  RobotoMediumMidnightBlue21px,
  RobotoMediumWhite35px,
} from "../../styledMixins";


class ResourceAddedOrNotResourceAddedOrNo3 extends React.Component {
  render() {
    const { universityDistrictFoodBank, ourMissionIsToBu, className } = this.props;

    return (
      <ResourceSection className={`resource-section-8 ${className || ""}`}>
        <OverlapGroup8 className="overlap-group8">
          <a href="https://www.seattlenightwatch.org/what-we-do/food-and-shelter/" target="_blank">
            <Rectangle26 className="rectangle-26-9"></Rectangle26>
          </a>
          <UniversityDistrictFoodBank className="university-district-food-bank-2">
            {universityDistrictFoodBank}
          </UniversityDistrictFoodBank>
          <OurMissionIsToBu className="our-mission-is-to-bu-2">{ourMissionIsToBu}</OurMissionIsToBu>
          <a href="https://www.udistrictfoodbank.org/" target="_blank">
            <Rectangle27 className="rectangle-27-11"></Rectangle27>
          </a>
          <a href="https://www.seattlenightwatch.org/what-we-do/food-and-shelter/" target="_blank">
            <LinkToResource className="link-to-resource-11">Link to Resource</LinkToResource>
          </a>
        </OverlapGroup8>
      </ResourceSection>
    );
  }
}

const ResourceSection = styled.div`
  margin-top: 33px;
  margin-left: 19px;
  display: flex;
  align-items: flex-start;
  min-width: 1293px;

  &.resource-section-8.resource-section-9 {
    margin-left: 15px;
  }

  &.resource-section-8.resource-section-11 {
    margin-top: 66px;
  }
`;

const OverlapGroup8 = styled.div`
  width: 1293px;
  height: 226px;
  position: relative;
  border-radius: 2px;
`;

const Rectangle26 = styled.div`
  position: absolute;
  width: 1293px;
  height: 226px;
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
  line-height: 30px;
`;

const OurMissionIsToBu = styled.div`
  ${LibrebaskervilleNormalWhite22px}
  position: absolute;
  width: 1217px;
  top: 83px;
  left: 21px;
  letter-spacing: 0;
  line-height: 30px;
`;

const Rectangle27 = styled.div`
  position: absolute;
  width: 186px;
  height: 42px;
  top: 164px;
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
  top: 173px;
  left: 1096px;
  letter-spacing: 0;
  cursor: pointer;
`;

export default ResourceAddedOrNotResourceAddedOrNo3;
