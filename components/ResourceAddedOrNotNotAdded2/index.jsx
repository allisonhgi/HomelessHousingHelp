import React from "react";
import styled from "styled-components";
import {
  LibrebaskervilleNormalWhite22px,
  RobotoMediumMidnightBlue21px,
  RobotoMediumWhite35px,
} from "../../styledMixins";


class ResourceAddedOrNotNotAdded2 extends React.Component {
  render() {
    const { housingChoiceVouchers, spanText1, spanText2, linkToResource } = this.props;

    return (
      <ResourceSection>
        <OverlapGroup6>
          <a href="https://www.seattlehousing.org/housing/housing-choice-vouchers" target="_blank">
            <Rectangle26></Rectangle26>
          </a>
          <HousingChoiceVouchers>{housingChoiceVouchers}</HousingChoiceVouchers>
          <TheHousingChoiceV>
            <span className="librebaskerville-normal-white-22px">{spanText1}</span>
            <span className="librebaskerville-normal-white-25px">{spanText2}</span>
          </TheHousingChoiceV>
          <a href="https://www.seattlehousing.org/housing/housing-choice-vouchers" target="_blank">
            <Rectangle27></Rectangle27>
          </a>
          <a href="https://www.seattlehousing.org/housing/housing-choice-vouchers" target="_blank">
            <LinkToResource>{linkToResource}</LinkToResource>
          </a>
        </OverlapGroup6>
      </ResourceSection>
    );
  }
}

const ResourceSection = styled.div`
  position: absolute;
  height: 242px;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 1293px;
`;

const OverlapGroup6 = styled.div`
  width: 1293px;
  height: 242px;
  position: relative;
  border-radius: 2px;
`;

const Rectangle26 = styled.div`
  position: absolute;
  width: 1293px;
  height: 242px;
  top: 0;
  left: 0;
  background-color: var(--midnight-blue);
  border-radius: 2px;
  cursor: pointer;
`;

const HousingChoiceVouchers = styled.div`
  ${RobotoMediumWhite35px}
  position: absolute;
  top: 13px;
  left: 21px;
  letter-spacing: 0;
`;

const TheHousingChoiceV = styled.div`
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
  height: 42px;
  top: 178px;
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
  top: 187px;
  left: 1095px;
  letter-spacing: 0;
  cursor: pointer;
`;

export default ResourceAddedOrNotNotAdded2;
