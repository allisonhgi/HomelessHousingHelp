import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RobotoMediumWhite21px, RobotoMediumWhite30px } from "../../styledMixins";


class Property1Variant3 extends React.Component {
  render() {
    return (
      <DocumentButton>
        <ProofOfDateOfBirth>Proof of Date of Birth</ProofOfDateOfBirth>
        <OverlapGroup3>
          <Link to="/voucher-tool-v3-required-paperwork-dob">
            <Rectangle35></Rectangle35>
          </Link>
          <ClickForDetails>Click for Details</ClickForDetails>
        </OverlapGroup3>
      </DocumentButton>
    );
  }
}

const DocumentButton = styled.div`
  position: absolute;
  height: 86px;
  top: 218px;
  left: 14px;
  display: flex;
  padding: 17px 19px;
  align-items: center;
  min-width: 916px;
  background-color: var(--midnight-blue);
`;

const ProofOfDateOfBirth = styled.div`
  ${RobotoMediumWhite30px}
  width: 323px;
  min-height: 51px;
  align-self: flex-end;
  letter-spacing: 0;
  line-height: 45px;
  white-space: nowrap;
`;

const OverlapGroup3 = styled.div`
  width: 183px;
  height: 42px;
  position: relative;
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
  top: 9px;
  left: 15px;
  letter-spacing: 0;
`;

const DocumentButton1 = styled.div`
  position: absolute;
  height: 86px;
  top: 218px;
  left: 14px;
  display: flex;
  padding: 17px 19px;
  align-items: center;
  min-width: 916px;
  background-color: var(--midnight-blue);
`;

const ProofOfDateOfBirth1 = styled.div`
  ${RobotoMediumWhite30px}
  width: 323px;
  min-height: 51px;
  align-self: flex-end;
  letter-spacing: 0;
  line-height: 45px;
  white-space: nowrap;
`;

const OverlapGroup31 = styled.div`
  width: 183px;
  height: 42px;
  position: relative;
  margin-left: 372px;
  border-radius: 12px;
`;

const Rectangle351 = styled.div`
  position: absolute;
  width: 183px;
  height: 42px;
  top: 0;
  left: 0;
  background-color: var(--cornflower);
  border-radius: 12px;
  cursor: pointer;
`;

const ClickForDetails1 = styled.div`
  ${RobotoMediumWhite21px}
  position: absolute;
  width: 152px;
  top: 9px;
  left: 15px;
  letter-spacing: 0;
`;

const DocumentButton2 = styled.div`
  position: absolute;
  height: 86px;
  top: 218px;
  left: 14px;
  display: flex;
  padding: 17px 19px;
  align-items: center;
  min-width: 916px;
  background-color: var(--midnight-blue);
`;

const ProofOfDateOfBirth2 = styled.div`
  ${RobotoMediumWhite30px}
  width: 323px;
  min-height: 51px;
  align-self: flex-end;
  letter-spacing: 0;
  line-height: 45px;
  white-space: nowrap;
`;

const OverlapGroup32 = styled.div`
  width: 183px;
  height: 42px;
  position: relative;
  margin-left: 372px;
  border-radius: 12px;
`;

const Rectangle352 = styled.div`
  position: absolute;
  width: 183px;
  height: 42px;
  top: 0;
  left: 0;
  background-color: var(--cornflower);
  border-radius: 12px;
  cursor: pointer;
`;

const ClickForDetails2 = styled.div`
  ${RobotoMediumWhite21px}
  position: absolute;
  width: 152px;
  top: 9px;
  left: 15px;
  letter-spacing: 0;
`;

export default Property1Variant3;
