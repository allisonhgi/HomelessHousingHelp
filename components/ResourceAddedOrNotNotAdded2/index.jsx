import React from "react";
import styled from "styled-components";
import {
  LibrebaskervilleNormalWhite22px,
  RobotoMediumMidnightBlue21px,
  RobotoMediumWhite35px,
} from "../../styledMixins";


class ResourceAddedOrNotNotAdded2 extends React.Component {
  render() {
    const { affordableHousing, theLargestAndMost, linkToResource } = this.props;

    return (
      <ResourceSectionHousing>
        <AffordableHousing>{affordableHousing}</AffordableHousing>
        <TheLargestAndMost>{theLargestAndMost}</TheLargestAndMost>
        <OverlapGroup>
          <a href="https://www.affordablehousing.com/" target="_blank">
            <Rectangle27></Rectangle27>
          </a>
          <a href="https://www.affordablehousing.com/" target="_blank">
            <LinkToResource>{linkToResource}</LinkToResource>
          </a>
        </OverlapGroup>
      </ResourceSectionHousing>
    );
  }
}

const ResourceSectionHousing = styled.div`
  width: 1293px;
  margin-top: 9px;
  margin-right: 1px;
  display: flex;
  flex-direction: column;
  padding: 12px 21px;
  align-items: flex-start;
  min-height: 208px;
  background-color: var(--midnight-blue);
  border-radius: 2px;
`;

const AffordableHousing = styled.div`
  ${RobotoMediumWhite35px}
  width: 349px;
  min-height: 40px;
  letter-spacing: 0;
`;

const TheLargestAndMost = styled.div`
  ${LibrebaskervilleNormalWhite22px}
  width: 1247px;
  min-height: 63px;
  margin-top: 20px;
  letter-spacing: 0;
  line-height: 35px;
`;

const OverlapGroup = styled.div`
  width: 186px;
  height: 42px;
  position: relative;
  align-self: flex-end;
  margin-top: 10px;
  margin-right: 3.52px;
  border-radius: 8.4px;
`;

const Rectangle27 = styled.div`
  position: absolute;
  width: 186px;
  height: 42px;
  top: 0;
  left: 0;
  background-color: var(--white);
  border-radius: 8.4px;
  box-shadow: 2.5199999809265137px 2.5199999809265137px 3.3600001335144043px #00000080;
  cursor: pointer;
`;

const LinkToResource = styled.div`
  ${RobotoMediumMidnightBlue21px}
  position: absolute;
  width: 157px;
  top: 10px;
  left: 14px;
  letter-spacing: 0;
  cursor: pointer;
`;

export default ResourceAddedOrNotNotAdded2;
