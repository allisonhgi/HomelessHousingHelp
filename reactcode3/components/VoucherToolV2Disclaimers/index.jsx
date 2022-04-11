import React from "react";
import { Link } from "react-router-dom";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MenuBar from "../MenuBar";
import Property1Audio from "../Property1Audio";
import Property1SaveData from "../Property1SaveData";
import "./VoucherToolV2Disclaimers.css";

class VoucherToolV2Disclaimers extends React.Component {
  render() {
    const {
      voucherTool,
      line1,
      spanText1,
      spanText2,
      spanText3,
      voucherApplying1,
      property1AudioProps,
      property1SaveDataProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v2-disclaimers screen">
          <div className="flex-col-11">
            <div className="flex-row-22">
              <HomePageLink />
              <Logo />
              <MenuBar />
            </div>
            <div className="overlap-group3-11">
              <div className="voucher-tool-8 header-2">{voucherTool}</div>
              <img className="line-1-8" src={line1} />
            </div>
            <div className="flex-row-23">
              <Property1Audio className={property1AudioProps.className} />
              <div className="tool-question-screen-2 border-1px-summer-green">
                <div className="overlap-group-73">
                  <div className="obot-1 librebaskerville-normal-black-35px">
                    <span className="librebaskerville-normal-black-35px">{spanText1}</span>
                    <span className="librebaskerville-bold-black-35px">{spanText2}</span>
                    <span className="librebaskerville-normal-black-35px">{spanText3}</span>
                  </div>
                  <img className="voucher-applying-1" src={voucherApplying1} />
                </div>
              </div>
            </div>
          </div>
          <div className="tutorial-buttons-container-6">
            <Link to="/voucher-tool-v2-starting-screen" className="align-self-flex-end">
              <img className="tutorial-buttons-79" src="/img/tutorial-buttons-29@2x.svg" />
            </Link>
            <Property1SaveData className={property1SaveDataProps.className} />
            <Link to="/voucher-tool-v2-eligibility-questions">
              <img className="tutorial-buttons-80" src="/img/tutorial-buttons-28@2x.svg" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolV2Disclaimers;
