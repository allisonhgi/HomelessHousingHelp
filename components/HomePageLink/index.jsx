import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RobotoNormalSummerGreen25px } from "../../styledMixins";


class HomePageLink extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <Link to="/home-page-v3">
        <HomePageLink1 className={`home-page-link ${className || ""}`}>
          <Vector className="vector-1" src="/img/vector-2@2x.svg" />
          <HomePage className="home-page">Home Page</HomePage>
        </HomePageLink1>
      </Link>
    );
  }
}

const HomePageLink1 = styled.div`
  height: 27px;
  margin-left: 765px;
  margin-bottom: 1px;
  display: flex;
  align-items: center;
  min-width: 191px;
  cursor: pointer;

  &.home-page-link.home-page-link-2 {
    position: absolute;
    top: 62px;
    left: 949px;
    margin-left: unset;
    margin-bottom: unset;
  }

  &.home-page-link.home-page-link-3 {
    margin-left: 785px;
  }

  &.home-page-link.home-page-link-4 {
    margin-left: 769px;
  }

  &.home-page-link.home-page-link-5 {
    margin-left: 780px;
  }

  &.home-page-link.home-page-link-6 {
    margin-left: 766px;
  }
`;

const Vector = styled.img`
  width: 31px;
  height: 23px;
  margin-left: -3px;
  margin-bottom: 0.68px;
`;

const HomePage = styled.div`
  ${RobotoNormalSummerGreen25px}
  width: 142px;
  min-height: 25px;
  margin-left: 7px;
  letter-spacing: 0;
`;

export default HomePageLink;
