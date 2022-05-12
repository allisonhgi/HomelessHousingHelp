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
          <Vector className="vector-1" src="/img/vector-1@2x.svg" />
          <HomePage className="home-page">Home Page</HomePage>
        </HomePageLink1>
      </Link>
    );
  }
}

const HomePageLink1 = styled.div`
  position: absolute;
  height: 26px;
  top: 70px;
  left: 1302px;
  display: flex;
  align-items: flex-start;
  min-width: 191px;
  cursor: pointer;

  &.home-page-link.home-page-link-1 {
    height: 27px;
    margin-left: 765px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.home-page-link.home-page-link-2 {
    top: 74px;
    left: 950px;
  }

  &.home-page-link.home-page-link-3 {
    height: 27px;
    top: 62px;
    left: 949px;
  }

  &.home-page-link.home-page-link-4 {
    height: 27px;
    margin-left: 766px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.home-page-link.home-page-link-5 {
    height: 28px;
    margin-left: 765px;
    margin-bottom: 1.02px;
    padding: 0px 0;
    position: unset;
    top: unset;
    left: unset;
  }

  &.home-page-link.home-page-link-6 {
    height: 27px;
    margin-left: 765px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.home-page-link.home-page-link-7 {
    margin-left: 765px;
    margin-bottom: 0.98px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.home-page-link.home-page-link-8 {
    height: 27px;
    margin-left: 765px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.home-page-link.home-page-link-9 {
    height: 27px;
    margin-left: 765px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.home-page-link.home-page-link-10 {
    height: 27px;
    margin-left: 765px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.home-page-link.home-page-link-11 {
    height: 27px;
    margin-left: 765px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.home-page-link.home-page-link-12 {
    height: 27px;
    margin-left: 765px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.home-page-link.home-page-link-13 {
    height: 27px;
    margin-left: 765px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.home-page-link.home-page-link-14 {
    height: 27px;
    margin-left: 765px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.home-page-link.home-page-link-15 {
    height: 27px;
    margin-left: 765px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.home-page-link.home-page-link-16 {
    height: 27px;
    margin-left: 765px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.home-page-link.home-page-link-17 {
    height: 27px;
    margin-left: 765px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.home-page-link.home-page-link-18 {
    height: 27px;
    margin-left: 766px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.home-page-link.home-page-link-19 {
    height: 27px;
    margin-left: 765px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.home-page-link.home-page-link-20 {
    height: 27px;
    margin-left: 765px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.home-page-link.home-page-link-21 {
    height: 27px;
    margin-left: 765px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.home-page-link.home-page-link-22 {
    height: 27px;
    margin-left: 765px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.home-page-link.home-page-link-23 {
    height: 27px;
    margin-left: 765px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.home-page-link.home-page-link-24 {
    height: 27px;
    margin-left: 765px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.home-page-link.home-page-link-25 {
    height: 27px;
    margin-left: 766px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.home-page-link.home-page-link-26 {
    height: 27px;
    margin-left: 766px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.home-page-link.home-page-link-27 {
    height: 27px;
    margin-left: 766px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.home-page-link.home-page-link-28 {
    height: 27px;
    margin-left: 766px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.home-page-link.home-page-link-29 {
    height: 27px;
    margin-left: 765px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.home-page-link.home-page-link-30 {
    height: 27px;
    margin-left: 765px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.home-page-link.home-page-link-31 {
    height: 27px;
    margin-left: 765px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.home-page-link.home-page-link-32 {
    height: 27px;
    margin-left: 765px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.home-page-link.home-page-link-33 {
    height: 27px;
    margin-left: 765px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.home-page-link.home-page-link-34 {
    height: 27px;
    margin-left: 765px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.home-page-link.home-page-link-35 {
    height: 27px;
    margin-left: 765px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.home-page-link.home-page-link-36 {
    height: 27px;
    margin-left: 765px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.home-page-link.home-page-link-37 {
    height: 27px;
    margin-left: 765px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.home-page-link.home-page-link-38 {
    height: 27px;
    margin-left: 765px;
    margin-bottom: 1px;
    align-items: center;
    position: unset;
    top: unset;
    left: unset;
  }
`;

const Vector = styled.img`
  width: 32px;
  height: 23px;
  margin-left: -3px;
  align-self: center;
  margin-bottom: 1.2px;
`;

const HomePage = styled.div`
  ${RobotoNormalSummerGreen25px}
  width: 142px;
  min-height: 24px;
  margin-left: 6px;
  margin-top: -0.02px;
  letter-spacing: 0;
`;

const Vector1 = styled.img`
  .home-page-link.home-page-link-1 & {
    width: 31px;
    margin-bottom: 0.68px;
  }
`;

const HomePage1 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .home-page-link.home-page-link-1  & {
    min-height: 25px;
    margin-left: 7px;
    margin-top: unset;
  }
`;

const Vector2 = styled.img`
  .home-page-link.home-page-link-3 & {
    width: 31px;
    margin-bottom: 0.68px;
  }
`;

const HomePage2 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .home-page-link.home-page-link-3  & {
    min-height: 25px;
    margin-left: 7px;
    margin-top: unset;
  }
`;

const Vector3 = styled.img`
  .home-page-link.home-page-link-4 & {
    width: 31px;
    margin-bottom: 0.68px;
  }
`;

const HomePage3 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .home-page-link.home-page-link-4  & {
    min-height: 25px;
    margin-left: 7px;
    margin-top: unset;
  }
`;

const Vector4 = styled.img`
  .home-page-link.home-page-link-5 & {
    width: 31px;
    height: 24px;
    margin-bottom: 0.21px;
  }
`;

const HomePage4 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .home-page-link.home-page-link-5  & {
    min-height: 26px;
    margin-left: 7px;
    margin-top: unset;
  }
`;

const Vector5 = styled.img`
  .home-page-link.home-page-link-6 & {
    width: 31px;
    margin-bottom: 0.68px;
  }
`;

const HomePage5 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .home-page-link.home-page-link-6  & {
    min-height: 25px;
    margin-left: 7px;
    margin-top: unset;
  }
`;

const Vector6 = styled.img`
  .home-page-link.home-page-link-7 & {
    margin-bottom: 0.2px;
  }
`;

const Vector7 = styled.img`
  .home-page-link.home-page-link-8 & {
    width: 31px;
    margin-bottom: 0.68px;
  }
`;

const HomePage6 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .home-page-link.home-page-link-8  & {
    min-height: 25px;
    margin-left: 7px;
    margin-top: unset;
  }
`;

const Vector8 = styled.img`
  .home-page-link.home-page-link-9 & {
    width: 31px;
    margin-bottom: 0.68px;
  }
`;

const HomePage7 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .home-page-link.home-page-link-9  & {
    min-height: 25px;
    margin-left: 7px;
    margin-top: unset;
  }
`;

const Vector9 = styled.img`
  .home-page-link.home-page-link-10 & {
    width: 31px;
    margin-bottom: 0.68px;
  }
`;

const HomePage8 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .home-page-link.home-page-link-10  & {
    min-height: 25px;
    margin-left: 7px;
    margin-top: unset;
  }
`;

const Vector10 = styled.img`
  .home-page-link.home-page-link-11 & {
    width: 31px;
    margin-bottom: 0.68px;
  }
`;

const HomePage9 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .home-page-link.home-page-link-11  & {
    min-height: 25px;
    margin-left: 7px;
    margin-top: unset;
  }
`;

const Vector11 = styled.img`
  .home-page-link.home-page-link-12 & {
    width: 31px;
    margin-bottom: 0.68px;
  }
`;

const HomePage10 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .home-page-link.home-page-link-12  & {
    min-height: 25px;
    margin-left: 7px;
    margin-top: unset;
  }
`;

const Vector12 = styled.img`
  .home-page-link.home-page-link-13 & {
    width: 31px;
    margin-bottom: 0.68px;
  }
`;

const HomePage11 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .home-page-link.home-page-link-13  & {
    min-height: 25px;
    margin-left: 7px;
    margin-top: unset;
  }
`;

const Vector13 = styled.img`
  .home-page-link.home-page-link-14 & {
    width: 31px;
    margin-bottom: 0.68px;
  }
`;

const HomePage12 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .home-page-link.home-page-link-14  & {
    min-height: 25px;
    margin-left: 7px;
    margin-top: unset;
  }
`;

const Vector14 = styled.img`
  .home-page-link.home-page-link-15 & {
    width: 31px;
    margin-bottom: 0.68px;
  }
`;

const HomePage13 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .home-page-link.home-page-link-15  & {
    min-height: 25px;
    margin-left: 7px;
    margin-top: unset;
  }
`;

const Vector15 = styled.img`
  .home-page-link.home-page-link-16 & {
    width: 31px;
    margin-bottom: 0.68px;
  }
`;

const HomePage14 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .home-page-link.home-page-link-16  & {
    min-height: 25px;
    margin-left: 7px;
    margin-top: unset;
  }
`;

const Vector16 = styled.img`
  .home-page-link.home-page-link-17 & {
    width: 31px;
    margin-bottom: 0.68px;
  }
`;

const HomePage15 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .home-page-link.home-page-link-17  & {
    min-height: 25px;
    margin-left: 7px;
    margin-top: unset;
  }
`;

const Vector17 = styled.img`
  .home-page-link.home-page-link-18 & {
    width: 31px;
    margin-bottom: 0.68px;
  }
`;

const HomePage16 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .home-page-link.home-page-link-18  & {
    min-height: 25px;
    margin-left: 7px;
    margin-top: unset;
  }
`;

const Vector18 = styled.img`
  .home-page-link.home-page-link-19 & {
    width: 31px;
    margin-bottom: 0.68px;
  }
`;

const HomePage17 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .home-page-link.home-page-link-19  & {
    min-height: 25px;
    margin-left: 7px;
    margin-top: unset;
  }
`;

const Vector19 = styled.img`
  .home-page-link.home-page-link-20 & {
    width: 31px;
    margin-bottom: 0.68px;
  }
`;

const HomePage18 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .home-page-link.home-page-link-20  & {
    min-height: 25px;
    margin-left: 7px;
    margin-top: unset;
  }
`;

const Vector20 = styled.img`
  .home-page-link.home-page-link-21 & {
    width: 31px;
    margin-bottom: 0.68px;
  }
`;

const HomePage19 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .home-page-link.home-page-link-21  & {
    min-height: 25px;
    margin-left: 7px;
    margin-top: unset;
  }
`;

const Vector21 = styled.img`
  .home-page-link.home-page-link-22 & {
    width: 31px;
    margin-bottom: 0.68px;
  }
`;

const HomePage20 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .home-page-link.home-page-link-22  & {
    min-height: 25px;
    margin-left: 7px;
    margin-top: unset;
  }
`;

const Vector22 = styled.img`
  .home-page-link.home-page-link-23 & {
    width: 31px;
    margin-bottom: 0.68px;
  }
`;

const HomePage21 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .home-page-link.home-page-link-23  & {
    min-height: 25px;
    margin-left: 7px;
    margin-top: unset;
  }
`;

const Vector23 = styled.img`
  .home-page-link.home-page-link-24 & {
    width: 31px;
    margin-bottom: 0.68px;
  }
`;

const HomePage22 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .home-page-link.home-page-link-24  & {
    min-height: 25px;
    margin-left: 7px;
    margin-top: unset;
  }
`;

const Vector24 = styled.img`
  .home-page-link.home-page-link-25 & {
    width: 31px;
    margin-bottom: 0.68px;
  }
`;

const HomePage23 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .home-page-link.home-page-link-25  & {
    min-height: 25px;
    margin-left: 7px;
    margin-top: unset;
  }
`;

const Vector25 = styled.img`
  .home-page-link.home-page-link-26 & {
    width: 31px;
    margin-bottom: 0.68px;
  }
`;

const HomePage24 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .home-page-link.home-page-link-26  & {
    min-height: 25px;
    margin-left: 7px;
    margin-top: unset;
  }
`;

const Vector26 = styled.img`
  .home-page-link.home-page-link-27 & {
    width: 31px;
    margin-bottom: 0.68px;
  }
`;

const HomePage25 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .home-page-link.home-page-link-27  & {
    min-height: 25px;
    margin-left: 7px;
    margin-top: unset;
  }
`;

const Vector27 = styled.img`
  .home-page-link.home-page-link-28 & {
    width: 31px;
    margin-bottom: 0.68px;
  }
`;

const HomePage26 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .home-page-link.home-page-link-28  & {
    min-height: 25px;
    margin-left: 7px;
    margin-top: unset;
  }
`;

const Vector28 = styled.img`
  .home-page-link.home-page-link-29 & {
    width: 31px;
    margin-bottom: 0.68px;
  }
`;

const HomePage27 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .home-page-link.home-page-link-29  & {
    min-height: 25px;
    margin-left: 7px;
    margin-top: unset;
  }
`;

const Vector29 = styled.img`
  .home-page-link.home-page-link-30 & {
    width: 31px;
    margin-bottom: 0.68px;
  }
`;

const HomePage28 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .home-page-link.home-page-link-30  & {
    min-height: 25px;
    margin-left: 7px;
    margin-top: unset;
  }
`;

const Vector30 = styled.img`
  .home-page-link.home-page-link-31 & {
    width: 31px;
    margin-bottom: 0.68px;
  }
`;

const HomePage29 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .home-page-link.home-page-link-31  & {
    min-height: 25px;
    margin-left: 7px;
    margin-top: unset;
  }
`;

const Vector31 = styled.img`
  .home-page-link.home-page-link-32 & {
    width: 31px;
    margin-bottom: 0.68px;
  }
`;

const HomePage30 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .home-page-link.home-page-link-32  & {
    min-height: 25px;
    margin-left: 7px;
    margin-top: unset;
  }
`;

const Vector32 = styled.img`
  .home-page-link.home-page-link-33 & {
    width: 31px;
    margin-bottom: 0.68px;
  }
`;

const HomePage31 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .home-page-link.home-page-link-33  & {
    min-height: 25px;
    margin-left: 7px;
    margin-top: unset;
  }
`;

const Vector33 = styled.img`
  .home-page-link.home-page-link-34 & {
    width: 31px;
    margin-bottom: 0.68px;
  }
`;

const HomePage32 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .home-page-link.home-page-link-34  & {
    min-height: 25px;
    margin-left: 7px;
    margin-top: unset;
  }
`;

const Vector34 = styled.img`
  .home-page-link.home-page-link-35 & {
    width: 31px;
    margin-bottom: 0.68px;
  }
`;

const HomePage33 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .home-page-link.home-page-link-35  & {
    min-height: 25px;
    margin-left: 7px;
    margin-top: unset;
  }
`;

const Vector35 = styled.img`
  .home-page-link.home-page-link-36 & {
    width: 31px;
    margin-bottom: 0.68px;
  }
`;

const HomePage34 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .home-page-link.home-page-link-36  & {
    min-height: 25px;
    margin-left: 7px;
    margin-top: unset;
  }
`;

const Vector36 = styled.img`
  .home-page-link.home-page-link-37 & {
    width: 31px;
    margin-bottom: 0.68px;
  }
`;

const HomePage35 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .home-page-link.home-page-link-37  & {
    min-height: 25px;
    margin-left: 7px;
    margin-top: unset;
  }
`;

const Vector37 = styled.img`
  .home-page-link.home-page-link-38 & {
    width: 31px;
    margin-bottom: 0.68px;
    align-self: unset;
  }
`;

const HomePage36 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .home-page-link.home-page-link-38  & {
    min-height: 25px;
    margin-left: 7px;
    margin-top: unset;
  }
`;

export default HomePageLink;
