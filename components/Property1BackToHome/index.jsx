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
  display: flex;
  margin-top: 28px;
  align-items: flex-start;
  gap: 10px;
  padding-top: 16px;
  padding-right: 11px;
  padding-bottom: 16px;
  padding-left: 11px;
  background-color: var(--summer-green);
  border-radius: 5px;
  box-shadow: 3px 3px 4px #00000026;
  cursor: pointer;
`;

const BackToHome = styled.div`
  ${RobotoMediumWhite30px}
  letter-spacing: 0;
`;

export default Property1BackToHome;
