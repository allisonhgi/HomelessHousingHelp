import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RobotoMediumWhite21px, RobotoMediumWhite29px } from "../../styledMixins";


class Property1Default extends React.Component {
  render() {
    const { catholicCommunityServices, clickForDetails } = this.props;

    return (
      <RegionalAccessPointV2>
        <CatholicCommunityServices>{catholicCommunityServices}</CatholicCommunityServices>
        <OverlapGroup4>
          <Link to="/voucher-tool-v3-rap-ccs">
            <Rectangle35></Rectangle35>
          </Link>
          <ClickForDetails>{clickForDetails}</ClickForDetails>
        </OverlapGroup4>
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
`;

const CatholicCommunityServices = styled.div`
  ${RobotoMediumWhite29px}
  width: 580px;
  min-height: 29px;
  letter-spacing: 0;
`;

const OverlapGroup4 = styled.div`
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
