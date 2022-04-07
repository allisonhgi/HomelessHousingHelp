import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import Property1Audio from "../Property1Audio";
import RegionalAccessPoints from "../RegionalAccessPoints";
import Property1SaveData from "../Property1SaveData";
import "./VoucherToolRAP.css";

class VoucherToolRAP extends React.Component {
  render() {
    const {
      place,
      myAccount,
      moreResources,
      voucherTool,
      line1,
      logoProps,
      property1AudioProps,
      regionalAccessPointsProps,
      property1SaveDataProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-rap screen">
          <div className="flex-col-31">
            <div className="flex-row-50">
              <Link to="/home-page">
                <div className="place-16 roboto-normal-summer-green-35px">{place}</div>
              </Link>
              <Logo className={logoProps.className} />
              <div className="flex-col-32">
                <Link to="/account-page">
                  <div className="my-account-31 roboto-normal-summer-green-35px">{myAccount}</div>
                </Link>
                <div className="more-resources-72 roboto-normal-summer-green-35px">{moreResources}</div>
              </div>
            </div>
            <div className="overlap-group2-36">
              <div className="voucher-tool-15 header-2">{voucherTool}</div>
              <img className="line-1-15" src={line1} />
            </div>
            <div className="flex-row-51">
              <Property1Audio className={property1AudioProps.className} />
              <RegionalAccessPoints
                regionalAccessPoin={regionalAccessPointsProps.regionalAccessPoin}
                property1Default61Props={regionalAccessPointsProps.property1Default61Props}
                property1Default62Props={regionalAccessPointsProps.property1Default62Props}
                property1Default63Props={regionalAccessPointsProps.property1Default63Props}
                property1Default64Props={regionalAccessPointsProps.property1Default64Props}
                property1Default65Props={regionalAccessPointsProps.property1Default65Props}
              />
            </div>
          </div>
          <div className="tutorial-buttons-container-14">
            <Link to="/voucher-tool-next-steps" className="align-self-flex-end">
              <img className="tutorial-buttons-93" src="/img/tutorial-buttons-22@2x.svg" />
            </Link>
            <Property1SaveData className={property1SaveDataProps.className} />
            <img className="tutorial-buttons-94" src="/img/tutorial-buttons-23@2x.svg" />
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolRAP;
