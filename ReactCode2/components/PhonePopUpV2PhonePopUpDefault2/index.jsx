import React from "react";
import "./PhonePopUpV2PhonePopUpDefault2.css";

class PhonePopUpV2PhonePopUpDefault2 extends React.Component {
  render() {
    const { wouldYouLikeToGe, email, text } = this.props;

    return (
      <div className="phone-pop-up-v2-phone-pop-up-default-1 border-1px-black-4">
        <div className="would-you-like-to-ge roboto-medium-black-38px">{wouldYouLikeToGe}</div>
        <div className="overlap-group-container-6">
          <div className="overlap-group1-50">
            <div className="email roboto-medium-white-30px">{email}</div>
          </div>
          <div className="overlap-group-70">
            <div className="text roboto-medium-white-30px">{text}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default PhonePopUpV2PhonePopUpDefault2;
