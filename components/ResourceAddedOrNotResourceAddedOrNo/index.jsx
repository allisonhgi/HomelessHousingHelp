import React from "react";
import styled from "styled-components";
import { LibrebaskervilleNormalWhite22px, RobotoMediumWhite35px } from "../../styledMixins";


class ResourceAddedOrNotResourceAddedOrNo extends React.Component {
  render() {
    const { name, kchaHelpsRentersI, className } = this.props;

    return (
      <a href="https://www.kcha.org/housing/vouchers/search" target="_blank">
        <ResourceSectionHousing className={`resource-section-housing-1 ${className || ""}`}>
          <Name className="name-2">{name}</Name>
          <KCHAHelpsRentersI className="kcha-helps-renters-i">{kchaHelpsRentersI}</KCHAHelpsRentersI>
          <OverlapGroup1 className="overlap-group1-4">
            <a href="https://www.kcha.org/housing/vouchers/search" target="_blank">
              <Rectangle27 className="rectangle-27-1"></Rectangle27>
            </a>
            <a href="https://www.kcha.org/housing/vouchers/search" target="_blank">
              <LinkToResource className="link-to-resource-1">Link to Resource</LinkToResource>
            </a>
          </OverlapGroup1>
        </ResourceSectionHousing>
      </a>
    );
  }
}

const ResourceSectionHousing = styled.div`
  width: 1293px;
  margin-top: 33px;
  margin-right: 1px;
  display: flex;
  flex-direction: column;
  padding: 11px 21px;
  align-items: flex-start;
  min-height: 208px;
  background-color: var(--hippie-blue);
  border-radius: 2px;
  cursor: pointer;

  &.resource-section-housing-1.resource-section-housing-2 {
    background-color: var(--amazon);
  }
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
  margin-top: 11px;
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
  top: 9px;
  left: 14px;
  font-family: var(--font-family-roboto);
  font-weight: 500;
  color: var(--hippie-blue);
  font-size: var(--font-size-xxxxs);
  letter-spacing: 0;
  cursor: pointer;
`;

const LinkToResource1 = styled.div`
  .resource-section-housing-1.resource-section-housing-2 & {
    color: var(--amazon);
  }
`;

export default ResourceAddedOrNotResourceAddedOrNo;
