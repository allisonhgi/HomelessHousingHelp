import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import Property1Audio from "../Property1Audio";
import TextInfo2 from "../TextInfo2";
import Property1SaveData from "../Property1SaveData";
import "./VoucherToolRequiredPaperwork.css";

class VoucherToolRequiredPaperwork extends React.Component {
  render() {
    const {
      place,
      myAccount,
      moreResources,
      voucherTool,
      line1,
      logoProps,
      property1AudioProps,
      textInfo2Props,
      property1SaveDataProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-required-paperwork screen">
          <div className="flex-col-29">
            <div className="flex-row-48">
              <Link to="/home-page">
                <div className="place-15 roboto-normal-summer-green-35px">{place}</div>
              </Link>
              <Logo className={logoProps.className} />
              <div className="flex-col-30">
                <Link to="/account-page">
                  <div className="my-account-30 roboto-normal-summer-green-35px">{myAccount}</div>
                </Link>
                <div className="more-resources-58 roboto-normal-summer-green-35px">{moreResources}</div>
              </div>
            </div>
            <div className="overlap-group2-37">
              <div className="voucher-tool-15 header-2">{voucherTool}</div>
              <img className="line-1-15" src={line1} />
            </div>
            <div className="flex-row-49">
              <Property1Audio className={property1AudioProps.className} />
              <TextInfo2
                spanText1={textInfo2Props.spanText1}
                spanText2={textInfo2Props.spanText2}
                spanText3={textInfo2Props.spanText3}
              />
            </div>
          </div>
          <div className="tutorial-buttons-container-13">
            <Link to="/voucher-tool-disqualifications" className="align-self-flex-end">
              <img className="tutorial-buttons-94" src="/img/tutorial-buttons-19@2x.svg" />
            </Link>
            <Property1SaveData className={property1SaveDataProps.className} />
            <Link to="/voucher-tool-next-steps">
              <img className="tutorial-buttons-95" src="/img/tutorial-buttons-18@2x.svg" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolRequiredPaperwork;
