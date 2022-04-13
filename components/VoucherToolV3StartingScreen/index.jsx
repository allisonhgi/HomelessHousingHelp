import React from "react";
import { Link } from "react-router-dom";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MoreResources from "../MoreResources";
import Property1Audio from "../Property1Audio";
import Property1Welcome from "../Property1Welcome";
import Property1BackToHome from "../Property1BackToHome";
import "./VoucherToolV3StartingScreen.css";

class VoucherToolV3StartingScreen extends React.Component {
  render() {
    const { voucherTool, line1, property1WelcomeProps, property1BackToHomeProps } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-starting-screen screen">
          <div className="flex-row-2">
            <HomePageLink />
            <Logo />
            <MoreResources />
          </div>
          <div className="overlap-group4-1">
            <div className="voucher-tool header-2">{voucherTool}</div>
            <img className="line-1" src={line1} />
          </div>
          <div className="flex-row-3">
            <Property1Audio />
            <Property1Welcome
              welcomeThisToolI={property1WelcomeProps.welcomeThisToolI}
              clickNextToCont={property1WelcomeProps.clickNextToCont}
              tutorial1={property1WelcomeProps.tutorial1}
              skip={property1WelcomeProps.skip}
            />
          </div>
          <div className="tutorial-buttons-container">
            <Property1BackToHome>{property1BackToHomeProps.children}</Property1BackToHome>
            <Link to="/voucher-tool-v3-tutorial-next-button">
              <img className="tutorial-buttons-2" src="/img/tutorial-buttons-18@2x.svg" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolV3StartingScreen;
