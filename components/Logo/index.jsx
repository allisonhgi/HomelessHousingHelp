import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RobotoMediumSummerGreen436px } from "../../styledMixins";


class Logo extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <Link to="/home-page-v3" className="align-self-flex-start">
        <Logo1 className={`logo ${className || ""}`}>
          <OverlapGroup className="overlap-group-1">
            <Vector className="vector" src="/img/vector-1@2x.svg" />
            <HVH className="hvh">HVH</HVH>
          </OverlapGroup>
        </Logo1>
      </Link>
    );
  }
}

const Logo1 = styled.div`
  height: 75px;
  align-self: flex-start;
  display: flex;
  align-items: flex-start;
  min-width: 93px;
  cursor: pointer;

  &.logo.logo-1 {
    cursor: unset;
  }

  &.logo.logo-2 {
    position: absolute;
    top: 38px;
    left: 91px;
    align-self: unset;
  }

  &.logo.logo-4 {
    height: 77px;
  }

  &.logo.logo-5 {
    height: 73px;
  }
`;

const OverlapGroup = styled.div`
  width: 93px;
  height: 78px;
  position: relative;
  margin-top: -2.75px;
`;

const Vector = styled.img`
  position: absolute;
  width: 54px;
  height: 42px;
  top: 0;
  left: 19px;
`;

const HVH = styled.div`
  ${RobotoMediumSummerGreen436px}
  position: absolute;
  width: 93px;
  top: 40px;
  left: 0;
  letter-spacing: 0;
`;

const OverlapGroup3 = styled.div`
  .logo.logo-4 & {
    height: 79px;
    margin-top: -2.33px;
  }
`;

const IconHome = styled.img`
  .logo.logo-4 & {
    width: 53px;
  }
`;

const HVH1 = styled.div`
  ${RobotoMediumSummerGreen436px}

  .logo.logo-4  & {
    top: 41px;
  }
`;

const OverlapGroup14 = styled.div`
  .logo.logo-5 & {
    height: 76px;
    margin-top: -2.7px;
  }
`;

const IconHome1 = styled.img`
  .logo.logo-5 & {
    height: 41px;
  }
`;

const HVH2 = styled.div`
  ${RobotoMediumSummerGreen436px}

  .logo.logo-5  & {
    top: 39px;
  }
`;

export default Logo;
