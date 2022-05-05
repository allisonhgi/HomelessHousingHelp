import React from "react";
import styled from "styled-components";


class Property1PhonePopUpDefault extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <PhonePopUpV2>
        <WouldYouLikeToGe>{children}</WouldYouLikeToGe>
      </PhonePopUpV2>
    );
  }
}

const PhonePopUpV2 = styled.div`
  position: absolute;
  height: 245px;
  top: 478px;
  left: 394px;
  display: flex;
  padding: 23.1px 55px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 651px;
  background-color: var(--white);
  border-radius: 5px;
  border: 1px solid #0000001f;
  box-shadow: 3px 3px 4px #00000040;
`;

const WouldYouLikeToGe = styled.div`
  width: 529px;
  min-height: 75px;
  font-family: var(--font-family-roboto);
  font-weight: 500;
  color: var(--black);
  font-size: 38px;
  letter-spacing: 0;
`;

export default Property1PhonePopUpDefault;
