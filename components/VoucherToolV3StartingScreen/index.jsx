import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import HomePageLink from "../HomePageLink";
import MoreResources from "../MoreResources";
import Property1Audio from "../Property1Audio";
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
          <OverlapGroup4>
            <Logo />
            <HomePageLink />
            <MoreResources />
          </OverlapGroup4>
          <FlexRow>
            <FlexCol>
              <FlexRow1>
                <Property1Audio />
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
              <TutorialButtons src="/img/tutorial-buttons-32@2x.svg" />
            </Link>
          </FlexRow>
        </div>
      </div>
    );
  }
}

const OverlapGroup4 = styled.div`
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
  margin-right: 5px;
  display: flex;
  align-items: flex-start;
  min-width: 1347px;
`;

const FlexCol = styled.div`
  width: 1192px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 770px;
`;

const FlexRow1 = styled.div`
  height: 675px;
  position: relative;
  display: flex;
  align-items: flex-start;
  min-width: 1192px;
`;

const ToolContainer = styled.div`
  width: 1011px;
  position: relative;
  margin-left: 125px;
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

const TutorialButtons = styled.img`
  width: 99px;
  height: 77px;
  align-self: flex-end;
  margin-left: 56px;
  cursor: pointer;
`;

export default VoucherToolV3StartingScreen;
