import React from "react";
import styled from "styled-components";
import { Border1pxBlack2, LibrebaskervilleNormalBlack30px } from "../../styledMixins";


class TextInfo extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <TextInfo1>
        <NoDocumentsAreNee>{children}</NoDocumentsAreNee>
      </TextInfo1>
    );
  }
}

const TextInfo1 = styled.div`
  ${Border1pxBlack2}
  position: absolute;
  height: 564px;
  top: 0;
  left: 0;
  display: flex;
  padding: 1px 58px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 1011px;
  background-color: var(--white);
`;

const NoDocumentsAreNee = styled.div`
  ${LibrebaskervilleNormalBlack30px}
  width: 882px;
  min-height: 533px;
  letter-spacing: 0;
`;

export default TextInfo;
