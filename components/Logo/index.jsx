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
          <OverlapGroup5 className="overlap-group5">
            <Vector className="vector" src="/img/vector-3@2x.svg" />
            <HVH className="hvh">HVH</HVH>
          </OverlapGroup5>
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

  &.logo.logo-2 {
    cursor: unset;
  }

  &.logo.logo-3 {
    position: absolute;
    top: 38px;
    left: 91px;
    align-self: unset;
  }
`;

const OverlapGroup5 = styled.div`
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

export default Logo;
