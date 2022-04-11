import React from "react";
import { Link } from "react-router-dom";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MenuBar from "../MenuBar";
import Property1Audio from "../Property1Audio";
import SelectionsDefault from "../SelectionsDefault";
import Property1SaveData from "../Property1SaveData";
import "./VoucherToolV2EligibilityQuestions.css";

class VoucherToolV2EligibilityQuestions extends React.Component {
  render() {
    const { voucherTool, line1, property1AudioProps, property1SaveDataProps } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v2-eligibility-questions screen">
          <div className="flex-col-41">
            <div className="flex-row-85">
              <HomePageLink />
              <Logo />
              <MenuBar />
            </div>
            <div className="overlap-group5-17">
              <div className="voucher-tool-32 header-2">{voucherTool}</div>
              <img className="line-1-32" src={line1} />
            </div>
            <div className="flex-row-86">
              <Property1Audio className={property1AudioProps.className} />
              <SelectionsDefault />
            </div>
          </div>
          <div className="tutorial-buttons-container-26">
            <img className="tutorial-buttons-127" src="/img/tutorial-buttons-35@2x.svg" />
            <Property1SaveData className={property1SaveDataProps.className} />
            <Link to="/voucher-tool-v2-disqualifications">
              <img className="tutorial-buttons-128" src="/img/tutorial-buttons-34@2x.svg" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolV2EligibilityQuestions;
