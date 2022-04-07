import React from "react";
import PhonePopUpV2PhonePopUpDefault2 from "../PhonePopUpV2PhonePopUpDefault2";
import "./PhonePopUpV2PhonePopUpDefault.css";

class PhonePopUpV2PhonePopUpDefault extends React.Component {
  render() {
    const { phonePopUpV2PhonePopUpDefault2Props } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="phone-pop-up-v2-phone-pop-up-default screen">
          <PhonePopUpV2PhonePopUpDefault2
            wouldYouLikeToGe={phonePopUpV2PhonePopUpDefault2Props.wouldYouLikeToGe}
            email={phonePopUpV2PhonePopUpDefault2Props.email}
            text={phonePopUpV2PhonePopUpDefault2Props.text}
          />
        </div>
      </div>
    );
  }
}

export default PhonePopUpV2PhonePopUpDefault;
