import React from "react";
import Property1Default8 from "../Property1Default8";
import styled from "styled-components";
import { LibrebaskervilleNormalBlack28px, Border1pxBlack2 } from "../../styledMixins";


class RegionalAccessPointsV23 extends React.Component {
  render() {
    const {
      property1Default1Props,
      property1Default2Props,
      property1Default3Props,
      property1Default4Props,
      property1Default5Props,
    } = this.props;

    return (
      <RegionalAccessPointsV2>
        <RegionalAccessPoin>Regional Access Points (Click for more detailed information)</RegionalAccessPoin>
        <Property1Default8
          catholicCommunityServices={property1Default1Props.catholicCommunityServices}
          className={property1Default1Props.className}
        />
        <Property1Default8 catholicCommunityServices={property1Default2Props.catholicCommunityServices} />
        <Property1Default8 catholicCommunityServices={property1Default3Props.catholicCommunityServices} />
        <Property1Default8 catholicCommunityServices={property1Default4Props.catholicCommunityServices} />
        <Property1Default8 catholicCommunityServices={property1Default5Props.catholicCommunityServices} />
      </RegionalAccessPointsV2>
    );
  }
}

const RegionalAccessPointsV2 = styled.div`
  ${Border1pxBlack2}
  position: absolute;
  width: 1011px;
  top: 0;
  left: 0;
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

export default RegionalAccessPointsV23;
