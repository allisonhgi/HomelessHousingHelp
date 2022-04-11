import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import "./AccountPageVoucherClick.css";

class AccountPageVoucherClick extends React.Component {
  render() {
    const { place1, moreResources, voucherTools, rectangle1, pickUpWhereYouLe, place2, yes, logoProps } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="account-page-voucher-click screen">
          <div className="flex-col-24">
            <div className="flex-row-39">
              <Link to="/resources-logged-in">
                <div className="place-12 roboto-normal-summer-green-35px">{place1}</div>
              </Link>
              <Logo className={logoProps.className} />
              <div className="flex-col-25">
                <Link to="/resources-logged-in">
                  <div className="more-resources-52 roboto-normal-summer-green-35px">{moreResources}</div>
                </Link>
                <div className="voucher-tools-6 roboto-normal-summer-green-35px">{voucherTools}</div>
              </div>
            </div>
            <div className="overlap-group4-14">
              <img className="john-doe-1" src="/img/john-doe-1@2x.svg" />
              <img className="ellipse-2" src="/img/ellipse-2@2x.svg" />
              <img className="icon-star-1" src="/img/star-1-1@2x.svg" />
              <img className="rectangle-1-1" src={rectangle1} />
              <img className="profile-completion-2" src="/img/profile-completion@1x.svg" />
              <img className="your-profile-is-85-complete-1" src="/img/your-profile-is-85--complete@2x.svg" />
              <div className="overlap-group1-56 border-1px-black-4">
                <div className="pick-up-where-you-le-1 roboto-medium-black-38px">{pickUpWhereYouLe}</div>
                <div className="overlap-group-container-9">
                  <div className="overlap-group-79">
                    <Link to="/account-page">
                      <div className="rectangle-20-1"></div>
                    </Link>
                    <div className="place-13 roboto-medium-white-30px">{place2}</div>
                  </div>
                  <div className="overlap-group2-35">
                    <Link to="/voucher-tool-eligibility-questions">
                      <div className="yes-1 roboto-medium-white-30px">{yes}</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-row-40">
            <div className="overlap-group3-19">
              <div className="rectangle-9-1"></div>
              <img className="personal-information-1" src="/img/personal-information@2x.svg" />
              <img
                className="full-name-john-doe-h"
                src="/img/full-name--john-doe-housing-status--at-risk-email--jdoe-gmail-co@2x.svg"
              />
              <img className="edit-1" src="/img/edit@2x.svg" />
            </div>
            <div className="profile-section-small-container-1">
              <img className="profile-section-small-2" src="/img/profile-section---small@1x.svg" />
              <img className="profile-section-small-3" src="/img/profile-section---small-1@1x.svg" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountPageVoucherClick;
