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
          <Vector className="vector-1" src="/img/vector@2x.svg" />
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

  &.home-page-link.home-page-link-1 {
    position: absolute;
    top: 62px;
    left: 949px;
    margin-left: unset;
    margin-bottom: unset;
  }

  &.home-page-link.home-page-link-2 {
    margin-left: 766px;
  }

  &.home-page-link.home-page-link-3 {
    height: 28px;
    margin-bottom: 1.02px;
  }

  &.home-page-link.home-page-link-5 {
    height: 26px;
    margin-bottom: 0.98px;
    padding: 1px 0;
  }

  &.home-page-link.home-page-link-6 {
    margin-left: 766px;
  }

  &.home-page-link.home-page-link-7 {
    margin-left: 766px;
  }

  &.home-page-link.home-page-link-8 {
    margin-left: 766px;
  }

  &.home-page-link.home-page-link-9 {
    margin-left: 766px;
  }

  &.home-page-link.home-page-link-10 {
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

const Vector1 = styled.img`
  .home-page-link.home-page-link-3 & {
    height: 24px;
    margin-bottom: 0.21px;
  }
`;

const HomePage1 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .home-page-link.home-page-link-3  & {
    min-height: 26px;
  }
`;

const Vector2 = styled.img`
  .home-page-link.home-page-link-5 & {
    width: 32px;
    margin-bottom: 0.2px;
  }
`;

const HomePage2 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .home-page-link.home-page-link-5  & {
    min-height: 24px;
    align-self: flex-end;
    margin-left: 6px;
  }
`;

export default HomePageLink;
