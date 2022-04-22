import React from "react";
import styled from "styled-components";
import { LibrebaskervilleNormalBlack28px, Border1pxBlack2, Border25pxBlack } from "../../styledMixins";


class Property1Default42 extends React.Component {
  render() {
    const { checkIfAnyOfThe, youreARegistered } = this.props;

    return (
      <DisqualificationQuestionsV2>
        <CheckIfAnyOfThe>{checkIfAnyOfThe}</CheckIfAnyOfThe>
        <FlexRow>
          <FlexCol>
            <Rectangle24></Rectangle24>
            <Rectangle23 src="/img/rectangle-23-1@2x.svg" />
            <Rectangle22></Rectangle22>
            <Rectangle16></Rectangle16>
            <Rectangle22></Rectangle22>
          </FlexCol>
          <YoureARegistered>{youreARegistered}</YoureARegistered>
        </FlexRow>
      </DisqualificationQuestionsV2>
    );
  }
}

const DisqualificationQuestionsV2 = styled.div`
  ${LibrebaskervilleNormalBlack28px}
  ${Border1pxBlack2}
            position: absolute;
  width: 1011px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  align-items: flex-start;
  min-height: 564px;
  background-color: var(--white);
`;

const CheckIfAnyOfThe = styled.div`
  width: 907px;
  min-height: 52px;
  margin-top: 13px;
  letter-spacing: 0;
`;

const FlexRow = styled.div`
  height: 458px;
  align-self: flex-end;
  margin-top: 1px;
  margin-right: 33px;
  display: flex;
  align-items: flex-start;
  min-width: 879px;
`;

const FlexCol = styled.div`
  width: 32px;
  margin-top: 11px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 414px;
`;

const Rectangle24 = styled.div`
  ${Border25pxBlack}
  width: 32px;
  height: 32px;
  background-color: var(--white);
`;

const Rectangle23 = styled.img`
  width: 32px;
  height: 32px;
  margin-top: 25px;
`;

const Rectangle22 = styled.div`
  ${Border25pxBlack}
  width: 32px;
  height: 32px;
  margin-top: 75px;
  background-color: var(--white);
`;

const Rectangle16 = styled.div`
  ${Border25pxBlack}
  width: 32px;
  height: 32px;
  margin-top: 79px;
  background-color: var(--white);
`;

const YoureARegistered = styled.div`
  width: 823px;
  min-height: 458px;
  margin-left: 24px;
  letter-spacing: 0;
  line-height: 55px;
`;

export default Property1Default42;
