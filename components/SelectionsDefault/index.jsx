import React from "react";
import styled from "styled-components";
import {
  Border1pxSummerGreen,
  LibrebaskervilleNormalBlack30px,
  LibrebaskervilleNormalBlack28px,
  Border25pxBlack,
} from "../../styledMixins";


class SelectionsDefault extends React.Component {
  render() {
    const { spanText1, spanText2, homelessAtRiskOf } = this.props;

    return (
      <EligibilityQuestions>
        <OverlapGroup2>
          <OverlapGroup1>
            <InOrderToBeEligi>
              <Span019>{spanText1}</Span019>
              <Span119>{spanText2}</Span119>
            </InOrderToBeEligi>
            <HomelessAtRiskOf>{homelessAtRiskOf}</HomelessAtRiskOf>
            <Rectangle12></Rectangle12>
            <Rectangle13></Rectangle13>
            <Rectangle14></Rectangle14>
            <Rectangle15></Rectangle15>
          </OverlapGroup1>
          <Rectangle16></Rectangle16>
          <Rectangle17></Rectangle17>
        </OverlapGroup2>
        <Rectangle18></Rectangle18>
      </EligibilityQuestions>
    );
  }
}

const EligibilityQuestions = styled.div`
  ${Border1pxSummerGreen}
  width: 1011px;
  display: flex;
  flex-direction: column;
  padding: 17px 0;
  align-items: flex-start;
  min-height: 564px;
  background-color: var(--white);
  border-radius: 5px;
`;

const OverlapGroup2 = styled.div`
  width: 958px;
  height: 454px;
  position: relative;
  align-self: flex-end;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  width: 958px;
  height: 446px;
  top: 0;
  left: 0;
`;

const InOrderToBeEligi = styled.div`
  ${LibrebaskervilleNormalBlack28px}
  position: absolute;
  width: 905px;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: 28px;
`;

const Span019 = styled.span`
  ${LibrebaskervilleNormalBlack28px}
  line-height: 37px;
`;

const Span119 = styled.span`
  ${LibrebaskervilleNormalBlack28px}
  line-height: 25px;
`;

const HomelessAtRiskOf = styled.div`
  ${LibrebaskervilleNormalBlack30px}
  position: absolute;
  width: 839px;
  top: 138px;
  left: 119px;
  letter-spacing: 0;
  line-height: 55px;
`;

const Rectangle12 = styled.div`
  ${Border25pxBlack}
  position: absolute;
  width: 32px;
  height: 32px;
  top: 149px;
  left: 64px;
  background-color: var(--white);
`;

const Rectangle13 = styled.div`
  ${Border25pxBlack}
  position: absolute;
  width: 32px;
  height: 32px;
  top: 204px;
  left: 64px;
  background-color: var(--white);
`;

const Rectangle14 = styled.div`
  ${Border25pxBlack}
  position: absolute;
  width: 32px;
  height: 32px;
  top: 260px;
  left: 64px;
  background-color: var(--white);
`;

const Rectangle15 = styled.div`
  ${Border25pxBlack}
  position: absolute;
  width: 32px;
  height: 32px;
  top: 313px;
  left: 64px;
  background-color: var(--white);
`;

const Rectangle16 = styled.div`
  ${Border25pxBlack}
  position: absolute;
  width: 32px;
  height: 32px;
  top: 369px;
  left: 64px;
  background-color: var(--white);
`;

const Rectangle17 = styled.div`
  ${Border25pxBlack}
  position: absolute;
  width: 32px;
  height: 32px;
  top: 422px;
  left: 64px;
  background-color: var(--white);
`;

const Rectangle18 = styled.div`
  ${Border25pxBlack}
  width: 32px;
  height: 32px;
  margin-top: 23px;
  margin-left: 116px;
  background-color: var(--white);
`;

export default SelectionsDefault;
