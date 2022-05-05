import React from "react";
import styled from "styled-components";
import { RobotoMediumWhite21px, RobotoMediumWhite30px } from "../../styledMixins";


class Property1Variant53 extends React.Component {
  render() {
    const { proofOfIncome } = this.props;

    return (
      <DocumentButton>
        <ProofOfIncome>{proofOfIncome}</ProofOfIncome>
        <OverlapGroup>
          <ClickForDetails>Click for Details</ClickForDetails>
        </OverlapGroup>
      </DocumentButton>
    );
  }
}

const DocumentButton = styled.div`
  position: absolute;
  height: 86px;
  top: 316px;
  left: 14px;
  display: flex;
  padding: 17px 19px;
  align-items: center;
  min-width: 916px;
  background-color: var(--midnight-blue);
`;

const ProofOfIncome = styled.div`
  ${RobotoMediumWhite30px}
  width: 323px;
  min-height: 51px;
  align-self: flex-end;
  letter-spacing: 0;
  line-height: 45px;
  white-space: nowrap;
`;

const OverlapGroup = styled.div`
  height: 42px;
  margin-left: 372px;
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

export default Property1Variant53;
