import React from "react";
import { Link } from "react-router-dom";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MenuBar from "../MenuBar";
import "./AccountPageAltV2.css";

class AccountPageAltV2 extends React.Component {
  render() {
    const { pickUpWhereYouLe, place, yes } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="account-page-alt-v2-1 screen">
          <div className="flex-row-3">
            <HomePageLink />
            <Logo />
            <MenuBar />
          </div>
          <div className="overlap-group4-3">
            <div className="overlap-group3-1">
              <img className="john-doe" src="/img/john-doe@2x.svg" />
              <img className="line-4" src="/img/line-4@1x.svg" />
              <img className="profile-section-v2" src="/img/profile-section-v2@2x.svg" />
              <img className="profile-section-v2-1" src="/img/profile-section-v2-1@2x.svg" />
              <img className="personal-info" src="/img/personal-info-@1x.svg" />
              <div className="overlap-group2-15 border-1px-black-4">
                <div className="pick-up-where-you-le roboto-medium-black-38px">{pickUpWhereYouLe}</div>
                <div className="overlap-group-container-2">
                  <div className="overlap-group1-43">
                    <Link to="/account-page-alt-v2">
                      <div className="rectangle-20"></div>
                    </Link>
                    <div className="place-1 roboto-medium-white-30px">{place}</div>
                  </div>
                  <div className="overlap-group-60">
                    <Link to="/voucher-tool-v2-eligibility-questions">
                      <div className="yes roboto-medium-white-30px">{yes}</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <img className="profile-picture" src="/img/profile-picture@2x.svg" />
          </div>
        </div>
      </div>
    );
  }
}

export default AccountPageAltV2;
