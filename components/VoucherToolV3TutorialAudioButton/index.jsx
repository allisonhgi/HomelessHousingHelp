import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import HomePageLink from "../HomePageLink";
import MoreResources from "../MoreResources";
import Property1Audio from "../Property1Audio";
import TipTypeAudioButton from "../TipTypeAudioButton";
import styled from "styled-components";
import { Header2 } from "../../styledMixins";
import "./VoucherToolV3TutorialAudioButton.css";

class VoucherToolV3TutorialAudioButton extends React.Component {
  render() {
    const { voucherTool, property1AudioProps, tipTypeAudioButtonProps } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-tutorial-audio-button screen">
          <OverlapGroup2>
            <Logo />
            <HomePageLink />
            <MoreResources />
          </OverlapGroup2>
          <FlexRow>
            <FlexCol>
              <FlexRow1>
                <Property1Audio className={property1AudioProps.className} />
                <FlexCol1>
                  <VoucherTool>{voucherTool}</VoucherTool>
                  <TipTypeAudioButton thisButtonWillRea={tipTypeAudioButtonProps.thisButtonWillRea} />
                </FlexCol1>
              </FlexRow1>
              <Link to="/voucher-tool-v3-tutorial-back-button">
                <TutorialButtons src="/img/tutorial-buttons-31@2x.svg" />
              </Link>
            </FlexCol>
            <Link to="/voucher-tool-v3-disclaimers">
              <TutorialButtons1 src="/img/tutorial-buttons-30@2x.svg" />
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

const FlexRow = styled.div`
  height: 777px;
  margin-top: 63px;
  margin-right: 6px;
  display: flex;
  align-items: flex-end;
  min-width: 1348px;
`;

const FlexCol = styled.div`
  width: 879px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 777px;
`;

const FlexRow1 = styled.div`
  height: 438px;
  position: relative;
  margin-left: 1px;
  display: flex;
  align-items: center;
  min-width: 878px;
`;

const FlexCol1 = styled.div`
  width: 802px;
  position: relative;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 438px;
`;

const VoucherTool = styled.div`
  ${Header2}
  width: 405px;
  min-height: 111px;
  align-self: flex-end;
  font-weight: 500;
  color: var(--black);
`;

const TutorialButtons = styled.img`
  width: 99px;
  height: 77px;
  margin-top: 262px;
  cursor: pointer;
`;

const TutorialButtons1 = styled.img`
  width: 99px;
  height: 77px;
  margin-left: 370px;
  margin-bottom: 1px;
  cursor: pointer;
`;

export default VoucherToolV3TutorialAudioButton;
