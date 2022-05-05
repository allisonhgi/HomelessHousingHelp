import React from "react";
import Property1Default from "../Property1Default";
import styled from "styled-components";
import { LibrebaskervilleNormalBlack28px, Border1pxBlack2 } from "../../styledMixins";


class RegionalAccessPointsV22 extends React.Component {
  render() {
    const { property1Default1Props, property1Default2Props, property1Default3Props } = this.props;

    return (
      <RegionalAccessPointsV2>
        <RegionalAccessPoin>Regional Access Points (Click for more detailed information)</RegionalAccessPoin>
        <Property1Default catholicCommunityServices={property1Default1Props.catholicCommunityServices} />
        <Property1Default
          catholicCommunityServices={property1Default2Props.catholicCommunityServices}
          className={property1Default2Props.className}
        />
        <Property1Default
          catholicCommunityServices={property1Default3Props.catholicCommunityServices}
          className={property1Default3Props.className}
        />
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

const RegionalAccessPointsV21 = styled.div`
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

const RegionalAccessPoin1 = styled.div`
  ${LibrebaskervilleNormalBlack28px}
  min-height: 35px;
  letter-spacing: 0;
`;

const RegionalAccessPointsV23 = styled.div`
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

const RegionalAccessPoin2 = styled.div`
  ${LibrebaskervilleNormalBlack28px}
  min-height: 35px;
  letter-spacing: 0;
`;

export default RegionalAccessPointsV22;
