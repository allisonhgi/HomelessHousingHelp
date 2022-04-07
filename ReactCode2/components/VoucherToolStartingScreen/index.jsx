import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import Property1Audio from "../Property1Audio";
import ToolQuestionScreen from "../ToolQuestionScreen";
import Property1BackToHome from "../Property1BackToHome";
import Property1SaveData from "../Property1SaveData";
import "./VoucherToolStartingScreen.css";

class VoucherToolStartingScreen extends React.Component {
  render() {
    const {
      place,
      myAccount,
      moreResources,
      voucherTool,
      line1,
      logoProps,
      property1AudioProps,
      toolQuestionScreenProps,
      property1SaveDataProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-starting-screen screen">
          <div className="flex-row-10">
            <Link to="/home-page">
              <div className="place-5 roboto-normal-summer-green-35px">{place}</div>
            </Link>
            <Logo className={logoProps.className} />
            <div className="flex-col-9 roboto-normal-summer-green-35px">
              <div className="my-account-25">{myAccount}</div>
              <div className="more-resources-58">{moreResources}</div>
            </div>
          </div>
          <div className="overlap-group3-3">
            <div className="voucher-tool-4 header-2">{voucherTool}</div>
            <img className="line-1-4" src={line1} />
          </div>
          <div className="flex-row-11">
            <Property1Audio className={property1AudioProps.className} />
            <ToolQuestionScreen property1WelcomeProps={toolQuestionScreenProps.property1WelcomeProps} />
          </div>
          <div className="tutorial-buttons-container-3">
            <Property1BackToHome />
            <Property1SaveData className={property1SaveDataProps.className} />
            <img className="tutorial-buttons-67" src="/img/tutorial-buttons-8@2x.svg" />
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolStartingScreen;
