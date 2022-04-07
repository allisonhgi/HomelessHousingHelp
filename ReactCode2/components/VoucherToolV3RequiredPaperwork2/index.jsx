import React from "react";
import { Link } from "react-router-dom";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MoreResources from "../MoreResources";
import Property1Audio from "../Property1Audio";
import Property1Variant5 from "../Property1Variant5";
import "./VoucherToolV3RequiredPaperwork2.css";

class VoucherToolV3RequiredPaperwork2 extends React.Component {
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
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-required-paperwork screen">
          <div className="flex-row-58">
            <HomePageLink />
            <Logo />
            <MoreResources />
          </div>
          <div className="overlap-group6-4">
            <div className="voucher-tool-19 header-2">{voucherTool}</div>
            <img className="line-1-19" src={line1} />
          </div>
          <div className="flex-row-59">
            <Property1Audio className={property1AudioProps.className} />
            <div className="text-info-8 border-1px-black-2">
              <div className="overlap-group5-11">
                <div className="no-documents-are-nee-5 librebaskerville-normal-black-27px">
                  <span className="librebaskerville-normal-black-27px">{spanText1}</span>
                  <span className="librebaskerville-bold-black-27px">{spanText2}</span>
                  <span className="librebaskerville-normal-black-27px">{spanText3}</span>
                  <span className="librebaskerville-normal-black-30px">{spanText4}</span>
                </div>
                <div className="overlap-group-83">
                  <div className="owner-certification-1 roboto-medium-white-30px">{ownerCertification}</div>
                  <div className="overlap-group1-58">
                    <div className="click-for-details-5 roboto-medium-white-21px">{clickForDetails}</div>
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
          <div className="tutorial-buttons-container-18">
            <Link to="/voucher-tool-v3-disqualifications" className="align-self-flex-end">
              <img className="tutorial-buttons-100" src="/img/tutorial-buttons-37@2x.svg" />
            </Link>
            <Link to="/voucher-tool-v3-next-steps">
              <img className="tutorial-buttons-101" src="/img/tutorial-buttons-36@2x.svg" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolV3RequiredPaperwork2;
