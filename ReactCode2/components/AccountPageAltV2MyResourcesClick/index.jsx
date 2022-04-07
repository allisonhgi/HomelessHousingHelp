import React from "react";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MenuBar from "../MenuBar";
import ProfilePicture from "../ProfilePicture";
import Bix from "../Bix";
import PersonalInfo from "../PersonalInfo";
import "./AccountPageAltV2MyResourcesClick.css";

class AccountPageAltV2MyResourcesClick extends React.Component {
  render() {
    const {
      name,
      housingChoiceVouchers,
      theHousingChoiceV,
      removeFromResources,
      exit,
      savedVoucherToolData,
      bixProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="account-page-alt-v2-my-resources-click screen">
          <div className="flex-row-92">
            <HomePageLink />
            <Logo />
            <MenuBar />
          </div>
          <div className="overlap-group5-15">
            <div className="name-4 roboto-medium-black-55px">{name}</div>
            <ProfilePicture />
            <div className="overlap-group4-22">
              <div className="rectangle-1-3"></div>
              <img className="line-4-2" src="/img/line-4-1@1x.svg" />
              <div className="rectangle-10"></div>
              <div className="overlap-group2-44">
                <div className="housing-choice-vouchers-12 roboto-medium-black-30px-2">{housingChoiceVouchers}</div>
                <div className="the-housing-choice-v-13">{theHousingChoiceV}</div>
                <div className="overlap-group-89">
                  <div className="remove-from-resources">{removeFromResources}</div>
                  <Bix className={bixProps.className} />
                </div>
              </div>
              <div className="exit-1">{exit}</div>
              <div className="bix-4">
                <img className="vector-124" src="/img/vector-129@2x.svg" />
              </div>
              <div className="saved-voucher-tool-data-2 roboto-medium-black-38px">{savedVoucherToolData}</div>
              <PersonalInfo />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountPageAltV2MyResourcesClick;
