import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import Property1Variant32 from "../Property1Variant32";
import "./SignUpPage.css";

class SignUpPage extends React.Component {
  render() {
    const {
      place,
      moreResources,
      voucherTools,
      signUp1,
      spanText1,
      spanText2,
      spanText3,
      signUp2,
      logoProps,
      property1Variant321Props,
      property1Variant322Props,
      property1Variant323Props,
      property1Variant324Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="sign-up-page screen">
          <div className="flex-row-26">
            <Link to="/home-page">
              <div className="place-9 roboto-normal-summer-green-35px">{place}</div>
            </Link>
            <Logo className={logoProps.className} />
            <div className="flex-col-16">
              <Link to="/resources">
                <div className="more-resources-64 roboto-normal-summer-green-35px">{moreResources}</div>
              </Link>
              <div className="voucher-tools-4 roboto-normal-summer-green-35px">{voucherTools}</div>
            </div>
          </div>
          <div className="overlap-group2-27">
            <div className="sign-up header-2">{signUp1}</div>
            <div className="were-happy-youre-h robotoslab-normal-white-28px">
              <span className="robotoslab-normal-black-28px">{spanText1}</span>
              <span className="robotoslab-normal-amazon-28px">{spanText2}</span>
              <span className="robotoslab-normal-black-28px">{spanText3}</span>
            </div>
          </div>
          <Property1Variant32 className={property1Variant321Props.className}>
            {property1Variant321Props.children}
          </Property1Variant32>
          <Property1Variant32 className={property1Variant322Props.className}>
            {property1Variant322Props.children}
          </Property1Variant32>
          <Property1Variant32 className={property1Variant323Props.className}>
            {property1Variant323Props.children}
          </Property1Variant32>
          <Property1Variant32 className={property1Variant324Props.className}>
            {property1Variant324Props.children}
          </Property1Variant32>
          <Link to="/voucher-tool-starting-screen">
            <div className="profile-completion-1">
              <div className="overlap-group1-52">
                <div className="sign-up-1 roboto-medium-white-25px">{signUp2}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default SignUpPage;
