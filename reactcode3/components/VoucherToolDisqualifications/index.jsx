import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import Property1Audio from "../Property1Audio";
import DisqualificationQuestions from "../DisqualificationQuestions";
import Property1SaveData from "../Property1SaveData";
import "./VoucherToolDisqualifications.css";

class VoucherToolDisqualifications extends React.Component {
  render() {
    const {
      place,
      myAccount,
      moreResources,
      voucherTool,
      line1,
      logoProps,
      property1AudioProps,
      disqualificationQuestionsProps,
      property1SaveDataProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-disqualifications screen">
          <div className="flex-col-19">
            <div className="flex-row-32">
              <Link to="/home-page">
                <div className="place-11 roboto-normal-summer-green-35px">{place}</div>
              </Link>
              <Logo className={logoProps.className} />
              <div className="flex-col-20">
                <Link to="/log-in-page">
                  <div className="my-account-29 roboto-normal-summer-green-35px">{myAccount}</div>
                </Link>
                <div className="more-resources-50 roboto-normal-summer-green-35px">{moreResources}</div>
              </div>
            </div>
            <div className="overlap-group2-32">
              <div className="voucher-tool-11 header-2">{voucherTool}</div>
              <img className="line-1-11" src={line1} />
            </div>
            <div className="flex-row-33">
              <Property1Audio className={property1AudioProps.className} />
              <DisqualificationQuestions
                checkIfAnyOfThe={disqualificationQuestionsProps.checkIfAnyOfThe}
                youreARegistered={disqualificationQuestionsProps.youreARegistered}
              />
            </div>
          </div>
          <div className="tutorial-buttons-container-9">
            <Link to="/voucher-tool-eligibility-questions" className="align-self-flex-end">
              <img className="tutorial-buttons-85" src="/img/tutorial-buttons-14@2x.svg" />
            </Link>
            <Property1SaveData className={property1SaveDataProps.className} />
            <img className="tutorial-buttons-86" src="/img/tutorial-buttons-13@2x.svg" />
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolDisqualifications;
