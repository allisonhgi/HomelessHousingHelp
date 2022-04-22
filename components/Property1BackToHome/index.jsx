import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RobotoMediumWhite30px } from "../../styledMixins";


class Property1BackToHome extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <Link to="/home-page-v3">
        <TutorialButtons>
          <BackToHome>{children}</BackToHome>
        </TutorialButtons>
      </Link>
    );
  }
}

const TutorialButtons = styled.div`
  height: 67px;
  margin-top: 28px;
  display: flex;
  padding: 0 11px;
  align-items: center;
  min-width: 211px;
  background-color: var(--summer-green);
  border-radius: 5px;
  box-shadow: 3px 3px 4px #00000026;
  cursor: pointer;
`;

const BackToHome = styled.div`
  ${RobotoMediumWhite30px}
  min-height: 35px;
  min-width: 189px;
  letter-spacing: 0;
`;

export default Property1BackToHome;
