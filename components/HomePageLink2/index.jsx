import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RobotoNormalSummerGreen25px } from "../../styledMixins";


class HomePageLink2 extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <HomePageLink>
        <Link to="/landing-page">
          <HomePage>{children}</HomePage>
        </Link>
      </HomePageLink>
    );
  }
}

const HomePageLink = styled.div`
  height: 27px;
  margin-left: 766px;
  margin-bottom: 1px;
  display: flex;
  padding: 0 14px;
  justify-content: flex-end;
  align-items: center;
  min-width: 191px;
`;

const HomePage = styled.div`
  ${RobotoNormalSummerGreen25px}
  width: 142px;
  min-height: 25px;
  text-align: center;
  letter-spacing: 0;
  cursor: pointer;
`;

export default HomePageLink2;
