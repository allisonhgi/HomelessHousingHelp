import React from "react";
import styled from "styled-components";
import { Border3pxSummerGreen, LibrebaskervilleNormalBlack30px } from "../../styledMixins";


class TipTypeBackButton extends React.Component {
  render() {
    const { thisButtonWillTak } = this.props;

    return (
      <TipBox>
        <OverlapGroup>
          <Rectangle6></Rectangle6>
          <ThisButtonWillTak>{thisButtonWillTak}</ThisButtonWillTak>
          <Arrow3 src="/img/arrow-3-1@2x.svg" />
        </OverlapGroup>
      </TipBox>
    );
  }
}

const TipBox = styled.div`
  position: absolute;
  height: 272px;
  top: 0;
  left: 0;
  display: flex;
  padding: 0 0px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 623px;
`;

const OverlapGroup = styled.div`
  width: 573px;
  height: 171px;
  position: relative;
`;

const Rectangle6 = styled.div`
  ${Border3pxSummerGreen}
  position: absolute;
  width: 573px;
  height: 127px;
  top: 0;
  left: 0;
  background-color: var(--white);
  border-radius: 5px;
`;

const ThisButtonWillTak = styled.div`
  ${LibrebaskervilleNormalBlack30px}
  position: absolute;
  width: 526px;
  top: 13px;
  left: 18px;
  letter-spacing: 0;
`;

const Arrow3 = styled.img`
  position: absolute;
  width: 22px;
  height: 45px;
  top: 126px;
  left: 34px;
`;

export default TipTypeBackButton;
