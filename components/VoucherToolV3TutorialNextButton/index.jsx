import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import HomePageLink from "../HomePageLink";
import MoreResources from "../MoreResources";
import TipTypeNextButton from "../TipTypeNextButton";
import styled from "styled-components";
import { Header2 } from "../../styledMixins";
import "./VoucherToolV3TutorialNextButton.css";

class VoucherToolV3TutorialNextButton extends React.Component {
  render() {
    const { voucherTool, tipTypeNextButtonProps } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-tutorial-next-button screen">
          <OverlapGroup3>
            <Logo />
            <HomePageLink />
            <MoreResources />
          </OverlapGroup3>
          <FlexRow>
            <TutorialButtonsContainer>
              <TutorialButtons src="/img/tutorial-buttons-37@2x.svg" />
              <Link to="/voucher-tool-v3-starting-screen">
                <TutorialButtons1 src="/img/tutorial-buttons-36@2x.svg" />
              </Link>
            </TutorialButtonsContainer>
            <FlexCol>
              <VoucherTool>{voucherTool}</VoucherTool>
              <OverlapGroup2>
                <TipTypeNextButton thisButtonWillTak={tipTypeNextButtonProps.thisButtonWillTak} />
                <Link to="/voucher-tool-v3-tutorial-back-button">
                  <TutorialButtons2 src="/img/tutorial-buttons-35@2x.svg" />
                </Link>
              </OverlapGroup2>
            </FlexCol>
          </FlexRow>
        </div>
      </div>
    );
  }
}

const OverlapGroup3 = styled.div`
  height: 152px;
  position: relative;
  display: flex;
  padding: 38px 85px;
  justify-content: flex-end;
  align-items: center;
  min-width: 1440px;
  background-color: var(--white);
  box-shadow: 0px 4px 4px #00000040;
`;

const FlexRow = styled.div`
  height: 777px;
  margin-top: 63px;
  margin-right: 6px;
  display: flex;
  align-items: flex-start;
  min-width: 1348px;
`;

const TutorialButtonsContainer = styled.div`
  width: 99px;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 642px;
`;

const TutorialButtons = styled.img`
  width: 64px;
  height: 61px;
`;

const TutorialButtons1 = styled.img`
  width: 99px;
  height: 77px;
  margin-top: 504px;
  cursor: pointer;
`;

const FlexCol = styled.div`
  width: 874px;
  margin-left: 375px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 776px;
`;

const VoucherTool = styled.div`
  ${Header2}
  width: 389px;
  min-height: 111px;
  font-weight: 500;
  color: var(--black);
`;

const OverlapGroup2 = styled.div`
  width: 623px;
  height: 329px;
  position: relative;
  align-self: flex-end;
  margin-top: 336px;
`;

const TutorialButtons2 = styled.img`
  position: absolute;
  width: 99px;
  height: 77px;
  top: 252px;
  left: 524px;
  cursor: pointer;
`;

export default VoucherToolV3TutorialNextButton;
