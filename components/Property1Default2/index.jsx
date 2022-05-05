import React from "react";
import styled from "styled-components";
import { RobotoMediumWhite29px } from "../../styledMixins";


class Property1Default2 extends React.Component {
  render() {
    const { catholicCommunityServices, viewOnMap } = this.props;

    return (
      <RegionalAccessPointDefault>
        <CatholicCommunityServices>{catholicCommunityServices}</CatholicCommunityServices>
        <ViewOnMap>{viewOnMap}</ViewOnMap>
        <IconCursor src="/img/vector-33@2x.svg" />
      </RegionalAccessPointDefault>
    );
  }
}

const RegionalAccessPointDefault = styled.div`
  position: absolute;
  height: 75px;
  top: 0;
  left: 0;
  display: flex;
  padding: 22.8px 19px;
  align-items: center;
  min-width: 945px;
`;

const CatholicCommunityServices = styled.div`
  ${RobotoMediumWhite29px}
  width: 580px;
  min-height: 29px;
  letter-spacing: 0;
`;

const ViewOnMap = styled.div`
  width: 133px;
  min-height: 23px;
  margin-left: 149px;
  margin-bottom: 0.85px;
  font-family: var(--font-family-roboto);
  font-weight: 500;
  color: var(--white);
  font-size: var(--font-size-xxs);
  letter-spacing: 0;
`;

const IconCursor = styled.img`
  width: 27px;
  height: 22px;
  align-self: flex-start;
  margin-left: 12px;
`;

export default Property1Default2;
