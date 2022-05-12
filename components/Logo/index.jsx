import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RobotoMediumSummerGreen436px } from "../../styledMixins";


class Logo extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <Link to="/home-page-v3">
        <Logo1 className={`logo ${className || ""}`}>
          <OverlapGroup className="overlap-group">
            <Vector className="vector" src="/img/vector@2x.svg" />
            <HVH className="hvh">HVH</HVH>
          </OverlapGroup>
        </Logo1>
      </Link>
    );
  }
}

const Logo1 = styled.div`
  position: absolute;
  height: 73px;
  top: 46px;
  left: 439px;
  display: flex;
  align-items: flex-start;
  min-width: 93px;
  cursor: pointer;

  &.logo.logo-1 {
    height: 75px;
    align-self: flex-start;
    position: unset;
    top: unset;
    left: unset;
  }

  &.logo.logo-2 {
    top: 39px;
    left: 90px;
  }

  &.logo.logo-3 {
    height: 75px;
    align-self: flex-start;
    position: unset;
    top: unset;
    left: unset;
    cursor: unset;
  }

  &.logo.logo-4 {
    height: 75px;
    top: 38px;
    left: 91px;
  }

  &.logo.logo-5 {
    height: 75px;
    align-self: flex-start;
    position: unset;
    top: unset;
    left: unset;
  }

  &.logo.logo-6 {
    height: 77px;
    align-self: flex-start;
    position: unset;
    top: unset;
    left: unset;
  }

  &.logo.logo-7 {
    height: 75px;
    align-self: flex-start;
    position: unset;
    top: unset;
    left: unset;
  }

  &.logo.logo-8 {
    align-self: flex-start;
    position: unset;
    top: unset;
    left: unset;
  }

  &.logo.logo-9 {
    height: 75px;
    align-self: flex-start;
    position: unset;
    top: unset;
    left: unset;
  }

  &.logo.logo-10 {
    height: 75px;
    align-self: flex-start;
    position: unset;
    top: unset;
    left: unset;
  }

  &.logo.logo-11 {
    height: 75px;
    align-self: flex-start;
    position: unset;
    top: unset;
    left: unset;
  }

  &.logo.logo-12 {
    height: 75px;
    align-self: flex-start;
    position: unset;
    top: unset;
    left: unset;
  }

  &.logo.logo-13 {
    height: 75px;
    align-self: flex-start;
    position: unset;
    top: unset;
    left: unset;
  }

  &.logo.logo-14 {
    height: 75px;
    align-self: flex-start;
    position: unset;
    top: unset;
    left: unset;
  }

  &.logo.logo-15 {
    height: 75px;
    align-self: flex-start;
    position: unset;
    top: unset;
    left: unset;
  }

  &.logo.logo-16 {
    height: 75px;
    align-self: flex-start;
    position: unset;
    top: unset;
    left: unset;
  }

  &.logo.logo-17 {
    height: 75px;
    align-self: flex-start;
    position: unset;
    top: unset;
    left: unset;
  }

  &.logo.logo-18 {
    height: 75px;
    align-self: flex-start;
    position: unset;
    top: unset;
    left: unset;
  }

  &.logo.logo-19 {
    height: 75px;
    align-self: flex-start;
    position: unset;
    top: unset;
    left: unset;
  }

  &.logo.logo-20 {
    height: 75px;
    align-self: flex-start;
    position: unset;
    top: unset;
    left: unset;
  }

  &.logo.logo-21 {
    height: 75px;
    align-self: flex-start;
    position: unset;
    top: unset;
    left: unset;
  }

  &.logo.logo-22 {
    height: 75px;
    align-self: flex-start;
    position: unset;
    top: unset;
    left: unset;
  }

  &.logo.logo-23 {
    height: 75px;
    align-self: flex-start;
    position: unset;
    top: unset;
    left: unset;
  }

  &.logo.logo-24 {
    height: 75px;
    align-self: flex-start;
    position: unset;
    top: unset;
    left: unset;
  }

  &.logo.logo-25 {
    height: 75px;
    align-self: flex-start;
    position: unset;
    top: unset;
    left: unset;
  }

  &.logo.logo-26 {
    height: 75px;
    align-self: flex-start;
    position: unset;
    top: unset;
    left: unset;
  }

  &.logo.logo-27 {
    height: 75px;
    align-self: flex-start;
    position: unset;
    top: unset;
    left: unset;
  }

  &.logo.logo-28 {
    height: 75px;
    align-self: flex-start;
    position: unset;
    top: unset;
    left: unset;
  }

  &.logo.logo-29 {
    height: 75px;
    align-self: flex-start;
    position: unset;
    top: unset;
    left: unset;
  }

  &.logo.logo-30 {
    height: 75px;
    align-self: flex-start;
    position: unset;
    top: unset;
    left: unset;
  }

  &.logo.logo-31 {
    height: 75px;
    align-self: flex-start;
    position: unset;
    top: unset;
    left: unset;
  }

  &.logo.logo-32 {
    height: 75px;
    align-self: flex-start;
    position: unset;
    top: unset;
    left: unset;
  }

  &.logo.logo-33 {
    height: 75px;
    align-self: flex-start;
    position: unset;
    top: unset;
    left: unset;
  }

  &.logo.logo-34 {
    height: 75px;
    align-self: flex-start;
    position: unset;
    top: unset;
    left: unset;
  }

  &.logo.logo-35 {
    height: 75px;
    align-self: flex-start;
    position: unset;
    top: unset;
    left: unset;
  }

  &.logo.logo-36 {
    height: 75px;
    align-self: flex-start;
    position: unset;
    top: unset;
    left: unset;
  }

  &.logo.logo-37 {
    height: 75px;
    align-self: flex-start;
    position: unset;
    top: unset;
    left: unset;
  }

  &.logo.logo-38 {
    height: 75px;
    align-self: flex-start;
    position: unset;
    top: unset;
    left: unset;
  }

  &.logo.logo-39 {
    height: 75px;
    align-self: flex-start;
    position: unset;
    top: unset;
    left: unset;
  }
`;

const OverlapGroup = styled.div`
  width: 93px;
  height: 75px;
  position: relative;
  margin-top: -2.7px;
`;

const Vector = styled.img`
  position: absolute;
  width: 54px;
  height: 41px;
  top: 0;
  left: 19px;
`;

const HVH = styled.div`
  ${RobotoMediumSummerGreen436px}
  position: absolute;
  width: 93px;
  top: 38px;
  left: 0;
  letter-spacing: 0;
`;

const OverlapGroup1 = styled.div`
  .logo.logo-1 & {
    height: 77px;
    margin-top: -2.75px;
  }
`;

const Vector1 = styled.img`
  .logo.logo-1 & {
    height: 42px;
  }
`;

const HVH1 = styled.div`
  ${RobotoMediumSummerGreen436px}

  .logo.logo-1  & {
    top: 39px;
  }
`;

const OverlapGroup2 = styled.div`
  .logo.logo-3 & {
    height: 77px;
    margin-top: -2.75px;
  }
`;

const Vector2 = styled.img`
  .logo.logo-3 & {
    height: 42px;
  }
`;

const HVH2 = styled.div`
  ${RobotoMediumSummerGreen436px}

  .logo.logo-3  & {
    top: 39px;
  }
`;

const OverlapGroup11 = styled.div`
  .logo.logo-4 & {
    height: 77px;
    margin-top: -2.75px;
  }
`;

const Vector3 = styled.img`
  .logo.logo-4 & {
    height: 42px;
  }
`;

const HVH3 = styled.div`
  ${RobotoMediumSummerGreen436px}

  .logo.logo-4  & {
    top: 39px;
  }
`;

const OverlapGroup3 = styled.div`
  .logo.logo-5 & {
    height: 77px;
    margin-top: -2.75px;
  }
`;

const Vector4 = styled.img`
  .logo.logo-5 & {
    height: 42px;
  }
`;

const HVH4 = styled.div`
  ${RobotoMediumSummerGreen436px}

  .logo.logo-5  & {
    top: 39px;
  }
`;

const OverlapGroup31 = styled.div`
  .logo.logo-6 & {
    height: 78px;
    margin-top: -2.33px;
  }
`;

const IconHome = styled.img`
  .logo.logo-6 & {
    width: 53px;
    height: 42px;
  }
`;

const HVH5 = styled.div`
  ${RobotoMediumSummerGreen436px}

  .logo.logo-6  & {
    top: 40px;
  }
`;

const OverlapGroup12 = styled.div`
  .logo.logo-7 & {
    height: 77px;
    margin-top: -2.75px;
  }
`;

const Vector5 = styled.img`
  .logo.logo-7 & {
    height: 42px;
  }
`;

const HVH6 = styled.div`
  ${RobotoMediumSummerGreen436px}

  .logo.logo-7  & {
    top: 39px;
  }
`;

const OverlapGroup4 = styled.div`
  .logo.logo-9 & {
    height: 77px;
    margin-top: -2.75px;
  }
`;

const Vector6 = styled.img`
  .logo.logo-9 & {
    height: 42px;
  }
`;

const HVH7 = styled.div`
  ${RobotoMediumSummerGreen436px}

  .logo.logo-9  & {
    top: 39px;
  }
`;

const OverlapGroup32 = styled.div`
  .logo.logo-10 & {
    height: 77px;
    margin-top: -2.75px;
  }
`;

const Vector7 = styled.img`
  .logo.logo-10 & {
    height: 42px;
  }
`;

const HVH8 = styled.div`
  ${RobotoMediumSummerGreen436px}

  .logo.logo-10  & {
    top: 39px;
  }
`;

const OverlapGroup21 = styled.div`
  .logo.logo-11 & {
    height: 77px;
    margin-top: -2.75px;
  }
`;

const Vector8 = styled.img`
  .logo.logo-11 & {
    height: 42px;
  }
`;

const HVH9 = styled.div`
  ${RobotoMediumSummerGreen436px}

  .logo.logo-11  & {
    top: 39px;
  }
`;

const OverlapGroup33 = styled.div`
  .logo.logo-12 & {
    height: 77px;
    margin-top: -2.75px;
  }
`;

const Vector9 = styled.img`
  .logo.logo-12 & {
    height: 42px;
  }
`;

const HVH10 = styled.div`
  ${RobotoMediumSummerGreen436px}

  .logo.logo-12  & {
    top: 39px;
  }
`;

const OverlapGroup34 = styled.div`
  .logo.logo-13 & {
    height: 77px;
    margin-top: -2.75px;
  }
`;

const Vector10 = styled.img`
  .logo.logo-13 & {
    height: 42px;
  }
`;

const HVH11 = styled.div`
  ${RobotoMediumSummerGreen436px}

  .logo.logo-13  & {
    top: 39px;
  }
`;

const OverlapGroup6 = styled.div`
  .logo.logo-14 & {
    height: 77px;
    margin-top: -2.75px;
  }
`;

const Vector11 = styled.img`
  .logo.logo-14 & {
    height: 42px;
  }
`;

const HVH12 = styled.div`
  ${RobotoMediumSummerGreen436px}

  .logo.logo-14  & {
    top: 39px;
  }
`;

const OverlapGroup61 = styled.div`
  .logo.logo-15 & {
    height: 77px;
    margin-top: -2.75px;
  }
`;

const Vector12 = styled.img`
  .logo.logo-15 & {
    height: 42px;
  }
`;

const HVH13 = styled.div`
  ${RobotoMediumSummerGreen436px}

  .logo.logo-15  & {
    top: 39px;
  }
`;

const OverlapGroup41 = styled.div`
  .logo.logo-16 & {
    height: 77px;
    margin-top: -2.75px;
  }
`;

const Vector13 = styled.img`
  .logo.logo-16 & {
    height: 42px;
  }
`;

const HVH14 = styled.div`
  ${RobotoMediumSummerGreen436px}

  .logo.logo-16  & {
    top: 39px;
  }
`;

const OverlapGroup5 = styled.div`
  .logo.logo-17 & {
    height: 77px;
    margin-top: -2.75px;
  }
`;

const Vector14 = styled.img`
  .logo.logo-17 & {
    height: 42px;
  }
`;

const HVH15 = styled.div`
  ${RobotoMediumSummerGreen436px}

  .logo.logo-17  & {
    top: 39px;
  }
`;

const OverlapGroup13 = styled.div`
  .logo.logo-18 & {
    height: 77px;
    margin-top: -2.75px;
  }
`;

const Vector15 = styled.img`
  .logo.logo-18 & {
    height: 42px;
  }
`;

const HVH16 = styled.div`
  ${RobotoMediumSummerGreen436px}

  .logo.logo-18  & {
    top: 39px;
  }
`;

const OverlapGroup7 = styled.div`
  .logo.logo-19 & {
    height: 77px;
    margin-top: -2.75px;
  }
`;

const Vector16 = styled.img`
  .logo.logo-19 & {
    height: 42px;
  }
`;

const HVH17 = styled.div`
  ${RobotoMediumSummerGreen436px}

  .logo.logo-19  & {
    top: 39px;
  }
`;

const OverlapGroup51 = styled.div`
  .logo.logo-20 & {
    height: 77px;
    margin-top: -2.75px;
  }
`;

const Vector17 = styled.img`
  .logo.logo-20 & {
    height: 42px;
  }
`;

const HVH18 = styled.div`
  ${RobotoMediumSummerGreen436px}

  .logo.logo-20  & {
    top: 39px;
  }
`;

const OverlapGroup8 = styled.div`
  .logo.logo-21 & {
    height: 77px;
    margin-top: -2.75px;
  }
`;

const Vector18 = styled.img`
  .logo.logo-21 & {
    height: 42px;
  }
`;

const HVH19 = styled.div`
  ${RobotoMediumSummerGreen436px}

  .logo.logo-21  & {
    top: 39px;
  }
`;

const OverlapGroup9 = styled.div`
  .logo.logo-22 & {
    height: 77px;
    margin-top: -2.75px;
  }
`;

const Vector19 = styled.img`
  .logo.logo-22 & {
    height: 42px;
  }
`;

const HVH20 = styled.div`
  ${RobotoMediumSummerGreen436px}

  .logo.logo-22  & {
    top: 39px;
  }
`;

const OverlapGroup10 = styled.div`
  .logo.logo-23 & {
    height: 77px;
    margin-top: -2.75px;
  }
`;

const Vector20 = styled.img`
  .logo.logo-23 & {
    height: 42px;
  }
`;

const HVH21 = styled.div`
  ${RobotoMediumSummerGreen436px}

  .logo.logo-23  & {
    top: 39px;
  }
`;

const OverlapGroup42 = styled.div`
  .logo.logo-24 & {
    height: 77px;
    margin-top: -2.75px;
  }
`;

const Vector21 = styled.img`
  .logo.logo-24 & {
    height: 42px;
  }
`;

const HVH22 = styled.div`
  ${RobotoMediumSummerGreen436px}

  .logo.logo-24  & {
    top: 39px;
  }
`;

const OverlapGroup14 = styled.div`
  .logo.logo-25 & {
    height: 77px;
    margin-top: -2.75px;
  }
`;

const Vector22 = styled.img`
  .logo.logo-25 & {
    height: 42px;
  }
`;

const HVH23 = styled.div`
  ${RobotoMediumSummerGreen436px}

  .logo.logo-25  & {
    top: 39px;
  }
`;

const OverlapGroup15 = styled.div`
  .logo.logo-26 & {
    height: 77px;
    margin-top: -2.75px;
  }
`;

const Vector23 = styled.img`
  .logo.logo-26 & {
    height: 42px;
  }
`;

const HVH24 = styled.div`
  ${RobotoMediumSummerGreen436px}

  .logo.logo-26  & {
    top: 39px;
  }
`;

const OverlapGroup16 = styled.div`
  .logo.logo-27 & {
    height: 77px;
    margin-top: -2.75px;
  }
`;

const Vector24 = styled.img`
  .logo.logo-27 & {
    height: 42px;
  }
`;

const HVH25 = styled.div`
  ${RobotoMediumSummerGreen436px}

  .logo.logo-27  & {
    top: 39px;
  }
`;

const OverlapGroup17 = styled.div`
  .logo.logo-28 & {
    height: 77px;
    margin-top: -2.75px;
  }
`;

const Vector25 = styled.img`
  .logo.logo-28 & {
    height: 42px;
  }
`;

const HVH26 = styled.div`
  ${RobotoMediumSummerGreen436px}

  .logo.logo-28  & {
    top: 39px;
  }
`;

const OverlapGroup18 = styled.div`
  .logo.logo-29 & {
    height: 77px;
    margin-top: -2.75px;
  }
`;

const Vector26 = styled.img`
  .logo.logo-29 & {
    height: 42px;
  }
`;

const HVH27 = styled.div`
  ${RobotoMediumSummerGreen436px}

  .logo.logo-29  & {
    top: 39px;
  }
`;

const OverlapGroup19 = styled.div`
  .logo.logo-30 & {
    height: 77px;
    margin-top: -2.75px;
  }
`;

const Vector27 = styled.img`
  .logo.logo-30 & {
    height: 42px;
  }
`;

const HVH28 = styled.div`
  ${RobotoMediumSummerGreen436px}

  .logo.logo-30  & {
    top: 39px;
  }
`;

const OverlapGroup20 = styled.div`
  .logo.logo-31 & {
    height: 77px;
    margin-top: -2.75px;
  }
`;

const Vector28 = styled.img`
  .logo.logo-31 & {
    height: 42px;
  }
`;

const HVH29 = styled.div`
  ${RobotoMediumSummerGreen436px}

  .logo.logo-31  & {
    top: 39px;
  }
`;

const OverlapGroup22 = styled.div`
  .logo.logo-32 & {
    height: 77px;
    margin-top: -2.75px;
  }
`;

const Vector29 = styled.img`
  .logo.logo-32 & {
    height: 42px;
  }
`;

const HVH30 = styled.div`
  ${RobotoMediumSummerGreen436px}

  .logo.logo-32  & {
    top: 39px;
  }
`;

const OverlapGroup110 = styled.div`
  .logo.logo-33 & {
    height: 77px;
    margin-top: -2.75px;
  }
`;

const Vector30 = styled.img`
  .logo.logo-33 & {
    height: 42px;
  }
`;

const HVH31 = styled.div`
  ${RobotoMediumSummerGreen436px}

  .logo.logo-33  & {
    top: 39px;
  }
`;

const OverlapGroup23 = styled.div`
  .logo.logo-34 & {
    height: 77px;
    margin-top: -2.75px;
  }
`;

const Vector31 = styled.img`
  .logo.logo-34 & {
    height: 42px;
  }
`;

const HVH32 = styled.div`
  ${RobotoMediumSummerGreen436px}

  .logo.logo-34  & {
    top: 39px;
  }
`;

const OverlapGroup24 = styled.div`
  .logo.logo-35 & {
    height: 77px;
    margin-top: -2.75px;
  }
`;

const Vector32 = styled.img`
  .logo.logo-35 & {
    height: 42px;
  }
`;

const HVH33 = styled.div`
  ${RobotoMediumSummerGreen436px}

  .logo.logo-35  & {
    top: 39px;
  }
`;

const OverlapGroup25 = styled.div`
  .logo.logo-36 & {
    height: 77px;
    margin-top: -2.75px;
  }
`;

const Vector33 = styled.img`
  .logo.logo-36 & {
    height: 42px;
  }
`;

const HVH34 = styled.div`
  ${RobotoMediumSummerGreen436px}

  .logo.logo-36  & {
    top: 39px;
  }
`;

const OverlapGroup26 = styled.div`
  .logo.logo-37 & {
    height: 77px;
    margin-top: -2.75px;
  }
`;

const Vector34 = styled.img`
  .logo.logo-37 & {
    height: 42px;
  }
`;

const HVH35 = styled.div`
  ${RobotoMediumSummerGreen436px}

  .logo.logo-37  & {
    top: 39px;
  }
`;

const OverlapGroup27 = styled.div`
  .logo.logo-38 & {
    height: 77px;
    margin-top: -2.75px;
  }
`;

const Vector35 = styled.img`
  .logo.logo-38 & {
    height: 42px;
  }
`;

const HVH36 = styled.div`
  ${RobotoMediumSummerGreen436px}

  .logo.logo-38  & {
    top: 39px;
  }
`;

const OverlapGroup111 = styled.div`
  .logo.logo-39 & {
    height: 78px;
    margin-top: -2.75px;
  }
`;

const Vector36 = styled.img`
  .logo.logo-39 & {
    height: 42px;
  }
`;

const HVH37 = styled.div`
  ${RobotoMediumSummerGreen436px}

  .logo.logo-39  & {
    top: 40px;
  }
`;

export default Logo;
