import React from "react";
import styled from "styled-components";
import { Border3pxSummerGreen, LibrebaskervilleNormalBlack30px } from "../../styledMixins";


class TipTypeAudioButton extends React.Component {
  render() {
    const { thisButtonWillRea } = this.props;

    return (
      <TipBox>
        <OverlapGroup>
          <Rectangle6></Rectangle6>
          <ThisButtonWillRea>{thisButtonWillRea}</ThisButtonWillRea>
          <Arrow3 src="/img/arrow-3-1@2x.svg" />
        </OverlapGroup>
      </TipBox>
    );
  }
}

const TipBox = styled.div`
  height: 315px;
  margin-top: 12px;
  display: flex;
  align-items: flex-start;
  min-width: 623px;
`;

const OverlapGroup = styled.div`
  width: 624px;
  height: 305px;
  position: relative;
  margin-left: -1px;
`;

const Rectangle6 = styled.div`
  ${Border3pxSummerGreen}
  position: absolute;
  width: 573px;
  height: 127px;
  top: 0;
  left: 51px;
  background-color: var(--white);
  border-radius: 5px;
`;

const ThisButtonWillRea = styled.div`
  ${LibrebaskervilleNormalBlack30px}
  position: absolute;
  width: 546px;
  top: 15px;
  left: 69px;
  letter-spacing: 0;
`;

const Arrow3 = styled.img`
  position: absolute;
  width: 52px;
  height: 22px;
  top: 19px;
  left: 0;
`;

export default TipTypeAudioButton;
