import React from "react";
import styled from "styled-components";
import { Border1pxBlack2, LibrebaskervilleNormalBlack25px } from "../../styledMixins";


class TextInfo2 extends React.Component {
  render() {
    const { spanText1, spanText2 } = this.props;

    return (
      <TextInfo>
        <NoDocumentsAreNee>
          <Span06>{spanText1}</Span06>
          <Span16>{spanText2}</Span16>
        </NoDocumentsAreNee>
      </TextInfo>
    );
  }
}

const TextInfo = styled.div`
  ${Border1pxBlack2}
  position: absolute;
  height: 564px;
  top: 0;
  left: 0;
  display: flex;
  padding: 2px 58px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 1011px;
  background-color: var(--white);
`;

const NoDocumentsAreNee = styled.div`
  ${LibrebaskervilleNormalBlack25px}
  width: 882px;
  min-height: 533px;
  letter-spacing: 0;
  line-height: 25px;
`;

const Span06 = styled.span`
  ${LibrebaskervilleNormalBlack25px}
  line-height: 33px;
`;

const Span16 = styled.span`
  ${LibrebaskervilleNormalBlack25px}
  line-height: 35px;
`;

export default TextInfo2;
