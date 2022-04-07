import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import Bix from "../Bix";
import "./AccountPageMyResourcesClick.css";

class AccountPageMyResourcesClick extends React.Component {
  render() {
    const {
      place,
      moreResources,
      voucherTools,
      name,
      mySavedResources,
      exit,
      resourceSection,
      logoProps,
      bixProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="account-page-my-resources-click screen">
          <div className="flex-row-43">
            <Link to="/home-page">
              <div className="place-12 roboto-normal-summer-green-35px">{place}</div>
            </Link>
            <Logo className={logoProps.className} />
            <div className="flex-col-25 roboto-normal-summer-green-35px">
              <div className="more-resources-69">{moreResources}</div>
              <div className="voucher-tools-6">{voucherTools}</div>
            </div>
          </div>
          <div className="overlap-group2-33">
            <img className="icon-star-3" src="/img/star-1@2x.svg" />
          </div>
          <div className="overlap-group3-18">
            <div className="name-3 header-2">{name}</div>
            <div className="overlap-group1-55">
              <div className="my-saved-resources-1 roboto-medium-black-38px">{mySavedResources}</div>
              <div className="exit roboto-medium-shakespeare-25px">{exit}</div>
              <Bix className={bixProps.className} />
            </div>
            <img className="resource-section-15" src={resourceSection} />
          </div>
        </div>
      </div>
    );
  }
}

export default AccountPageMyResourcesClick;
