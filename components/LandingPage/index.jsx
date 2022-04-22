import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./LandingPage.css";

class LandingPage extends React.Component {
  render() {
    const { spanText1, spanText2, spanText3, simplyifyingHousing, getHousingResources } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="landing-page screen">
          <OverlapGroup>
            <Ellipse1></Ellipse1>
            <HousingVoucherHelp>
              <span className="roboto-medium-black-90px">{spanText1}</span>
              <Span1>{spanText2}</Span1>
              <span className="roboto-medium-black-90px">{spanText3}</span>
            </HousingVoucherHelp>
          </OverlapGroup>
          <SimplyifyingHousing>{simplyifyingHousing}</SimplyifyingHousing>
          <FlexRow>
            <Link to="/home-page-v3">
              <TutorialButtons>
                <GetHousingResources>{getHousingResources}</GetHousingResources>
              </TutorialButtons>
            </Link>
            <Polygon1 src="/img/polygon-1@1x.svg" />
          </FlexRow>
        </div>
      </div>
    );
  }
}

const OverlapGroup = styled.div`
  width: 1788px;
  height: 854px;
  position: relative;
  margin-top: -287px;
  margin-left: -409px;
`;

const Ellipse1 = styled.div`
  position: absolute;
  width: 818px;
  height: 818px;
  top: 0;
  left: 0;
  background-color: var(--jagged-ice);
  border-radius: 409px;
`;

const HousingVoucherHelp = styled.h1`
  position: absolute;
  width: 1319px;
  top: 644px;
  left: 469px;
  font-family: var(--font-family-roboto);
  font-weight: 500;
  color: transparent;
  font-size: 90px;
  text-align: center;
  letter-spacing: 0;
`;

const Span1 = styled.span`
  color: var(--amazon);
`;

const SimplyifyingHousing = styled.div`
  width: 1157px;
  min-height: 49px;
  align-self: center;
  margin-top: 34px;
  margin-left: 0.91px;
  transform: rotate(-0.05deg);
  font-family: var(--font-family-libre_baskerville);
  font-weight: 400;
  color: var(--black);
  font-size: 35px;
  text-align: center;
  letter-spacing: 0;
`;

const FlexRow = styled.div`
  height: 566px;
  align-self: flex-end;
  margin-top: 107px;
  margin-right: -186.13px;
  display: flex;
  align-items: flex-start;
  min-width: 1111px;
`;

const TutorialButtons = styled.div`
  height: 64px;
  display: flex;
  padding: 0 36.7px;
  align-items: center;
  min-width: 410px;
  background-color: var(--white);
  border-radius: 10.49px;
  border: 2px solid var(--hippie-blue);
  box-shadow: 5.465005874633789px 5.465005874633789px 7.2866740226745605px #0000000d;
  cursor: pointer;
`;

const GetHousingResources = styled.div`
  width: 336px;
  min-height: 39px;
  font-family: var(--font-family-roboto);
  font-weight: 500;
  color: var(--hippie-blue);
  font-size: 31.5px;
  letter-spacing: 0;
`;

const Polygon1 = styled.img`
  width: 515px;
  height: 543px;
  align-self: flex-end;
  margin-left: 186px;
`;

export default LandingPage;
