import React from "react";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MenuBar from "../MenuBar";
import ProfilePicture from "../ProfilePicture";
import Property1Default7 from "../Property1Default7";
import PersonalInfo from "../PersonalInfo";
import "./AccountPageAltV22.css";

class AccountPageAltV22 extends React.Component {
  render() {
    const { name, property1Default71Props, property1Default72Props } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="account-page-alt-v2 screen">
          <div className="flex-row-42">
            <HomePageLink />
            <Logo />
            <MenuBar />
          </div>
          <div className="overlap-group6-3">
            <div className="name-2 roboto-medium-black-55px">{name}</div>
            <ProfilePicture />
            <div className="overlap-group5-8">
              <div className="rectangle-1-2"></div>
              <img className="line-4-1" src="/img/line-4-1@1x.svg" />
              <Property1Default7 savedVoucherToolData={property1Default71Props.savedVoucherToolData} />
              <Property1Default7
                savedVoucherToolData={property1Default72Props.savedVoucherToolData}
                className={property1Default72Props.className}
              />
              <PersonalInfo />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountPageAltV22;
