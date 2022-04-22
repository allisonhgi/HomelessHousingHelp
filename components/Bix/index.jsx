import React from "react";
import styled from "styled-components";


class Bix extends React.Component {
  render() {
    return (
      <Bix1>
        <Vector src="/img/vector-4@2x.svg" />
      </Bix1>
    );
  }
}

const Bix1 = styled.div`
  position: absolute;
  width: 34px;
  height: 34px;
  top: 0;
  left: 53px;
  display: flex;
  padding: 9px;
  align-items: flex-start;
`;

const Vector = styled.img`
  width: 15px;
  height: 15px;
`;

const Bix2 = styled.div`
  position: absolute;
  width: 34px;
  height: 34px;
  top: 0;
  left: 53px;
  display: flex;
  padding: 9px;
  align-items: flex-start;
`;

const Vector1 = styled.img`
  width: 15px;
  height: 15px;
`;

const Bix3 = styled.div`
  position: absolute;
  width: 34px;
  height: 34px;
  top: 0;
  left: 53px;
  display: flex;
  padding: 9px;
  align-items: flex-start;
`;

const Vector2 = styled.img`
  width: 15px;
  height: 15px;
`;

export default Bix;
