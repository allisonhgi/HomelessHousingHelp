import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RobotoMediumWhite21px, RobotoMediumWhite30px } from "../../styledMixins";


class Property1Default4 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <DocumentButton className={`document-button-2 ${className || ""}`}>
        <SocialSecurityNumber className="social-security-number">Social Security Number</SocialSecurityNumber>
        <OverlapGroup4 className="overlap-group4-9">
          <Link to="/voucher-tool-v3-required-paperwork-ssn">
            <Rectangle35 className="rectangle-35-5"></Rectangle35>
          </Link>
          <Link to="/voucher-tool-v3-required-paperwork-ssn">
            <ClickForDetails className="click-for-details-10">Click for Details</ClickForDetails>
          </Link>
        </OverlapGroup4>
      </DocumentButton>
    );
  }
}

const DocumentButton = styled.div`
  position: absolute;
  height: 86px;
  top: 121px;
  left: 14px;
  display: flex;
  padding: 17px 19px;
  align-items: flex-start;
  min-width: 916px;
  background-color: var(--midnight-blue);
`;

const SocialSecurityNumber = styled.div`
  ${RobotoMediumWhite30px}
  width: 323px;
  min-height: 51px;
  letter-spacing: 0;
  line-height: 45px;
  white-space: nowrap;
`;

const OverlapGroup4 = styled.div`
  width: 183px;
  height: 42px;
  position: relative;
  align-self: center;
  margin-left: 372px;
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
  top: 8px;
  left: 15px;
  letter-spacing: 0;
  cursor: pointer;
`;

const ClickForDetails1 = styled.div`
  ${RobotoMediumWhite21px}

  .document-button-2.document-button-3  & {
    cursor: unset;
  }
`;

const ClickForDetails2 = styled.div`
  ${RobotoMediumWhite21px}

  .document-button-2.document-button-4  & {
    cursor: unset;
  }
`;

const ClickForDetails3 = styled.div`
  ${RobotoMediumWhite21px}

  .document-button-2.document-button-5  & {
    cursor: unset;
  }
`;

export default Property1Default4;
