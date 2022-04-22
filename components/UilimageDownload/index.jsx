import React from "react";
import styled from "styled-components";


class UilimageDownload extends React.Component {
  render() {
    return (
      <UilimageDownload1>
        <Vector src="/img/vector-11@2x.svg" />
      </UilimageDownload1>
    );
  }
}

const UilimageDownload1 = styled.div`
  position: absolute;
  width: 196px;
  height: 196px;
  top: 200px;
  left: 535px;
  display: flex;
  padding: 7.9px 8.3px;
  align-items: flex-start;
`;

const Vector = styled.img`
  width: 172px;
  height: 172px;
  margin-left: 8px;
`;

const UilimageDownload2 = styled.div`
  position: absolute;
  width: 196px;
  height: 196px;
  top: 200px;
  left: 535px;
  display: flex;
  padding: 7.9px 8.3px;
  align-items: flex-start;
`;

const Vector1 = styled.img`
  width: 172px;
  height: 172px;
  margin-left: 8px;
`;

export default UilimageDownload;
