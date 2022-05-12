import React from "react";
import Property1Default5 from "../Property1Default5";
import Property1Default2 from "../Property1Default2";
import Property1Default from "../Property1Default";
import styled from "styled-components";
import { LibrebaskervilleNormalBlack28px, Border1pxBlack2 } from "../../styledMixins";


class RegionalAccessPointsV23 extends React.Component {
  render() {
    const {
      regionalAccessPoin,
      property1Default51Props,
      property1Default52Props,
      property1Default2Props,
      property1Default1Props,
      property1Default2Props2,
      property1Default3Props,
    } = this.props;

    return (
      <RegionalAccessPointsV2>
        <RegionalAccessPoin>{regionalAccessPoin}</RegionalAccessPoin>
        <Property1Default5 catholicCommunityServices={property1Default51Props.catholicCommunityServices} />
        <Property1Default5
          catholicCommunityServices={property1Default52Props.catholicCommunityServices}
          className={property1Default52Props.className}
        />
        <RegionalAccessPointContainer>
          <Property1Default2
            catholicCommunityServices={property1Default2Props.catholicCommunityServices}
            viewOnMap={property1Default2Props.viewOnMap}
          />
          <Property1Default
            catholicCommunityServices={property1Default1Props.catholicCommunityServices}
            className={property1Default1Props.className}
          />
        </RegionalAccessPointContainer>
        <Property1Default
          catholicCommunityServices={property1Default2Props2.catholicCommunityServices}
          className={property1Default2Props2.className}
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
  padding: 30px 31px;
  align-items: flex-start;
  min-height: 564px;
  background-color: var(--white);
`;

const RegionalAccessPoin = styled.div`
  ${LibrebaskervilleNormalBlack28px}
  min-height: 35px;
  letter-spacing: 0;
`;

const RegionalAccessPointContainer = styled.div`
  width: 945px;
  height: 75px;
  position: relative;
  align-self: center;
  margin-top: 21px;
`;

export default RegionalAccessPointsV23;
