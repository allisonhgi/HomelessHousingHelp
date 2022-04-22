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


class Property1Expanded extends React.Component {
  render() {
    const { iveAppliedForAV, close, goToHousingTool, spanText1, spanText2, spanText3, spanText4 } = this.props;

    return (
      <ReceivedVoucherButton>
        <OverlapGroup>
          <IveAppliedForAV>{iveAppliedForAV}</IveAppliedForAV>
          <Line7 src="/img/line-7@2x.svg" />
          <OverlapGroupContainer>
            <OverlapGroup2>
              <Bix />
              <Close>{close}</Close>
            </OverlapGroup2>
            <OverlapGroup1>
              <Link to="/resources-v3">
                <TutorialButtons></TutorialButtons>
              </Link>
              <Link to="/resources-v3">
                <GoToHousingTool>{goToHousingTool}</GoToHousingTool>
              </Link>
              <Arrow1 src="/img/arrow-1@2x.svg" />
              <IfYouHaveApplied>
                <span className="librebaskerville-normal-white-25px">{spanText1}</span>
                <span className="librebaskerville-normal-cornflower-25px">{spanText2}</span>
                <span className="librebaskerville-normal-white-25px">{spanText3}</span>
                <Span32>{spanText4}</Span32>
              </IfYouHaveApplied>
            </OverlapGroup1>
          </OverlapGroupContainer>
        </OverlapGroup>
      </ReceivedVoucherButton>
    );
  }
}

const ReceivedVoucherButton = styled.div`
  position: absolute;
  height: 495px;
  top: 0;
  left: 1px;
  display: flex;
  align-items: flex-start;
  min-width: 410px;
`;

const OverlapGroup = styled.div`
  height: 495px;
  display: flex;
  padding: 3px 10px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 1307px;
  background-color: var(--amazon);
  border-radius: 5px;
`;

const IveAppliedForAV = styled.div`
  ${RobotoMediumWhite40px}
  width: 368px;
  min-height: 75px;
  margin-top: 18px;
  letter-spacing: 0;
`;

const Line7 = styled.img`
  width: 2px;
  height: 440px;
  align-self: center;
  margin-left: 10px;
  margin-bottom: 7px;
`;

const OverlapGroupContainer = styled.div`
  width: 856px;
  margin-left: 39px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 449px;
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
  height: 405px;
  position: relative;
  margin-top: 10px;
`;

const TutorialButtons = styled.div`
  position: absolute;
  width: 275px;
  height: 60px;
  top: 345px;
  left: 0;
  background-color: var(--summer-green);
  border-radius: 5px;
  box-shadow: 3px 3px 4px #00000026;
  cursor: pointer;
`;

const GoToHousingTool = styled.div`
  ${RobotoMediumWhite25px}
  position: absolute;
  top: 360px;
  left: 12px;
  letter-spacing: 0;
  cursor: pointer;
`;

const Arrow1 = styled.img`
  position: absolute;
  width: 27px;
  height: 15px;
  top: 367px;
  left: 236px;
`;

const IfYouHaveApplied = styled.div`
  ${LibrebaskervilleNormalWhite25px2}
  position: absolute;
  width: 812px;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: 32px;
`;

const Span32 = styled.span`
  font-family: var(--font-family-libre_baskerville);
  font-weight: 700;
  color: var(--cornflower);
  font-size: var(--font-size-m);
`;

export default Property1Expanded;
