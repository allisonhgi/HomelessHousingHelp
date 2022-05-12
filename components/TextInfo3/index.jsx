import React from "react";
import styled from "styled-components";
import { Border1pxBlack2, LibrebaskervilleNormalBlack30px } from "../../styledMixins";


class TextInfo3 extends React.Component {
  render() {
    return (
      <TextInfo>
        <TheresAPossibilit>
          <span className="librebaskerville-normal-black-30px">
            There’s a possibility you might be disqualified for the voucher if you apply, based on the box you checked
            on the previous page. You can still apply, but your application is likely to be disqualified. Refer to the{" "}
          </span>
          <span className="librebaskerville-bold-black-30px">“More Resources” </span>
          <span className="librebaskerville-normal-black-30px">
            page in the upper right-hand corner of the screen for other programs you may be eligible for.
            <br />
            <br />
            <br />
            <br />
          </span>
          <span className="librebaskerville-bold-black-30px">Note:</span>
          <span className="librebaskerville-normal-black-30px">&nbsp;</span>
          <span className="librebaskerville-normal-black-30px">
            There are exceptions under the federal Violence Against Women Act for survivors who were convicted of
            producing methamphetamines if the conviction was due <br />
            to abuse.
          </span>
        </TheresAPossibilit>
      </TextInfo>
    );
  }
}

const TextInfo = styled.div`
  ${Border1pxBlack2}
  height: 564px;
  margin-top: 1px;
  margin-left: 1px;
  display: flex;
  padding: 25px 51px;
  align-items: flex-start;
  min-width: 1011px;
  background-color: var(--white);
`;

const TheresAPossibilit = styled.div`
  ${LibrebaskervilleNormalBlack30px}
  width: 907px;
  min-height: 475px;
  letter-spacing: 0;
  line-height: 38px;
`;

const TextInfo1 = styled.div`
  ${Border1pxBlack2}
  height: 564px;
  margin-top: 1px;
  margin-left: 1px;
  display: flex;
  padding: 25px 51px;
  align-items: flex-start;
  min-width: 1011px;
  background-color: var(--white);
`;

const TheresAPossibilit1 = styled.div`
  ${LibrebaskervilleNormalBlack30px}
  width: 907px;
  min-height: 475px;
  letter-spacing: 0;
  line-height: 38px;
`;

export default TextInfo3;
