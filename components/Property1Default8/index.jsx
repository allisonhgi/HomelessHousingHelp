import React from "react";
import styled from "styled-components";
import { RobotoMediumWhite21px, RobotoMediumWhite29px } from "../../styledMixins";


class Property1Default8 extends React.Component {
  render() {
    const { catholicCommunityServices, className } = this.props;

    return (
      <RegionalAccessPointV2 className={`regional-access-point-v2-1 ${className || ""}`}>
        <CatholicCommunityServices className="catholic-community-services-1">
          {catholicCommunityServices}
        </CatholicCommunityServices>
        <OverlapGroup3 className="overlap-group3">
          <ClickForDetails className="click-for-details-1">Click for Details</ClickForDetails>
        </OverlapGroup3>
      </RegionalAccessPointV2>
    );
  }
}

const RegionalAccessPointV2 = styled.div`
  height: 75px;
  margin-top: 20px;
  margin-left: 1px;
  display: flex;
  padding: 16px 19px;
  align-items: center;
  min-width: 945px;
  background-color: var(--midnight-blue);

  &.regional-access-point-v2-1.regional-access-point-v2-3 {
    margin-top: 12px;
  }
`;

const CatholicCommunityServices = styled.div`
  ${RobotoMediumWhite29px}
  width: 580px;
  min-height: 29px;
  letter-spacing: 0;
`;

const OverlapGroup3 = styled.div`
  height: 42px;
  align-self: flex-end;
  margin-left: 144px;
  display: flex;
  padding: 9px 15px;
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

export default Property1Default8;
