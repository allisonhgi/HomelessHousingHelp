import React from "react";
import styled from "styled-components";
import { RobotoMediumWhite30px } from "../../styledMixins";


class Property1PhonePopUpDefault extends React.Component {
  render() {
    const { wouldYouLikeToGe, email, text } = this.props;

    return (
      <PhonePopUpV2>
        <WouldYouLikeToGe>{wouldYouLikeToGe}</WouldYouLikeToGe>
        <OverlapGroupContainer>
          <OverlapGroup3>
            <Email>{email}</Email>
          </OverlapGroup3>
          <OverlapGroup2>
            <Email>{text}</Email>
          </OverlapGroup2>
        </OverlapGroupContainer>
      </PhonePopUpV2>
    );
  }
}

const PhonePopUpV2 = styled.div`
  position: absolute;
  width: 651px;
  top: 478px;
  left: 394px;
  display: flex;
  flex-direction: column;
  padding: 23.1px 55px;
  align-items: flex-end;
  min-height: 245px;
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

const OverlapGroupContainer = styled.div`
  align-self: center;
  margin-top: 38px;
  margin-left: 1px;
  display: flex;
  align-items: flex-start;
  min-width: 516px;
`;

const OverlapGroup3 = styled.div`
  height: 67px;
  display: flex;
  padding: 14.8px 6px;
  align-items: flex-start;
  min-width: 238px;
  background-color: var(--amazon);
  border-radius: 8px;
  box-shadow: 3px 3px 4px #00000026;
`;

const Email = styled.div`
  ${RobotoMediumWhite30px}
  width: 225px;
  min-height: 27px;
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup2 = styled.div`
  height: 67px;
  margin-left: 40px;
  display: flex;
  padding: 14.8px 6px;
  align-items: flex-start;
  min-width: 238px;
  background-color: var(--amazon);
  border-radius: 8px;
  box-shadow: 3px 3px 4px #00000026;
`;

export default Property1PhonePopUpDefault;
