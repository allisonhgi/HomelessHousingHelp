import React from "react";
import { Link } from "react-router-dom";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MenuBar from "../MenuBar";
import Property1Audio from "../Property1Audio";
import Property1Variant5 from "../Property1Variant5";
import Property1SaveData from "../Property1SaveData";
import "./VoucherToolV3RequiredPaperwork.css";

class VoucherToolV3RequiredPaperwork extends React.Component {
  render() {
    const {
      voucherTool,
      line1,
      spanText1,
      spanText2,
      spanText3,
      spanText4,
      ownerCertification,
      clickForDetails,
      property1AudioProps,
      property1Variant51Props,
      property1Variant52Props,
      property1Variant53Props,
      property1SaveDataProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-required-paperwork-1 screen">
          <div className="flex-col-33">
            <div className="flex-row-54">
              <HomePageLink />
              <Logo />
              <MenuBar />
            </div>
            <div className="overlap-group7-2">
              <div className="voucher-tool-18 header-2">{voucherTool}</div>
              <img className="line-1-18" src={line1} />
            </div>
            <div className="flex-row-55">
              <Property1Audio className={property1AudioProps.className} />
              <div className="text-info-6 border-1px-black-2">
                <div className="overlap-group5-11">
                  <div className="no-documents-are-nee-5 librebaskerville-normal-black-27px">
                    <span className="librebaskerville-normal-black-27px">{spanText1}</span>
                    <span className="librebaskerville-bold-black-27px">{spanText2}</span>
                    <span className="librebaskerville-normal-black-27px">{spanText3}</span>
                    <span className="librebaskerville-normal-black-30px">{spanText4}</span>
                  </div>
                  <div className="overlap-group-81">
                    <div className="owner-certification roboto-medium-white-30px">{ownerCertification}</div>
                    <div className="overlap-group1-58">
                      <div className="click-for-details-2 roboto-medium-white-21px">{clickForDetails}</div>
                    </div>
                  </div>
                  <Property1Variant5 proofOfIncome={property1Variant51Props.proofOfIncome} />
                  <Property1Variant5
                    proofOfIncome={property1Variant52Props.proofOfIncome}
                    className={property1Variant52Props.className}
                  />
                  <Property1Variant5
                    proofOfIncome={property1Variant53Props.proofOfIncome}
                    className={property1Variant53Props.className}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="tutorial-buttons-container-16">
            <Link to="/voucher-tool-v2-disqualifications-notice-page" className="align-self-flex-end">
              <img className="tutorial-buttons-99" src="/img/tutorial-buttons-21@2x.svg" />
            </Link>
            <Property1SaveData className={property1SaveDataProps.className} />
            <Link to="/voucher-tool-v2-next-steps">
              <img className="tutorial-buttons-100" src="/img/tutorial-buttons-20@2x.svg" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolV3RequiredPaperwork;
