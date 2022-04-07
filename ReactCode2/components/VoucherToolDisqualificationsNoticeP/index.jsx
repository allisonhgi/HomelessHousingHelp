import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import Property1Audio from "../Property1Audio";
import TextInfo4 from "../TextInfo4";
import Property1SaveData from "../Property1SaveData";
import "./VoucherToolDisqualificationsNoticeP.css";

class VoucherToolDisqualificationsNoticeP extends React.Component {
  render() {
    const {
      place,
      myAccount,
      moreResources,
      voucherTool,
      line1,
      logoProps,
      property1AudioProps,
      textInfo4Props,
      property1SaveDataProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-disqualifications-notice-page screen">
          <div className="flex-col-35">
            <div className="flex-row-60">
              <Link to="/home-page">
                <div className="place-17 roboto-normal-summer-green-35px">{place}</div>
              </Link>
              <Logo className={logoProps.className} />
              <div className="flex-col-36">
                <Link to="/account-page">
                  <div className="my-account-32 roboto-normal-summer-green-35px">{myAccount}</div>
                </Link>
                <Link to="/resources-logged-in">
                  <div className="more-resources-73 roboto-normal-summer-green-35px">{moreResources}</div>
                </Link>
              </div>
            </div>
            <div className="overlap-group2-38">
              <div className="voucher-tool-20 header-2">{voucherTool}</div>
              <img className="line-1-20" src={line1} />
            </div>
            <div className="flex-row-61">
              <Property1Audio className={property1AudioProps.className} />
              <TextInfo4
                spanText1={textInfo4Props.spanText1}
                spanText2={textInfo4Props.spanText2}
                spanText3={textInfo4Props.spanText3}
              />
            </div>
          </div>
          <div className="tutorial-buttons-container-19">
            <Link to="/voucher-tool-disqualifications" className="align-self-flex-end">
              <img className="tutorial-buttons-102" src="/img/tutorial-buttons-27@2x.svg" />
            </Link>
            <Property1SaveData className={property1SaveDataProps.className} />
            <Link to="/voucher-tool-required-paperwork">
              <img className="tutorial-buttons-103" src="/img/tutorial-buttons-26@2x.svg" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolDisqualificationsNoticeP;
