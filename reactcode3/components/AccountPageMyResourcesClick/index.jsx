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
          <div className="flex-row-45">
            <Link to="/home-page">
              <div className="place-14 roboto-normal-summer-green-35px">{place}</div>
            </Link>
            <Logo className={logoProps.className} />
            <div className="flex-col-27 roboto-normal-summer-green-35px">
              <div className="more-resources-56">{moreResources}</div>
              <div className="voucher-tools-7">{voucherTools}</div>
            </div>
          </div>
          <div className="overlap-group2-36">
            <img className="icon-star-4" src="/img/star-1@2x.svg" />
          </div>
          <div className="overlap-group3-21">
            <div className="name-3 header-2">{name}</div>
            <div className="overlap-group1-57">
              <div className="my-saved-resources-1 roboto-medium-black-38px">{mySavedResources}</div>
              <div className="exit roboto-medium-shakespeare-25px">{exit}</div>
              <Bix className={bixProps.className} />
            </div>
            <img className="resource-section-12" src={resourceSection} />
          </div>
        </div>
      </div>
    );
  }
}

export default AccountPageMyResourcesClick;
