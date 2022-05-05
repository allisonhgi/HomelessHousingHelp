import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import HomePageLink from "../HomePageLink";
import MoreResources from "../MoreResources";
import Property1Welcome from "../Property1Welcome";
import Property1BackToHome from "../Property1BackToHome";
import styled from "styled-components";
import { Header2 } from "../../styledMixins";
import "./VoucherToolV3StartingScreen.css";

class VoucherToolV3StartingScreen extends React.Component {
  render() {
    const { voucherTool, property1WelcomeProps, property1BackToHomeProps } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-starting-screen screen">
          <OverlapGroup3>
            <Logo />
            <HomePageLink />
            <MoreResources />
          </OverlapGroup3>
          <FlexRow>
            <FlexCol>
              <FlexRow1>
                <TutorialButtons src="/img/tutorial-buttons-19@2x.svg" />
                <ToolContainer>
                  <VoucherTool>{voucherTool}</VoucherTool>
                  <Property1Welcome
                    welcomeThisToolI={property1WelcomeProps.welcomeThisToolI}
                    clickNextToCont={property1WelcomeProps.clickNextToCont}
                    tutorial1={property1WelcomeProps.tutorial1}
                    skip={property1WelcomeProps.skip}
                  />
                </ToolContainer>
              </FlexRow1>
              <Property1BackToHome>{property1BackToHomeProps.children}</Property1BackToHome>
            </FlexCol>
            <Link to="/voucher-tool-v3-tutorial-next-button" className="align-self-flex-end">
              <TutorialButtons1 src="/img/tutorial-buttons-18@2x.svg" />
            </Link>
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
  height: 776px;
  margin-top: 63px;
  margin-right: 6px;
  display: flex;
  align-items: flex-start;
  min-width: 1348px;
`;

const FlexCol = styled.div`
  width: 1193px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 770px;
`;

const FlexRow1 = styled.div`
  height: 675px;
  display: flex;
  align-items: flex-start;
  min-width: 1193px;
`;

const TutorialButtons = styled.img`
  width: 64px;
  height: 61px;
  margin-top: 135px;
`;

const ToolContainer = styled.div`
  width: 1011px;
  position: relative;
  margin-left: 118px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 675px;
`;

const VoucherTool = styled.div`
  ${Header2}
  width: 356px;
  min-height: 111px;
  margin-right: 21px;
  font-weight: 500;
  color: var(--black);
`;

const TutorialButtons1 = styled.img`
  width: 99px;
  height: 77px;
  align-self: flex-end;
  margin-left: 56px;
  cursor: pointer;
`;

export default VoucherToolV3StartingScreen;
