import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import Property1Default5 from "../Property1Default5";
import "./AccountPage.css";

class AccountPage extends React.Component {
  render() {
    const {
      place,
      moreResources,
      voucherTools,
      name,
      addInfo,
      yourProfileIs85Complete,
      personalInformation,
      spanText1,
      spanText2,
      spanText3,
      spanText4,
      spanText5,
      spanText6,
      spanText7,
      spanText8,
      spanText9,
      spanText10,
      edit,
      logoProps,
      property1Default51Props,
      property1Default52Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="account-page screen">
          <div className="flex-col-14">
            <div className="flex-row-26">
              <Link to="/home-page">
                <div className="place-8 roboto-normal-summer-green-35px">{place}</div>
              </Link>
              <Logo className={logoProps.className} />
              <div className="flex-col-15">
                <Link to="/resources-logged-in">
                  <div className="more-resources-42 roboto-normal-summer-green-35px">{moreResources}</div>
                </Link>
                <div className="voucher-tools-3 roboto-normal-summer-green-35px">{voucherTools}</div>
              </div>
            </div>
            <div className="overlap-group3-15">
              <img className="icon-star" src="/img/star-1@2x.svg" />
            </div>
            <div className="overlap-group5-5">
              <div className="name header-2">{name}</div>
              <div className="rectangle-1"></div>
              <div className="overlap-group-container-6">
                <div className="overlap-group-74">
                  <img className="line-3" src="/img/line-3@2x.svg" />
                </div>
                <div className="overlap-group2-29">
                  <div className="add-info roboto-medium-white-25px">{addInfo}</div>
                </div>
              </div>
              <div className="your-profile-is-85-complete roboto-medium-black-30px-2">{yourProfileIs85Complete}</div>
            </div>
          </div>
          <div className="flex-row-27">
            <div className="overlap-group4-11">
              <div className="rectangle-9"></div>
              <div className="personal-information roboto-medium-black-45px">{personalInformation}</div>
              <div className="full-name-john-doe">
                <span className="robotoslab-normal-black-35px">{spanText1}</span>
                <span className="robotoslab-normal-black-35px-2">{spanText2}</span>
                <span className="robotoslab-normal-black-35px">{spanText3}</span>
                <span className="robotoslab-normal-black-35px-2">{spanText4}</span>
                <span className="robotoslab-normal-black-35px">{spanText5}</span>
                <span className="robotoslab-normal-black-35px-2">{spanText6}</span>
                <span className="robotoslab-normal-black-35px">{spanText7}</span>
                <span className="robotoslab-normal-black-35px-2">{spanText8}</span>
                <span className="robotoslab-normal-black-35px">{spanText9}</span>
                <span className="robotoslab-normal-black-35px-2">{spanText10}</span>
              </div>
              <div className="edit roboto-medium-summer-green-30px">{edit}</div>
            </div>
            <div className="profile-section-small-container">
              <Property1Default5 savedVoucherToolData={property1Default51Props.savedVoucherToolData} />
              <Property1Default5
                savedVoucherToolData={property1Default52Props.savedVoucherToolData}
                className={property1Default52Props.className}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountPage;
