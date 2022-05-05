import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import HomePageLink from "../HomePageLink";
import MoreResources from "../MoreResources";
import TipTypeBackButton from "../TipTypeBackButton";
import styled from "styled-components";
import { Header2 } from "../../styledMixins";
import "./VoucherToolV3TutorialBackButton.css";

class VoucherToolV3TutorialBackButton extends React.Component {
  render() {
    const { voucherTool, tipTypeBackButtonProps } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-tutorial-back-button screen">
          <OverlapGroup2>
            <Logo />
            <HomePageLink />
            <MoreResources />
          </OverlapGroup2>
          <VoucherTool>{voucherTool}</VoucherTool>
          <TutorialButtons src="/img/tutorial-buttons-52@2x.svg" />
          <FlexRow>
            <OverlapGroup3>
              <TipTypeBackButton thisButtonWillTak={tipTypeBackButtonProps.thisButtonWillTak} />
              <Link to="/voucher-tool-v3-tutorial-next-button">
                <TutorialButtons1 src="/img/tutorial-buttons-51@2x.svg" />
              </Link>
            </OverlapGroup3>
            <Link to="/voucher-tool-v3-tutorial-audio-button">
              <TutorialButtons2 src="/img/tutorial-buttons-50@2x.svg" />
            </Link>
          </FlexRow>
        </div>
      </div>
    );
  }
}

const OverlapGroup2 = styled.div`
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

const VoucherTool = styled.div`
  ${Header2}
  width: 405px;
  min-height: 111px;
  align-self: center;
  margin-top: 63px;
  margin-right: 1px;
  font-weight: 500;
  color: var(--black);
`;

const TutorialButtons = styled.img`
  width: 64px;
  height: 61px;
  margin-top: 24px;
  margin-left: 43px;
`;

const FlexRow = styled.div`
  margin-top: 315px;
  margin-left: -8px;
  display: flex;
  align-items: flex-end;
  min-width: 1399px;
`;

const OverlapGroup3 = styled.div`
  width: 623px;
  height: 272px;
  position: relative;
`;

const TutorialButtons1 = styled.img`
  position: absolute;
  width: 99px;
  height: 77px;
  top: 189px;
  left: 51px;
  cursor: pointer;
`;

const TutorialButtons2 = styled.img`
  width: 99px;
  height: 77px;
  margin-left: 677px;
  margin-bottom: 7px;
  cursor: pointer;
`;

export default VoucherToolV3TutorialBackButton;
