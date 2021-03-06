import React from "react";
import styled from "styled-components";
import { RobotoMediumWhite21px, RobotoMediumWhite29px } from "../../styledMixins";


class Property1Default5 extends React.Component {
  render() {
    const { catholicCommunityServices, className } = this.props;

    return (
      <RegionalAccessPointV2 className={`regional-access-point-v2-14 ${className || ""}`}>
        <CatholicCommunityServices className="catholic-community-services-1">
          {catholicCommunityServices}
        </CatholicCommunityServices>
        <OverlapGroup4 className="overlap-group4-8">
          <ClickForDetails className="click-for-details-6">Click for Details</ClickForDetails>
        </OverlapGroup4>
      </RegionalAccessPointV2>
    );
  }
}

const RegionalAccessPointV2 = styled.div`
  height: 75px;
  margin-top: 13px;
  margin-left: 1px;
  display: flex;
  padding: 16px 19px;
  align-items: center;
  min-width: 945px;
  background-color: var(--midnight-blue);

  &.regional-access-point-v2-14.regional-access-point-v2-15 {
    margin-top: 20px;
  }
`;

const CatholicCommunityServices = styled.div`
  ${RobotoMediumWhite29px}
  width: 580px;
  min-height: 29px;
  margin-bottom: 2px;
  letter-spacing: 0;
`;

const OverlapGroup4 = styled.div`
  height: 42px;
  align-self: flex-end;
  margin-left: 144px;
  display: flex;
  padding: 8px 15px;
  align-items: flex-start;
  min-width: 183px;
  background-color: var(--cornflower);
  border-radius: 12px;
`;

const ClickForDetails = styled.div`
  ${RobotoMediumWhite21px}
  width: 152px;
  min-height: 23px;
  letter-spacing: 0;
`;

export default Property1Default5;
