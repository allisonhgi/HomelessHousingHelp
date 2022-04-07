import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import Property1Variant32 from "../Property1Variant32";
import "./LogInPage.css";

class LogInPage extends React.Component {
  render() {
    const {
      place,
      moreResources,
      voucherTools,
      logIn1,
      spanText1,
      spanText2,
      spanText3,
      logIn2,
      logoProps,
      property1Variant321Props,
      property1Variant322Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="log-in-page screen">
          <div className="flex-row-13">
            <Link to="/home-page">
              <div className="place-6 roboto-normal-summer-green-35px">{place}</div>
            </Link>
            <Logo className={logoProps.className} />
            <div className="flex-col-10">
              <Link to="/resources">
                <div className="more-resources-59 roboto-normal-summer-green-35px">{moreResources}</div>
              </Link>
              <div className="voucher-tools-1 roboto-normal-summer-green-35px">{voucherTools}</div>
            </div>
          </div>
          <div className="log-in-1 header-2">{logIn1}</div>
          <div className="were-happy-youre-b robotoslab-normal-white-28px">
            <span className="robotoslab-normal-black-28px">{spanText1}</span>
            <span className="robotoslab-normal-amazon-28px">{spanText2}</span>
            <span className="robotoslab-normal-black-28px">{spanText3}</span>
          </div>
          <Property1Variant32>{property1Variant321Props.children}</Property1Variant32>
          <Property1Variant32 className={property1Variant322Props.className}>
            {property1Variant322Props.children}
          </Property1Variant32>
          <Link to="/account-page">
            <div className="profile-completion">
              <div className="overlap-group1-45">
                <div className="log-in-2 roboto-medium-white-25px">{logIn2}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default LogInPage;
