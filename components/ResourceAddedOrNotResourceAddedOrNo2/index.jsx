import React from "react";
import styled from "styled-components";
import { LibrebaskervilleNormalWhite22px, RobotoMediumWhite35px } from "../../styledMixins";


class ResourceAddedOrNotResourceAddedOrNo2 extends React.Component {
  render() {
    const { name, kchaHelpsRentersI, linkToResource } = this.props;

    return (
      <ResourceSectionHousing>
        <Name>{name}</Name>
        <KCHAHelpsRentersI>{kchaHelpsRentersI}</KCHAHelpsRentersI>
        <OverlapGroup1>
          <a href="https://www.kcha.org/housing/vouchers/search" target="_blank">
            <Rectangle27></Rectangle27>
          </a>
          <a href="https://www.kcha.org/housing/vouchers/search" target="_blank">
            <LinkToResource>{linkToResource}</LinkToResource>
          </a>
        </OverlapGroup1>
      </ResourceSectionHousing>
    );
  }
}

const ResourceSectionHousing = styled.div`
  width: 1293px;
  margin-top: 36px;
  margin-right: 1px;
  display: flex;
  flex-direction: column;
  padding: 12px 21px;
  align-items: flex-start;
  min-height: 208px;
  background-color: var(--hippie-blue);
  border-radius: 2px;
`;

const Name = styled.div`
  ${RobotoMediumWhite35px}
  width: 839px;
  min-height: 40px;
  letter-spacing: 0;
`;

const KCHAHelpsRentersI = styled.div`
  ${LibrebaskervilleNormalWhite22px}
  width: 1217px;
  min-height: 63px;
  margin-top: 22px;
  letter-spacing: 0;
  line-height: 35px;
`;

const OverlapGroup1 = styled.div`
  width: 186px;
  height: 42px;
  position: relative;
  align-self: flex-end;
  margin-top: 10px;
  margin-right: 0.52px;
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
  position: absolute;
  width: 157px;
  top: 10px;
  left: 14px;
  font-family: var(--font-family-roboto);
  font-weight: 500;
  color: var(--hippie-blue);
  font-size: 21px;
  letter-spacing: 0;
  cursor: pointer;
`;

export default ResourceAddedOrNotResourceAddedOrNo2;
