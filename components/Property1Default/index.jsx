import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RobotoMediumWhite21px, RobotoMediumWhite29px } from "../../styledMixins";


class Property1Default extends React.Component {
  render() {
    const { catholicCommunityServices, className } = this.props;

    return (
      <RegionalAccessPointV2 className={`regional-access-point-v2 ${className || ""}`}>
        <CatholicCommunityServices className="catholic-community-services">
          {catholicCommunityServices}
        </CatholicCommunityServices>
        <OverlapGroup3 className="overlap-group3-3">
          <Link to="/voucher-tool-v3-rap-ccs">
            <Rectangle35 className="rectangle-35-2"></Rectangle35>
          </Link>
          <ClickForDetails className="click-for-details-5">Click for Details</ClickForDetails>
        </OverlapGroup3>
      </RegionalAccessPointV2>
    );
  }
}

const RegionalAccessPointV2 = styled.div`
  height: 75px;
  margin-top: 12px;
  margin-left: 1px;
  display: flex;
  padding: 16px 19px;
  align-items: center;
  min-width: 945px;
  background-color: var(--midnight-blue);

  &.regional-access-point-v2.regional-access-point-v2-1 {
    margin-top: 20px;
  }

  &.regional-access-point-v2.regional-access-point-v2-2 {
    margin-top: 20px;
  }

  &.regional-access-point-v2.regional-access-point-v2-3 {
    margin-top: 20px;
  }

  &.regional-access-point-v2.regional-access-point-v2-5 {
    margin-top: 20px;
  }

  &.regional-access-point-v2.regional-access-point-v2-6 {
    margin-top: 20px;
  }

  &.regional-access-point-v2.regional-access-point-v2-7 {
    margin-top: 20px;
  }

  &.regional-access-point-v2.regional-access-point-v2-8 {
    margin-top: 210px;
  }

  &.regional-access-point-v2.regional-access-point-v2-9 {
    margin-top: 210px;
  }

  &.regional-access-point-v2.regional-access-point-v2-10 {
    margin-top: 20px;
  }

  &.regional-access-point-v2.regional-access-point-v2-11 {
    position: absolute;
    top: 0;
    left: 0;
    margin-top: unset;
    margin-left: unset;
  }

  &.regional-access-point-v2.regional-access-point-v2-12 {
    margin-top: 19px;
  }

  &.regional-access-point-v2.regional-access-point-v2-13 {
    margin-top: 20px;
  }
`;

const CatholicCommunityServices = styled.div`
  ${RobotoMediumWhite29px}
  width: 580px;
  min-height: 29px;
  letter-spacing: 0;
`;

const OverlapGroup3 = styled.div`
  width: 183px;
  height: 42px;
  position: relative;
  align-self: flex-end;
  margin-left: 144px;
  border-radius: 12px;
`;

const Rectangle35 = styled.div`
  position: absolute;
  width: 183px;
  height: 42px;
  top: 0;
  left: 0;
  background-color: var(--cornflower);
  border-radius: 12px;
  cursor: pointer;
`;

const ClickForDetails = styled.div`
  ${RobotoMediumWhite21px}
  position: absolute;
  width: 152px;
  top: 9px;
  left: 15px;
  letter-spacing: 0;
`;

export default Property1Default;
