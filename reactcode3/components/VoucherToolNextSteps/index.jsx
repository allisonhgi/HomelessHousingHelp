import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import Property1Audio from "../Property1Audio";
import TextInfo from "../TextInfo";
import Property1SaveData from "../Property1SaveData";
import "./VoucherToolNextSteps.css";

class VoucherToolNextSteps extends React.Component {
  render() {
    const {
      place,
      myAccount,
      moreResources,
      voucherTool,
      line1,
      logoProps,
      property1AudioProps,
      textInfoProps,
      property1SaveDataProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-next-steps screen">
          <div className="flex-col-17">
            <div className="flex-row-29">
              <Link to="/home-page">
                <div className="place-10 roboto-normal-summer-green-35px">{place}</div>
              </Link>
              <Logo className={logoProps.className} />
              <div className="flex-col-18">
                <Link to="/account-page">
                  <div className="my-account-27 roboto-normal-summer-green-35px">{myAccount}</div>
                </Link>
                <div className="more-resources-46 roboto-normal-summer-green-35px">{moreResources}</div>
              </div>
            </div>
            <div className="overlap-group2-31">
              <div className="voucher-tool-10 header-2">{voucherTool}</div>
              <img className="line-1-10" src={line1} />
            </div>
            <div className="flex-row-30">
              <Property1Audio className={property1AudioProps.className} />
              <TextInfo className={textInfoProps.className}>{textInfoProps.children}</TextInfo>
            </div>
          </div>
          <div className="tutorial-buttons-container-8">
            <Link to="/voucher-tool-required-paperwork" className="align-self-flex-end">
              <img className="tutorial-buttons-83" src="/img/tutorial-buttons-12@2x.svg" />
            </Link>
            <Property1SaveData className={property1SaveDataProps.className} />
            <Link to="/voucher-tool-rap">
              <img className="tutorial-buttons-84" src="/img/tutorial-buttons-11@2x.svg" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolNextSteps;