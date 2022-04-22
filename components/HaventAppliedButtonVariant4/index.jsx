import React from "react";
import { Link } from "react-router-dom";
import Bix from "../Bix";
import styled from "styled-components";
import {
  LibrebaskervilleNormalCornflower25p,
  RobotoMediumWhite25px,
  LibrebaskervilleNormalWhite25px2,
  RobotoMediumWhite21px2,
  RobotoMediumWhite40px,
} from "../../styledMixins";


class HaventAppliedButtonVariant4 extends React.Component {
  render() {
    const {
      iHaventAppliedFo,
      close,
      spanText1,
      spanText2,
      spanText3,
      spanText4,
      spanText5,
      goToVoucherTool,
    } = this.props;

    return (
      <HaventAppliedButtonVariant41>
        <OverlapGroup>
          <IHaventAppliedFo>{iHaventAppliedFo}</IHaventAppliedFo>
          <Line7 src="/img/line-7@2x.svg" />
          <OverlapGroupContainer>
            <OverlapGroup2>
              <Bix />
              <Link to="/voucher-tools-page">
                <Close>{close}</Close>
              </Link>
            </OverlapGroup2>
            <OverlapGroup1>
              <IfYouHaventYetA>
                <span className="librebaskerville-normal-white-25px">{spanText1}</span>
                <Span12>{spanText2}</Span12>
                <span className="librebaskerville-normal-cornflower-25px">{spanText3}</span>
                <span className="librebaskerville-normal-white-25px">{spanText4}</span>
                <Span4>{spanText5}</Span4>
              </IfYouHaventYetA>
              <TutorialButtons></TutorialButtons>
              <Link to="/voucher-tool-v3-starting-screen">
                <GoToVoucherTool>{goToVoucherTool}</GoToVoucherTool>
              </Link>
              <Link to="/voucher-tool-v3-starting-screen">
                <Arrow1 src="/img/arrow-1@2x.svg" />
              </Link>
            </OverlapGroup1>
          </OverlapGroupContainer>
        </OverlapGroup>
      </HaventAppliedButtonVariant41>
    );
  }
}

const HaventAppliedButtonVariant41 = styled.div`
  position: absolute;
  height: 495px;
  top: 0;
  left: 7px;
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
  background-color: var(--midnight-blue);
  border-radius: 5px;
`;

const IHaventAppliedFo = styled.div`
  ${RobotoMediumWhite40px}
  width: 368px;
  min-height: 75px;
  margin-top: 17px;
  letter-spacing: 0;
`;

const Line7 = styled.img`
  width: 2px;
  height: 440px;
  align-self: center;
  margin-left: 18px;
  margin-bottom: 7px;
`;

const OverlapGroupContainer = styled.div`
  width: 856px;
  margin-left: 39px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 476px;
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
  cursor: pointer;
`;

const OverlapGroup1 = styled.div`
  width: 825px;
  height: 433px;
  position: relative;
  margin-top: 9px;
`;

const IfYouHaventYetA = styled.div`
  ${LibrebaskervilleNormalWhite25px2}
  position: absolute;
  width: 812px;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: 32px;
`;

const Span12 = styled.span`
  ${LibrebaskervilleNormalCornflower25p}
  text-decoration: underline;
`;

const Span4 = styled.span`
  font-family: var(--font-family-libre_baskerville);
  font-weight: 700;
  color: var(--summer-green);
  font-size: var(--font-size-m);
`;

const TutorialButtons = styled.div`
  position: absolute;
  width: 275px;
  height: 60px;
  top: 373px;
  left: 550px;
  background-color: var(--summer-green);
  border-radius: 5px;
  box-shadow: 3px 3px 4px #00000026;
`;

const GoToVoucherTool = styled.div`
  ${RobotoMediumWhite25px}
  position: absolute;
  top: 388px;
  left: 562px;
  letter-spacing: 0;
  cursor: pointer;
`;

const Arrow1 = styled.img`
  position: absolute;
  width: 27px;
  height: 15px;
  top: 395px;
  left: 786px;
  cursor: pointer;
`;

export default HaventAppliedButtonVariant4;
