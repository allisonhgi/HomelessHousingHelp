import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import Property1Audio from "../Property1Audio";
import SelectionsDefault from "../SelectionsDefault";
import Property1SaveData from "../Property1SaveData";
import "./VoucherToolEligibilityQuestions.css";

class VoucherToolEligibilityQuestions extends React.Component {
  render() {
    const {
      place,
      myAccount,
      moreResources,
      voucherTool,
      line1,
      logoProps,
      property1AudioProps,
      property1SaveDataProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-eligibility-questions screen">
          <div className="flex-col-12">
            <div className="flex-row-24">
              <Link to="/home-page">
                <div className="place-7 roboto-normal-summer-green-35px">{place}</div>
              </Link>
              <Logo className={logoProps.className} />
              <div className="flex-col-13">
                <Link to="/log-in-page">
                  <div className="my-account-26 roboto-normal-summer-green-35px">{myAccount}</div>
                </Link>
                <div className="more-resources-40 roboto-normal-summer-green-35px">{moreResources}</div>
              </div>
            </div>
            <div className="overlap-group4-10">
              <div className="voucher-tool-9 header-2">{voucherTool}</div>
              <img className="line-1-9" src={line1} />
            </div>
            <div className="flex-row-25">
              <Property1Audio className={property1AudioProps.className} />
              <SelectionsDefault />
            </div>
          </div>
          <div className="tutorial-buttons-container-7">
            <img className="tutorial-buttons-81" src="/img/tutorial-buttons-10@2x.svg" />
            <Property1SaveData className={property1SaveDataProps.className} />
            <Link to="/voucher-tool-disqualifications">
              <img className="tutorial-buttons-82" src="/img/tutorial-buttons-9@2x.svg" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolEligibilityQuestions;
