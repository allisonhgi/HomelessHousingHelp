import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import HomePageLink from "../HomePageLink";
import MoreResources from "../MoreResources";
import TextInfo3 from "../TextInfo3";
import styled from "styled-components";
import { Header2 } from "../../styledMixins";
import "./VoucherToolV3DisqualificationsNotic.css";

class VoucherToolV3DisqualificationsNotic extends React.Component {
  render() {
    const { voucherTool, logoProps, homePageLinkProps, moreResourcesProps } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-disqualifications-notice-page-1 screen">
          <OverlapGroup1>
            <Logo className={logoProps.className} />
            <HomePageLink className={homePageLinkProps.className} />
            <MoreResources className={moreResourcesProps.className} />
          </OverlapGroup1>
          <VoucherTool>{voucherTool}</VoucherTool>
          <TextInfo3 />
          <TutorialButtonsContainer>
            <Link to="/voucher-tool-v3-disqualifications" className="align-self-flex-end">
              <TutorialButtons src="/img/tutorial-buttons-55@2x.svg" />
            </Link>
            <Link to="/voucher-tool-v3-required-paperwork">
              <TutorialButtons1 src="/img/tutorial-buttons-53@2x.svg" />
            </Link>
          </TutorialButtonsContainer>
        </div>
      </div>
    );
  }
}

const OverlapGroup1 = styled.div`
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
  margin-top: 62px;
  margin-right: 1px;
  font-weight: 500;
  color: var(--black);
`;

const TutorialButtonsContainer = styled.div`
  height: 78px;
  margin-top: 24px;
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

const TutorialButtons1 = styled.img`
  width: 99px;
  height: 77px;
  margin-left: 1150px;
  cursor: pointer;
`;

export default VoucherToolV3DisqualificationsNotic;
