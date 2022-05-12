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
    const { voucherTool, logoProps, homePageLinkProps, moreResourcesProps, tipTypeNextButtonProps } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-tutorial-next-button screen">
          <OverlapGroup3>
            <Logo className={logoProps.className} />
            <HomePageLink className={homePageLinkProps.className} />
            <MoreResources className={moreResourcesProps.className} />
          </OverlapGroup3>
          <FlexRow>
            <Link to="/voucher-tool-v3-starting-screen" className="align-self-flex-end">
              <TutorialButtons src="/img/tutorial-buttons-36@2x.svg" />
            </Link>
            <FlexCol>
              <VoucherTool>{voucherTool}</VoucherTool>
              <OverlapGroup2>
                <TipTypeNextButton thisButtonWillTak={tipTypeNextButtonProps.thisButtonWillTak} />
                <Link to="/voucher-tool-v3-tutorial-back-button">
                  <TutorialButtons1 src="/img/tutorial-buttons-35@2x.svg" />
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
  height: 778px;
  margin-top: 62px;
  margin-right: 6px;
  display: flex;
  align-items: flex-start;
  min-width: 1348px;
`;

const TutorialButtons = styled.img`
  width: 99px;
  height: 77px;
  align-self: flex-end;
  cursor: pointer;
`;

const FlexCol = styled.div`
  width: 874px;
  margin-left: 375px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 777px;
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
  margin-top: 337px;
`;

const TutorialButtons1 = styled.img`
  position: absolute;
  width: 99px;
  height: 77px;
  top: 252px;
  left: 524px;
  cursor: pointer;
`;

export default VoucherToolV3TutorialNextButton;
