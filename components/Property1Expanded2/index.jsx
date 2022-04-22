import React from "react";
import { Link } from "react-router-dom";
import Bix from "../Bix";
import styled from "styled-components";
import {
  RobotoMediumWhite21px2,
  RobotoMediumWhite40px,
  RobotoMediumWhite25px,
  LibrebaskervilleNormalWhite25px2,
} from "../../styledMixins";


class Property1Expanded2 extends React.Component {
  render() {
    const {
      spanText1,
      spanText2,
      spanText3,
      close,
      goToMoreResources,
      spanText4,
      spanText5,
      spanText6,
      spanText7,
      spanText8,
      spanText9,
    } = this.props;

    return (
      <Waitlisted>
        <OverlapGroup>
          <IveAppliedForAV>
            <span className="roboto-medium-white-40px">{spanText1}</span>
            <span className="roboto-medium-white-40px">{spanText2}</span>
            <span className="roboto-medium-white-40px">{spanText3}</span>
          </IveAppliedForAV>
          <Line7 src="/img/line-7@2x.svg" />
          <OverlapGroupContainer>
            <OverlapGroup2>
              <Bix />
              <Close>{close}</Close>
            </OverlapGroup2>
            <OverlapGroup1>
              <TutorialButtons></TutorialButtons>
              <Link to="/resources-v3-1">
                <GoToMoreResources>{goToMoreResources}</GoToMoreResources>
              </Link>
              <Arrow1 src="/img/arrow-1@2x.svg" />
              <IfYouAreOnTheVo>
                <span className="librebaskerville-normal-white-25px">{spanText4}</span>
                <span className="librebaskerville-normal-cornflower-25px">{spanText5}</span>
                <span className="librebaskerville-normal-white-25px">{spanText6}</span>
                <span className="librebaskerville-bold-edgewater-25px">{spanText7}</span>
                <span className="librebaskerville-bold-edgewater-25px">{spanText8}</span>
                <Span51>{spanText9}</Span51>
              </IfYouAreOnTheVo>
            </OverlapGroup1>
          </OverlapGroupContainer>
        </OverlapGroup>
      </Waitlisted>
    );
  }
}

const Waitlisted = styled.div`
  position: absolute;
  height: 495px;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 410px;
`;

const OverlapGroup = styled.div`
  height: 495px;
  display: flex;
  padding: 3px 10px;
  justify-content: flex-end;
  align-items: center;
  min-width: 1307px;
  background-color: var(--hippie-blue);
  border-radius: 5px;
`;

const IveAppliedForAV = styled.div`
  ${RobotoMediumWhite40px}
  width: 368px;
  min-height: 435px;
  margin-bottom: 22px;
  letter-spacing: 0;
`;

const Line7 = styled.img`
  width: 2px;
  height: 440px;
  margin-left: 11px;
  margin-bottom: 7px;
`;

const OverlapGroupContainer = styled.div`
  width: 858px;
  align-self: flex-start;
  margin-left: 37px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 459px;
`;

const OverlapGroup2 = styled.div`
  width: 87px;
  height: 34px;
  position: relative;
  align-self: flex-end;
`;

const Close = styled.div`
  ${RobotoMediumWhite21px2}
  position: absolute;
  width: 71px;
  top: 4px;
  left: 0;
  letter-spacing: 0;
`;

const OverlapGroup1 = styled.div`
  width: 812px;
  height: 403px;
  position: relative;
  margin-top: 22px;
`;

const TutorialButtons = styled.div`
  position: absolute;
  width: 318px;
  height: 60px;
  top: 310px;
  left: 358px;
  background-color: var(--summer-green);
  border-radius: 5px;
  box-shadow: 3px 3px 4px #00000026;
`;

const GoToMoreResources = styled.div`
  ${RobotoMediumWhite25px}
  position: absolute;
  top: 325px;
  left: 375px;
  letter-spacing: 0;
  cursor: pointer;
`;

const Arrow1 = styled.img`
  position: absolute;
  width: 27px;
  height: 15px;
  top: 332px;
  left: 632px;
`;

const IfYouAreOnTheVo = styled.div`
  ${LibrebaskervilleNormalWhite25px2}
  position: absolute;
  width: 812px;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: 32px;
`;

const Span51 = styled.span`
  font-family: var(--font-family-libre_baskerville);
  font-weight: 700;
  color: var(--midnight-blue);
  font-size: var(--font-size-m);
`;

export default Property1Expanded2;
