import React from "react";
import Property1Default from "../Property1Default";
import Property1Default8 from "../Property1Default8";
import styled from "styled-components";
import { LibrebaskervilleNormalBlack28px, Border1pxBlack2 } from "../../styledMixins";


class RegionalAccessPointsV2 extends React.Component {
  render() {
    const {
      regionalAccessPoin,
      property1DefaultProps,
      property1Default81Props,
      property1Default82Props,
      property1Default83Props,
      property1Default84Props,
    } = this.props;

    return (
      <RegionalAccessPointsV21>
        <RegionalAccessPoin>{regionalAccessPoin}</RegionalAccessPoin>
        <Property1Default
          catholicCommunityServices={property1DefaultProps.catholicCommunityServices}
          clickForDetails={property1DefaultProps.clickForDetails}
        />
        <Property1Default8 catholicCommunityServices={property1Default81Props.catholicCommunityServices} />
        <Property1Default8 catholicCommunityServices={property1Default82Props.catholicCommunityServices} />
        <Property1Default8 catholicCommunityServices={property1Default83Props.catholicCommunityServices} />
        <Property1Default8 catholicCommunityServices={property1Default84Props.catholicCommunityServices} />
      </RegionalAccessPointsV21>
    );
  }
}

const RegionalAccessPointsV21 = styled.div`
  ${Border1pxBlack2}
  width: 1011px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 31px;
  align-items: flex-start;
  min-height: 564px;
  background-color: var(--white);
`;

const RegionalAccessPoin = styled.div`
  ${LibrebaskervilleNormalBlack28px}
  min-height: 35px;
  letter-spacing: 0;
`;

export default RegionalAccessPointsV2;
