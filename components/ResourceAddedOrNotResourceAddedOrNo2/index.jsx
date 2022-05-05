import React from "react";
import styled from "styled-components";
import {
  LibrebaskervilleNormalWhite22px,
  RobotoMediumMidnightBlue21px,
  RobotoMediumWhite35px,
} from "../../styledMixins";


class ResourceAddedOrNotResourceAddedOrNo2 extends React.Component {
  render() {
    const { universityDistrictFoodBank, spanText1, spanText2, linkToResource } = this.props;

    return (
      <ResourceSection>
        <OverlapGroup7>
          <a href="https://www.udistrictfoodbank.org/" target="_blank">
            <Rectangle26></Rectangle26>
          </a>
          <UniversityDistrictFoodBank>{universityDistrictFoodBank}</UniversityDistrictFoodBank>
          <OurMissionIsToBu>
            <span className="librebaskerville-normal-white-22px">{spanText1}</span>
            <span className="librebaskerville-normal-white-25px">{spanText2}</span>
          </OurMissionIsToBu>
          <a href="https://www.udistrictfoodbank.org/" target="_blank">
            <Rectangle27></Rectangle27>
          </a>
          <a href="https://www.udistrictfoodbank.org/" target="_blank">
            <LinkToResource>{linkToResource}</LinkToResource>
          </a>
        </OverlapGroup7>
      </ResourceSection>
    );
  }
}

const ResourceSection = styled.div`
  margin-left: 19px;
  display: flex;
  align-items: flex-start;
  min-width: 1293px;
`;

const OverlapGroup7 = styled.div`
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
  top: 13px;
  left: 21px;
  letter-spacing: 0;
`;

const OurMissionIsToBu = styled.div`
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
  top: 174px;
  left: 1096px;
  letter-spacing: 0;
  cursor: pointer;
`;

export default ResourceAddedOrNotResourceAddedOrNo2;
